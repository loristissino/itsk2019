'use strict';

const fastify = require('fastify')({ 
    logger: true, 
    ignoreTrailingSlash: true 
});

const fs = require('fs');
 
class Stack{
   constructor(name, size) {
       this._name = name;
       this._size = size;
       this._s = [ ];
   }
   get name() {
       return this._name;
   }
   set name(name) {
       this._name = name;
   }
   get empty() {
       return this._s.length == 0;
   }
   get full() {
       return this._s.length >= this._size;
   }
   push(value) {
       if (this.full) {
          return false;
       }
       else {
          this._s.push(value);
          return true;
       }
   }
   pop() {
       return this._s.pop();
   }
   peek() {
       return this._s[this._s.length-1];
   }
    
}

var s = new Stack('My Fastified Stack', 5);

s.push(1000);
s.push(2000);


fastify.get('/api/stack', async (request, reply) => {
    return { stack: s.name, full: s.full, peek: s.peek() };
  });

fastify.delete('/api/stack', async (request, reply) => {
    if (s.empty) {
        reply.code(404);
        reply.send({ status: "failed" });
    } else {
        return { value: s.pop() };
    }
    
  });

fastify.post('/api/stack', function (request, reply) {
    let r = s.push(request.body);
    if (r) {
        reply.code(201);
        reply.send({ status: "ok" });
    }
    else {
        reply.code(507);
        reply.send({ status: "failed" });
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

curl -i localhost:3000/api/stack
curl -X DELETE localhost:3000/api/stack
curl -i -H "Content-Type:text/plain" -X POST --data-raw  7000 localhost:3000/api/stack
*/
