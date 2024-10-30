let n = parseInt(prompt("Nhập vào số n (n >= 3):"));

if (n >= 3) {
    
    let triangle = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            triangle += '* ';
        }
        triangle += '\n'; 
    }
    alert(triangle);
} else {
    alert("Giá trị nhập vào không hợp lệ. Vui lòng nhập một số >= 3.");
}
