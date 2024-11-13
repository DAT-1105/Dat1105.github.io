//Khai báo 1 function nhận vào chuỗi slogan. Cứ sau mỗi 5 giây, in ra slogan đó kèm biến đếm counter bắt đầu từ 1.
function printSlogan(slogan) {
    let counter = 1;
    setInterval(() => {
        console.log(`${slogan} ${counter}`);
        counter++;
    }, 5000);
}
printSlogan("Hello world,");

//Sử dụng phương thức map để biến đổi mảng texts thành mảng textsLength
let texts = ["hello", "world", "JavaScript", "is", "awesome"];
let textsLength = texts.map(text => text.length);
console.log(textsLength); // Output: [5, 5, 10, 2, 7]

