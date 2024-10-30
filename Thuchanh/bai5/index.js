let a = parseInt(prompt("Nhập vào số a:")); 
let b = parseInt(prompt("Nhập vào số b:")); 
let x = parseInt(prompt("Nhập vào số x:"));
let found = false; for (let i = a; i <= b; i++) { 
    if (i % x === 0) { 
        alert(`Số nhỏ nhất trong khoảng ${a} và ${b} chia hết cho ${x} là: ${i}`); 
        found = true; 
        break; 
    } 
} 
if (!found) { 
    alert(`Không có số nào trong khoảng ${a} và ${b} chia hết cho ${x}`);
}