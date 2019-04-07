const sqlite = require("./aa-sqlite")

class Storage {
}

class Book {
    constructor (title, author, year) {
        this._id = null;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    set id(value) {
        this._id = value;
    }
    set title(value) {
        this._title = value;
    }
    set author(value) {
        this._author = value;
    }
    set year(value) {
        if (value!=null && typeof value != 'number'){
            throw "The year must be a number!";
        }
        this._year = value;
    }
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get year() {
        return this._year;
    }
    async save() {
        await sqlite.open(Storage.path);
        let r;
        let result;
        if (this._id) {
            r = await sqlite.run('UPDATE books SET title = ?, author = ?, year = ? WHERE id = ?', [this.title, this.author, this.year, this._id]);
            result = r.changes > 0 ? this._id : false;
        }
        else {
            try {
                r = await sqlite.run('INSERT INTO books (id, title, author, year, is_available) VALUES(null, ?, ?, ?, 1)', [this.title, this.author, this.year]);
                result = r.lastID;
            }
            catch (err) {
                result = false;
            }
        }
        await sqlite.close();
        return result;  // we return the id of the book just inserted / updated
    }
    
    asObject() {
        return { id: this._id, title: this.title, author: this.author, year: this.year };
    }
    
    update(newdata) {
        try {
            let self = this;
            ['title', 'author', 'year'].forEach(function(property) {
                if (newdata[property]) {
                    self[property] = newdata[property];
                }
            });
            return true;
        }
        catch (err) {
            return err;
        }
    }
    
    static async delete(id) {
        await sqlite.open(Storage.path);
        let r = await sqlite.run('UPDATE books SET is_available = 0 WHERE id = ? AND is_available = 1', [id]);
        await sqlite.close();
        return r.changes > 0; // we return true if the update affected at least a row, false otherwise
    }
    
    static async retrieveByPK(id) {
        await sqlite.open(Storage.path);
        let r = await sqlite.get("SELECT id, title, author, year FROM books WHERE id = ? AND is_available = 1", [id]);
        await sqlite.close();
        if (r) {
            let b = new Book(r.title, r.author, r.year);
            b.id = r.id;
            return b;
        }
        else {
            return null;
        }
    }
    static async retrieveAll() {
        await sqlite.open(Storage.path);
        console.log(sqlite);
        let r = await sqlite.all("SELECT id, title, author, year FROM books WHERE is_available = 1", []);
        let books = [];
        await sqlite.close();
        r.forEach(function(row) {
            let b = new Book(row.title, row.author, row.year);
            b._id=row.id;
            books.push(b.asObject());
        });
        return books;
    }
}

/*
 * Storage.path = "library.sqlite";
console.log(Storage.path);
/*
let b = new Book('aaddd', 'bbccc' , 1980);
b.title="Accipicchia!";
b.save();
*/
//console.log(b);
//b.save().then(x => { console.log(x); }).catch((err)=> {console.log(err)});

//let b1;
/*
Book.retrieveByPK(6).then((book) => {
    b1=book;
    console.log(b1);
    b1.delete().then(x=>{ console.log("deleted:" + x); });
});
*/
/*
Book.retrieveAll().then((books) => {
    console.log(books);
});
*/

module.exports = {
    Storage,
    Book
}
