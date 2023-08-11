let isAlive = NaN;

function bulle() {
  console.log(isAlive ?? "hello");
}
bulle();

let Person2 = {
  name: " Peace",
  Occupation: "cashier",
};

let Person = {
  name: "Chigozie",
  Occupation: "management",
};

function getOccupation() {
  console.log(this.Occupation);
}
Person.getOccupation = getOccupation;

Person.getOccupation();



let arra = [ 2, 3,4,5,6,7,8,]

function heloarray(){
for(let i =0; i<this.length; i++ ){
    console.log(Math.pow(this[i],3))
}

}

arra.suu = heloarray

arra.suu()


