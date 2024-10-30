// Nhập vào chuỗi s từ người dùng
let s = prompt("Nhập vào chuỗi s: ");
let length = parseInt(s);
// Kiểm tra độ dài chuỗi và in ra kết quả
if(isNaN(length) || length < 8) {
    alert("Ngắn quá, dài thêm tí nữa");
} else {
    alert("Chuỗi này ok");
}
