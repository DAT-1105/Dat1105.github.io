n = parseInt(prompt("Nhập vào số n:")); 
alert(`Các ước của ${n} là:`); 
for (let i = 1; i <= n; i++) { 
    if (n % i === 0) { 
        alert(i); 
    } 
}