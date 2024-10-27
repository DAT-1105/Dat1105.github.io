let age = 25;
let isMarried = false;
let isRich = true;
let result1 = age > 25 && isMarried && isRich; // false
let result2 = (age <= 25 || isMarried) && isRich; // true
let result3 = (age > 10 || isRich) && isMarried; // false
let result4 = !(age >= 15 && isMarried) && isRich; // true
let result5 = !(age <= 20) || !(isMarried && isRich); // true
let result6 = (age > 8 && !isMarried) || isRich; // true
let result7 = !(age < 8 && !isMarried) || isRich; // true
let result8 = (age == 8 && isMarried) || !isRich; // false
