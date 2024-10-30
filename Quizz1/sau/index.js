let x = parseInt(prompt("Nhập vào số x (0 <= x < y <= 100):"));
let y = parseInt(prompt("Nhập vào số y (0 <= x < y <= 100):"));

if (x >= 0 && x < y && y <= 100) {
    while (x < y) {
        console.log(`x = ${x}, y = ${y}`);
        x++;
        y--;
    }
} else {
    console.log("Giá trị nhập vào không hợp lệ.");
}
