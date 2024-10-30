let h = parseFloat(prompt("Nhập vào chiều cao của bạn (m):"));
let w = parseFloat(prompt("Nhập vào cân nặng của bạn (kg):"));
let bmi = w / (h * h);
if (bmi < 18.5) {
    alert("Nhẹ cân");
} else if (bmi >= 18.5 && bmi < 23) {
    alert("Bình thường");
} else if (bmi >= 23 && bmi < 25) {
    alert("Thừa cân");
} else {
    alert("Béo phì");
}

alert(`Chỉ số BMI của bạn là: ${bmi}`);
