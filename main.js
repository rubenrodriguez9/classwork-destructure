/*You will probably not have to take destructuring to such a level as this but this is for you to really wrap your brains around the mechanics.
EVERY EXERCISE SHOULD USE DESTRUCTURING*/


// 1. 
let arr = [
   ['name', 'jon'],
   ['age', 20],
   ['eyes', 'blue'],
   ];


 //Create an object out of the arr above then using destructuring, declare variables using the object keys.
 let newArr = Object.fromEntries(arr)
 let {name, age, eyes} = newArr
 
 console.log(newArr)
 console.log(name, age, eyes)
// 2. 

 arr = [1,2,3,4,5,6]
  //a. Set 3 variables names: the third index should be called 'three', the fourth item 'four' and the rest of the items thereafter 'rest'
  //b. Swap the third and fourth item variable values


let  [, , three, four, ...rest] = arr;

console.log(three, four, rest);

// let temp = three;
// three = four;
// four = temp
[three, four] = [four, three];

console.log(three, four)