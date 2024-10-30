let correct = Math.floor(Math.random() * 20) + 1; 
let attempts = 0; 
let maxAttempts = 5; 
while (attempts < maxAttempts) { 
    let answer = parseInt(prompt("Nhập vào số bạn đoán (từ 1 đến 20):")); 
    attempts++; 
    if (answer === correct) { 
        alert("Đoán đúng!"); 
        break; 
    } else { 
        alert("Đoán sai. Thử lại."); 
    } 
} 
if (attempts === maxAttempts) { 
        alert("Bạn đã thua cuộc");
}