//Solve these problems:

//#1 Create a one line function that adds adds two parameters

//Closure: What does the last line return?
const addTo = x => y => x + y;
var addToTen = addTo(10); //Sets X as 10;
addToTen(3) //Sets Y as 3 and evaluates to 13;

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);//Sets a to 30, returns
//function of b => 30 + b.
//Sets b to 1, evaluates to 31;



//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5); //sets a to 5 and returns f(b)
add5(12); //Sets b to 12 and evaluates to 17;

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10);
//sets a to 10;
// first g(a) evaluates (add1(a)) to 11
// returns f(11) which evaluates (add5(11))
//evaluates to 16;


//What are the two elements of a pure function?
//No side effects, determinism (always evaluates the same);