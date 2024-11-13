//Khai báo 1 function nhận đầu vào là chuỗi name, thực hiện in ra màn hình “Hello world, ” + name.
function greet(name) {
    console.log("Hello world, " + name);
}
greet("Dat");

//Khai báo 1 function nhận đầu vào là 2 số a, b. Đầu ra là kết quả của phép tính (a + b)^2 .
function squareOfSum(a, b) {
    return Math.pow((a + b), 2);
}
let result = squareOfSum(4, 5);
console.log(result);  

//Khai báo 1 function để nhập vào a từ bàn phím, tiếp tục nhập đến khi a là một số lớn hơn 0. Đầu ra là giá trị số vừa nhập.
function inputPositiveNumber() {
    let a;
    do {
        a = parseFloat(prompt("Nhập vào một số lớn hơn 0:"));
    } while (a <= 0);
    return a;
}
let positiveNumber = inputPositiveNumber();
console.log("Số bạn vừa nhập là: " + positiveNumber);


