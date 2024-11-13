let isTall = true;
let isMuscle = false;
let isHandsome = true;
let result1 = isTall && isMuscle; // false
let result2 = !isHandsome; // false
let result3 = isTall || !isMuscle; // true
let result4 = isTall || !(isMuscle && isHandsome); // true
let result5 = isMuscle && !(isTall || isHandsome); // false
