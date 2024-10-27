let name = 'AAA';
let age = 20;
let isGood = true;

// age + 10 = ?
let result1 = age + 10; // 30
// Giải thích: Biến `age` có giá trị là 20, cộng thêm 10 sẽ ra kết quả là 30.

// age % 3 = ?
let result2 = age % 3; // 2
// Giải thích: Biến `age` có giá trị là 20, chia lấy phần dư cho 3, kết quả là 2.

// name + ' BBB' = ?
let result3 = name + ' BBB'; // 'AAA BBB'
// Giải thích: Biến `name` có giá trị là 'AAA', cộng thêm chuỗi ' BBB' sẽ ra 'AAA BBB'.

// !isGood = ?
let result4 = !isGood; // false
// Giải thích: Biến `isGood` có giá trị là true, phủ định nó bằng dấu `!` sẽ ra false.

// name == 'aaa' && age >= 20 → ?
let result5 = name == 'aaa' && age >= 20; // false
// Giải thích: `name == 'aaa'` là false (vì 'AAA' khác 'aaa'), và `age >= 20` là true. Kết quả phép AND (&&) là false vì một trong hai biểu thức là false.

// name != 'aaa' && isGood → ?
let result6 = name != 'aaa' && isGood; // true
// Giải thích: `name != 'aaa'` là true (vì 'AAA' khác 'aaa'), và `isGood` là true. Kết quả phép AND (&&) là true vì cả hai biểu thức đều là true.

// !(age < 10) && !isGood → ?
let result7 = !(age < 10) && !isGood; // false
// Giải thích: `!(age < 10)` là true (vì `age < 10` là false), và `!isGood` là false (vì `isGood` là true). Kết quả phép AND (&&) là false vì một trong hai biểu thức là false.
