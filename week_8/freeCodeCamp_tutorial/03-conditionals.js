//// conditionals

// if, else, else if
if ('some string' === 'another string')
{
    console.log('The strings are equal');
}
else 
{
    console.log('the strings are not equal');
}

// switch case
const colors = ['orange', 'green', 'yellow', 'purple', 'blue'];
const randomIndex = Math.floor(Math.random() * colors.length);  // gets a random number between 0 and 4
const randomColor = colors[randomIndex];
// 0-0: you can use strings with switch case statements like we're doing bellow (:
switch (randomColor)
{
    case 'orange':
        console.log('the color is orange');
        break;
    case 'green':
        console.log('the color is green');
        break;
    case 'yellow':
        console.log('the color is yellow');
        break;
    case 'purple':
        console.log('the color is purple');
        break;
    case 'blue':
        console.log('the color is blue');
        break;
    default:
        console.log('No color found');
}
