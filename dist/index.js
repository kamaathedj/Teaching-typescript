"use strict";
var id = 5;
function play(arr) {
    console.log(arr.split(''));
}
play('kamaa');
function killTerminal() {
    console.log("compilling");
}
function am() {
    return 1 + 2;
}
let arr = [34, "NANA", 23, true];
const kamaa = {
    name: "kamaa",
    favNumber: 13,
};
const human = {
    kingdom: "Animalia",
    class: "Homo"
};
console.log(`Humans belong in kingdom ${human.kingdom} and class ${human.class}`);
class player {
    constructor(name, playerNumber, salary) {
        this.toString = () => {
            return `${this.name} is a psg player number ${this.playerNumber} and is paid ${this.salary}ksh weekly`;
        };
        this.name = name;
        this.playerNumber = playerNumber;
        this.salary = salary;
    }
    currentDate() {
        console.log(this.name);
        return new Date();
    }
}
let messi = new player("Messi", 7, 100000);
console.log(messi.toString());
console.log(messi.currentDate());
