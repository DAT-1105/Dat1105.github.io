n = parseInt(prompt("Nhập vào số n (n >= 2):")); 
let S = 0; 
for (let i = 1; i <= n; i++) { 
    S += 1 / (i * (i + 1)); 
}
 alert(`Giá trị biểu thức S là: ${S}`);