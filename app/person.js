import $ from 'jQuery';

class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        // ES5
        // return 'Hello, my name is ' + this.name;

        //ES6
        return `Hello, my name is ${this.name}.`;
    }
    sayGoodbye () {
        return `It's time for me to go.`;
    }
}

class SuperPerson extends Person {
    constructor (name, age) {
        super(name);
        this.age = age;
    }
    sayHello () {

        // jQuery
        const container = $('<h1>', {
          text: super.sayHello()
        });
        $('#root').append(container);

        // // Core JavaScript
        // const container = document.createElement('h1');
        // container.innerText = super.sayHello();
        // document.getElementById('root').appendChild(container);

        return 'Hell yeah, super'
    }
    superSayHi () {
        return `HELLO! MY NAME IS ${this.name} and I am ${this.age} years old.`;
    }
}

export default SuperPerson;