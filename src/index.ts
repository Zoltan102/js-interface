interface Multimedia{
    title : string;


    write() : void;
    toString() : string;

}

class Music implements Multimedia{
    title: string;
    length: number;

    constructor(title : string, length : number){
        this.title = title;
        this.length = length;
    }

    write(): void {
        console.log(this.toString());
    }
    toString(): string {
        return this.title + "(" + this.length +" s)";
    }   
}

class Book implements Multimedia{
    #title: string;

    constructor(title : string){
        this.#title = title;
    }

    get title(){
        return this.#title;
    }

    set title(title : string){
        this.#title = title;
    }

    write(): void {
        console.log(this.toString());
    }
    toString(): string {
        return this.#title;
    }

}

class Movie{
    title: string;
    length: number;

    constructor(title : string, length: number) {
        this.title = title;
        this.length = length;
    }

    write(): void {
        console.log(toString());
    }

    toString() : string{
        return this.title + "(" + this.length + " s)";
    }
}

type BasicType = number | boolean | string;

let products : Multimedia[] = [
    new Music('Finale', 143),
    new Book('The Lord of trhe Rings'),
];

for (let p of products){
    p.write();
}

interface Streamable {
    title: string;
    length: number;
}

let streamableProduct : Streamable[] = [
    new Music('Sweet Child of Mine', 200),
    new Movie('Harry Potter', 2000),
        {title : 'Thunderstruck', length: 198},

];