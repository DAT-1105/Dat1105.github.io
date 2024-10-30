let s = prompt("Nhập vào chuỗi s:"); 
let l = parseInt(prompt("Nhập vào số l:")); 
while (s.length < l) { 
    s = '0' + s; 
} 
    alert(`Chuỗi sau khi thêm: ${s}`);