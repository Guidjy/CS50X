//// functions

function myFunction()
{
    console.log('0-0 func1');
}
myFunction();

// immediately invoked functions: declaring and calling functions in the same step
// wrap the function in parenthesis and call it wwith another set of parenthesis
// 0-0: You don't even have to name these (anonymous functions)
(function ()
{
    console.log('immediately invoked function');
})();

// parameters and arguments
function anotherFunction(param1, param2)
{
    console.log(param1);
    console.log(param2);
}
anotherFunction(10, 'nibo');

// arrow functions: must me assigned to a variable
const arrowFunction = () => {
   console.log('arrow functions');
}
arrowFunction();

// functions can be assigned to variables and objet properties (methods):
function objectFunction()
{
    return 20;
}

const temp = objectFunction;
console.log(typeof temp);
console.log(temp());

const myObject =
{
    prop1: 50,
    prop2: objectFunction
}

console.log(myObject.prop2());

// built in JavaScript methods

const myString = 'zach';
const newString = myString.replace('h', 'k');
console.log(newString);
