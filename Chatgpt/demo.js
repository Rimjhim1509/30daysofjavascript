/**function getRandomInt(max){
 * 
    return Math.floor(Math.random()*max);

}
console.log(getRandomInt(3));
console.log(getRandomInt(1));
console.log(Math.random())
**/


/** 
function getRandomIntInclusive(min,max){
    const minCieled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random()* (maxFloored - minCieled + 1)+ minCieled);
}
**/
  
const person ={
    name: ["Bob","Smith"],
    age: 32,
    bio: function(){
        console.log(`${this.name[0]} ${this.name[1]} ${this.age} years old. `);
    },
introduceSelf: function (){
    console.log(`Hi I'm ${this.name}`);
    
}
    }
console.log(person.bio());
console.log(person.introduceSelf());
