var id :  Number = 5
function play (arr:string){
    console.log(arr.split(''));
}

    play('kamaa')
    
function killTerminal(){
    console.log("compilling")
}
   
    
//inferred types
function am(){
    return 1+2
}

//union types : it is possible to have two types , check array below
let arr :(string | number | boolean)[] = [34,"NANA",23,true]



//fun stuff
//objects and interfaces
interface Person{
    name:String,
    favNumber:number
}
const kamaa:Person={
    name:"kamaa",
    favNumber:13,
}


//types
type kingdom = "Animalia"| "Plantae"
type Human={
    "kingdom":kingdom,
    "class":string,
}

const human:Human={
    kingdom:"Animalia",
    class:"Homo"
}
console.log(`Humans belong in kingdom ${human.kingdom} and class ${human.class}`)



class player{
     name:string;
     playerNumber: number;
     salary:number

     constructor(name:string, playerNumber:number,salary:number){
        this.name = name;
        this.playerNumber = playerNumber;
        this.salary = salary;
     }
      toString = ()=>{
         return `${this.name} is a psg player number ${this.playerNumber} and is paid ${this.salary}ksh weekly`
     }

      currentDate() {
          console.log(this.name);
         return new Date();
         
     }

     
}
let messi = new player("Messi",7,100000)
console.log(messi.toString())
console.log(messi.currentDate())