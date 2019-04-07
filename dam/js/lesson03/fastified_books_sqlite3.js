'use strict';

const fastify = require('fastify')({ 
    logger: true, 
    ignoreTrailingSlash: true 
});

const fs = require('fs');
 
const { Storage, Book } = require("./models.js");

Storage.path = "library.sqlite";

fastify.get('/api/books', async (request, reply) => {
    return await Book.retrieveAll();
  });

fastify.get('/api/book/:id', async (request, reply) => {
    let book = Book.retrieveByPK(request.params.id);
    if (book) {
        return book;
    }
    else {
        reply
            .code(404)
            .send({'status': 'Book not found'});
    }
  });

fastify.delete('/api/book/:id', async (request, reply) => {
    let r = await Book.delete(request.params.id);
    if (r) {
        reply
            .code(202)
            .send({'status': 'deleted'});
    }
    else {
        reply
            .code(404)
            .send({ status: "failed" });
    };
  });

fastify.post('/api/books', async function (request, reply) {
    if (request.headers['content-type'] != 'application/json') {
        reply.code(400);
        return { status: "failed", error: "Only application/json contents are allowed" };
    }
    
    let b = request.body;
    let book;
    try {
        book = new Book(b.title, b.author, b.year);
    }
    catch (err) {
        reply.code(400);
        return { status: "failed", error: err };
    }
    let id = await book.save();
    if (id) {
        reply.code(201);
        reply.send({ status: "ok", id: id });
    }
    else {
        reply.code(500);
        reply.send({ status: "failed", error: "Database constraints caused rejection" });
    }
})

fastify.put('/api/book/:id', async function (request, reply) {
    // TODO: DRY (compare with fastify.post)
    if (request.headers['content-type'] != 'application/json') {
        reply.code(400);
        return { status: "failed", error: "Only application/json contents are allowed" };
    }

    let b = request.body;
    
    let book;
    try {
        book = new Book(b.title, b.author, b.year);
        book.id = request.params.id;
    }
    catch (err) {
        reply.code(400);
        return { status: "failed", error: err };
    }
    let id = await book.save();
    if (id) {
        reply.code(201);
        reply.send({ status: "ok", id: id });
    }
    else {
        reply.code(404);
        reply.send({ status: "failed", error: "Not found" });
    }
})

fastify.patch('/api/book/:id', async function (request, reply) {
    // TODO: DRY (compare with fastify.put)
    if (request.headers['content-type'] != 'application/json') {
        reply.code(400);
        return { status: "failed", error: "Only application/json contents are allowed" };
    }

    let b = request.body;
    
    let book = await Book.retrieveByPK(request.params.id);
    
    if (!book) {
        reply.code(404);
        return { status: "failed", error: "Not found" };
    }
    
    let r = book.update(b);
    
    if (r===true) {
        let id = await book.save();
        if (id) {
            reply.code(202);
            return { status: "ok", id: id };
        }
        else {
            reply.code(500);
            return { status: "failed", error: "Unpredicted failure" };
        }
    }
    else {
        reply.code(400);
        return { status: "failed", error: r };
    }
    
})


const start = async () => {
    try {
      await fastify.listen(3000)
      fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  };
  
start();


/*
 * 
 * curl examples
 * 

curl -i http://localhost:3000/api/books
curl -i http://localhost:3000/api/book/4
curl -X DELETE localhost:3000/api/book/4
curl -i -H "Content-Type: application/json" -X POST --data '{"title": "aaa", "author": "bbb", "year": 1990 }' localhost:3000/api/books
curl -i -H "Content-Type: application/json" -X PUT --data '{"title": "ccc", "author": "bbb", "year": 1990 }' localhost:3000/api/book/33
curl -i -H "Content-Type: application/json" -X PATCH --data '{"year": 2019 }' localhost:3000/api/book/33

*/
