function submitForm() {
    const name = document.getElementById('name').value.trim();
    const birthYear = document.getElementById('birthYear').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!name || !birthYear || !age || !gender || !phone) {
        alert('Vui lòng nhập đầy đủ thông tin.');
        return;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <div><strong>Họ tên:</strong> ${name}</div>
        <div><strong>Năm sinh:</strong> ${birthYear}</div>
        <div><strong>Tuổi:</strong> ${age}</div>
        <div><strong>Giới tính:</strong> ${gender}</div>
        <div><strong>Số điện thoại:</strong> ${phone}</div>
    `;
}