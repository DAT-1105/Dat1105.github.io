let m = parseInt(prompt("Nhập vào số m (m > 0):")); 
n = parseInt(prompt("Nhập vào số n (n > 0):")); 
function gcd(a, b) { 
    while (b != 0) { 
        let temp = b; b = a % b; a = temp; 
    } 
    return a; 
} 
function lcm(a, b) { 
    return (a * b) / gcd(a, b); 
} 
alert(`Ước chung lớn nhất của ${m} và ${n} là: ${gcd(m, n)}`); 
alert(`Bội chung nhỏ nhất của ${m} và ${n} là: ${lcm(m, n)}`);