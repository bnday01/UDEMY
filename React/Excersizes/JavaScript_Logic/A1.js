
// Question 1: Clean the room function: 
//given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
//make a function that organizes these into individual 
//array that is ordered. For example answer(ArrayFromAbove) should 
//return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
//Bonus: Make it so it organizes strings differently from number types. 
//i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]


const arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20,"1","2","3"];

//Organize them smallest < largest
let sort = arr.sort((acc,num) => acc - num);

//Separate strings from numbers
const splitString = (arr) => arr.filter(char => typeof char == "string" );

// initialize a container array
const newArr = [];

//create seperate arrays for each group
const matrices = (arr) => {
  let control = arr[0];
  const matrix = [];
  arr.map((num,index) => (num === control) ? matrix.push(num) : null);
  return matrix; 
}

//add group arrays to new array
const combine = (arr) => newArr.push(arr);

//remove duplicate numbers and strings
const remove = (arr,control) => arr.filter(num => num != control).filter(num => typeof num != "string");

//Catching values of string numbers
const split = splitString(sort);

// //loop through organized array
while (sort.length > 0){
combine(matrices(sort));
sort = remove(sort,sort[0]);
}

//remove single length sub arrays
const result = newArr.map(sub => (sub.length === 1) ? sub[0] : sub);

//add strings to final array
//return
console.log(result.concat([split]));



