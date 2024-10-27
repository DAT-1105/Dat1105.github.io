let x = true;
let y = true;
let z = false;

// x && y && z → ?
let result1 = x && y && z; // false
// Giải thích: cả x, y và z đều phải là true để kết quả là true. Ở đây z là false, nên kết quả là false.

// x && y && !z → ?
let result2 = x && y && !z; // true
// Giải thích: !z là true (vì z là false), nên cả x, y và !z đều là true.

// (x && y) || z → ?
let result3 = (x && y) || z; // true
// Giải thích: (x && y) là true, và true || z (dù z là false) vẫn là true.

// (x && y) || !z → ?
let result4 = (x && y) || !z; // true
// Giải thích: (x && y) là true, và true || !z (là true vì z là false) vẫn là true.

// x && (y || z) → ?
let result5 = x && (y || z); // true
// Giải thích: (y || z) là true (vì y là true), và true && x (cả hai đều là true) nên kết quả là true.

// x && !(y || z) → ?
let result6 = x && !(y || z); // false
// Giải thích: (y || z) là true (vì y là true), nên !(y || z) là false. Và x && false là false.

// x && (y || !z) → ?
let result7 = x && (y || !z); // true
// Giải thích: !z là true (vì z là false), nên (y || !z) là true, và x && true là true.

// x && (!y || z) → ?
let result8 = x && (!y || z); // false
// Giải thích: !y là false (vì y là true) và z là false, nên (!y || z) là false. Và x && false là false.
