let a = 10;
let b = 20;
let c = 30;
let d = '40';
let result1 = a + b + c; // 60
let result2 = a - b / c; // 10 - (20 / 30) = 9.333...
let result3 = a - (b * c); // 10 - (20 * 30) = -590
let result4 = d - (a * b) - c; // "40" - 200 - 30 = NaN
let result5 = a + b + c + d; // "602040"
let result6 = d + a + b + c; // "40102030"
let result7 = d + a - b + c; // "40" + 10 - 20 + 30 = NaN
let result8 = a - b + d - c; // 10 - 20 + "40" - 30 = NaN
let result9 = d - c + a - b; // "40" - 30 + 10 - 20 = NaN
let result10 = a * b + d * c; // 10 * 20 + "40" * 30 = 200 + 1200 = 1400

