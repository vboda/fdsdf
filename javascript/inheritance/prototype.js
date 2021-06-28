/* 
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker =  maker;
    this.engine = engine;
  }
  getDetails(){
      return (`The name of the bike is ${this.name}.`)
  }
}
// Making object with the help of the constructor
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
  
console.log(bike1.name);    // Hayabusa
console.log(bike2.maker);   // Kawasaki
console.log(bike1.getDetails());

*/
/* 
function Vehicle(name, maker,engine){
    this.name = name;
    this.maker = maker;
    this.engine = engine;
}

Vehicle.prototype.getDetails = function(){
    return (`The name of the bike is ${this.name}.`)
}

let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
  
console.log(bike1.name);    // Hayabusa
console.log(bike2.maker);   // Kawasaki
console.log(bike1.getDetails()); */



/* 


//Inhertiance example
class person{
    constructor(name){
        this.name = name;
    }
    //method to return the string
    toString(){
        return (`Name of person: ${this.name}`);
    }
}
class student extends person{
    constructor(name,id){
        //super keyword to for calling above class constructor
        super(name);
        this.id = id;
    }
    toString(){
        return (`${super.toString()},Student ID: ${this.id}`);
    }
}
let student1 = new student('Mukul',22);
console.log(student1.toString());


*/

function person(name){
    this.name = name;
}
person.prototype.getName = function(){
    return `Name of person: ${this.name}`;
}
function student(name, id){
    person.call(this, name);
    this.id = id;
}

// student.prototype = person.prototype;

let student1 = new student('Mukul',22);
console.log(student1.getName());

