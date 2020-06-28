//compairing objects
//* == is used to compare values
//* === is used to compare both values and type


//#compairing objects with both
console.log({} == {});
console.log({} === {});//output is false(becoz objects are very complex)

//#** to get true output while comparing objects,but we shouldn't compare objects(they are diff. becoz they will be stored in diff. parts of memory) 
let object1 = {};
let object2 = object1;
console.log(object1 === object2);


