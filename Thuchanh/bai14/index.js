// Yêu cầu người dùng nhập vào 2 số m và n (m >= 2, n >= 2)
let m = parseInt(prompt("Nhập vào số m (m >= 2):"));
let n = parseInt(prompt("Nhập vào số n (n >= 2):"));

// Kiểm tra điều kiện
if (m >= 2 && n >= 2) {
    // Sử dụng hai vòng lặp để tạo hình chữ nhật
    let rectangle = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            rectangle += '* ';
        }
        rectangle += '\n'; // Thêm ký tự xuống dòng sau mỗi hàng
    }
    alert(rectangle);
} else {
    alert("Giá trị nhập vào không hợp lệ. Vui lòng nhập m và n sao cho m >= 2 và n >= 2.");
}
