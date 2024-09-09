const variable1 = 'nibo';
const variable2 = 10;
const variable3 = { firstProperty: 'Hello world'};
console.log(variable3);

//// declaration and assignement

let newVariable;   // declaration
newVariable = 20;  // assignement

//// const vs let vs var

// var: not recommended/legacy because variables delared with this keyword can be redeclared

// let: used whenever you expect to reasign a value to a variable
let count;
count = 0;
count++;  // ok

// const: used for constant variables
const pi = 3.1415;
// pi++ >>> not ok

// 0-0: if you don't use a keyword like let or const you create a global variable
// 0-0: camel case is preferred in js

// peep
console.log(typeof variable1);
console.log(typeof pi);
console.log(variable1 + pi);

// peep 2
const number1 = '10';  // string
const number2 = 20;    // number
console.log(Number(number1) + number2);

//// data types

// string
const stringValue = 'nibo';
// number
const numberValue = 2.7;
// boolean
const booleanValue = true;
// arrays
const array = [10, 'string', { property1: '0-0'}, [1, 2]];

//// objects: "complex containers"

const objectVariable = {
    // key - value pairs
    prop1: 20,
    prop2: '50'
};
// accesing values in an objet
console.log(objectVariable.prop1);
console.log(objectVariable['prop1']);

const nestedObject = {
    layer1: {
        layer2: {
            layer3: {
                targerValue: 70
            }
        }
    }
}
console.log(nestedObject.layer1.layer2.layer3.targerValue);




