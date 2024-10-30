let n = parseInt(prompt("Nhập vào số n (n >= 2):"));

if (n >= 2) {
    let square = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            square += '* ';
        }
        square += '\n'; 
    }
    alert(square);
} else {
    alert("Giá trị nhập vào không hợp lệ. Vui lòng nhập một số >= 2.");
}
