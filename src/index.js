"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Book_title;
class Music {
    constructor(title, length) {
        this.title = title;
        this.length = length;
    }
    write() {
        console.log(this.toString());
    }
    toString() {
        return this.title + "(" + this.length + " s)";
    }
}
class Book {
    constructor(title) {
        _Book_title.set(this, void 0);
        __classPrivateFieldSet(this, _Book_title, title, "f");
    }
    get title() {
        return __classPrivateFieldGet(this, _Book_title, "f");
    }
    set title(title) {
        __classPrivateFieldSet(this, _Book_title, title, "f");
    }
    write() {
        console.log(this.toString());
    }
    toString() {
        return __classPrivateFieldGet(this, _Book_title, "f");
    }
}
_Book_title = new WeakMap();
class Movie {
    constructor(title, length) {
        this.title = title;
        this.length = length;
    }
    write() {
        console.log(toString());
    }
    toString() {
        return this.title + "(" + this.length + " s)";
    }
}
let products = [
    new Music('Finale', 143),
    new Book('The Lord of trhe Rings'),
];
for (let p of products) {
    p.write();
}
let streamableProduct = [
    new Music('Sweet Child of Mine', 200),
    new Movie('Harry Potter', 2000),
    { title: 'Thunderstruck', length: 198 },
];
