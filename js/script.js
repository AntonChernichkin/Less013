"use strict";

if (4 == 5) {
console.log('OK!');
} else {
    console.log('Error');
}

let num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {

//     console.log('Too much');
// } else {
//     console.log('OK!');
// }

// (num<35) ? console.log('OK!') : console.log('Error');

// switch (num) {
//     case 31:
//         console.log('No!');
//         break;
//     case 30:
//         console.log('Yes');
//         break;
//     default:
//         console.log('Oohh, Maaan!');
//         break;
// }

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i === 6) {
        // break;
        continue;
    }  
    console.log(i);
}