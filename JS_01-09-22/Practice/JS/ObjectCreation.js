
// JSON Format 

const person={
    name:'Abhishek',
    address:{
        permanat:'Sangli',
        current:'Pune'
    },
    age:22
}

console.log(person);

// Object creation Object()
const bike=new Object();

bike.name='Dream Yuga';
bike.company='Honda'

console.log(bike);

// Functional Object
function Person(name,address,age){
    this.name=name;
    this.address=address;
    this.age=age;
}
Person.prototype.canVote = function (){
    if(this.age<=18){
        console.log(`Person ${this.name} can vote`)
    }
    else{
        console.log(`Person  ${this.name} can not vote`)
    }
}

const p1=new Person('Abhi','Sangli',22);
p1.canVote();