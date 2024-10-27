let x = true;
let y = false;
let z = 10;
let result1 = x && y; // false
let result2 = x && !y; // true
let result3 = x && z == 10; // true
let result4 = x && z == 10; // true
let result5 = !(x && z == 10); // false
let result6 = !(x && z == 50); // true
let result7 = x && y && z == 10; // false
let result8 = x && !y && z == 10; // true
let result9 = x || y || z == 10; // true
let result10 = (x && y) || z != 10; // false
let result11 = !(x && z == 10) || y; // false
