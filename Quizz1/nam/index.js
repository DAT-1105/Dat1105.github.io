let s = prompt("Nhập vào một chuỗi:");
let l = parseInt(prompt("Nhập vào một số:"));
while (s.length < l) {
    s += 'a';
}
alert(`Chuỗi sau khi thêm: ${s}`);
