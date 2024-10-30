n = parseInt(prompt("Nhập vào số n:")); 
let isPrime = n > 1; 
for (let i = 2; i <= Math.sqrt(n); i++) { 
    if (n % i === 0) { isPrime = false; 
        break; 
    } 
} 
alert(`${n} ${isPrime ? "là" : "không phải là"} số nguyên tố`);