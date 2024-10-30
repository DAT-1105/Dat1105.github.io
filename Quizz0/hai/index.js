let a = prompt("Nhập vào một số a:");
let length = parseInt(a);

if (isNaN(a) || a >= 18) {
    alert("Đủ 18 thì quẩy tiếp");
} else if (a >= 16) {
    alert("Đợi thêm ít năm nữa");
} else {
    alert("Còn quá nà trẻ");
}
