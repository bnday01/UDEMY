
// Write a javascript function that takes an array of numbers and a target number. 
//The function should find two different numbers in the array that, when added together, give the target number. 
//For example: answer([1,2,3], 4)should return [1,3].

const answer = (arr, target) => {
  //Initialize container array
  const pairs = [];
  //Map through original array
  arr.map((num) => {
    //Return a second map that compares the argument num of the first map
    return arr.map(acc => { (num + acc == target) ? pairs.push(
      //Arrange [small, large] pairs
      [Math.min(num,acc), Math.max(num,acc)]
      ) : null});
  });
    //Remove duplicate arrays and duplicate key/vals
  const result = pairs.filter(array => array[0] != array[1]).filter((array,index) => pairs.indexOf(array) != index);

  //Spread Arrays
  return console.log(...result);
  
}
answer([1,2,3,4,5,6,7,8], 12);

