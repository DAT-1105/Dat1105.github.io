//Khai báo 1 đối tượng để mô tả bản thân bao gồm: tên, tuổi, địa chỉ, giới tính, sở thích (nhiều sở thích), chiều cao, cân nặng, tình trạng hôn nhân, số điện thoại.
const myself = {
    name: "Doi Tuan Dat",
    age: 21,
    address: "Hanoi, Vietnam",
    gender: "male",
    hobbies: ["traveling", "coding"],
    height: 171,  // in cm
    weight: 62,   // in kg
    maritalStatus: "single",
    phoneNumber: "0123456789"
};

//Khai báo 1 đối tượng là bạn trai/bạn gái của bạn: tên, tuổi, sự tốt bụng (1 - 10), nhà giàu (boolean).
const girlfriend = {
    name: "Nguyen Thi Hai Yen",
    age: 22,
    kindness: 9,  // on a scale of 1 to 10
    isRich: true
};

//Chương trình kiểm tra nếu tuổi của bạn và bạn gái (trai) đều lớn hơn 20, in ra màn hình “Tầm này cưới được rồi”. Ngược lại, in ra “Chờ thêm chút nữa”
if (myself.age > 20 && girlfriend.age > 20) {
    console.log("Tầm này cưới được rồi");
} else {
    console.log("Chờ thêm chút nữa");
}
