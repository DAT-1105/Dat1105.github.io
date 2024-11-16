//Tìm nghiệm của phương trình bậc hai 𝑎.𝑥2+𝑏.𝑥+𝑐=0
function solveQuadratic(a, b, c) {
    if (a === 0) {
        throw new Error("Giá trị a phải khác 0");
    }

    let discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return []; // Phương trình vô nghiệm
    } else if (discriminant === 0) {
        let x = -b / (2 * a);
        return [x]; // Phương trình có một nghiệm
    } else {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [x1, x2]; // Phương trình có hai nghiệm
    }
}
let roots = solveQuadratic(1, -3, 2);
console.log(roots); // Output: [2, 1]

//Kiểm tra xem ba số có tạo thành tam giác không
function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}
console.log(isTriangle(3, 4, 5)); // Output: true
console.log(isTriangle(1, 1, 3)); // Output: false

//Kiểm tra xem ngày, tháng, năm có hợp lệ không
function isValidDate(day, month, year) {
    // Kiểm tra tháng có hợp lệ không
    if (month < 1 || month > 12) {
        return false;
    }

    // Kiểm tra số ngày tối đa của từng tháng
    let daysInMonth;
    switch (month) {
        case 2: // Tháng 2 có thể có 28 hoặc 29 ngày
            daysInMonth = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 29 : 28;
            break;
        case 4: case 6: case 9: case 11: // Các tháng 4, 6, 9, 11 có 30 ngày
            daysInMonth = 30;
            break;
        default: // Các tháng còn lại có 31 ngày
            daysInMonth = 31;
    }

    // Kiểm tra ngày có hợp lệ không
    return day > 0 && day <= daysInMonth;
}
console.log(isValidDate(29, 2, 2024)); // Output: true (năm nhuận)
console.log(isValidDate(30, 2, 2023)); // Output: false (tháng 2 không có 30 ngày)
console.log(isValidDate(31, 4, 2023)); // Output: false (tháng 4 chỉ có 30 ngày)
console.log(isValidDate(15, 7, 2023)); // Output: true (ngày hợp lệ)


