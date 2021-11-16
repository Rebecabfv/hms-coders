// Programação orientada a objeto
class Book {
    constructor (title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read () {
        return 'Estou lendo ${this.title}';
    }
}

let book = new Book ('Algoritmos para viver', 'Brian', 500);
let otherBook = new Book ('Um Exu em NY', 'Cidinha da Silva', 100);

console.log(book, otherBook);
console.log(book.read());

// herdando de outra classe
class itBook extends Book {
    constructor (title, author, pages, technology){
        super (title, author, pages);
        this.technology = technology;
    }
}

let itbook = new itBook ('Algoritmos para viver', 'Brian', 500, 'Algoritmos');

console.log(itbook);

// encapsulamentos

class Person {
    constructor (name){
        this._name = name;
    }

    // get para permitir o acesso a variável encapsulada
    get name(){
        return this._name;
    }

    // permite atribuir outro valor
    set name(value){
        this._name = value;
    }
}

let person = new Person ('Rebeca');
person.name = 'Re';
console.log(person.name);