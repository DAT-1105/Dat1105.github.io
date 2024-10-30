let n = parseInt(prompt("Nhập vào số n:")); 
let factorial = 1; 
for (let i = 1; i <= n; i++) { 
    factorial *= i; 
} 
alert(`Giai thừa của ${n} là: ${factorial}`);