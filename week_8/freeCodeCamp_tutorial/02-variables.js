const result1 = 20 === 20 ? 'values match' : 'values do not match';
console.log(result1);

// this is the same as doing

let result2;
if (20 === 20)
{
    result2 = 'values match';
}
else
{
    result2 = 'values do not match';
}
console.log(result2);
