function calculate() {
    // Lấy giá trị chiều cao và cân nặng từ người dùng
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    
    // Kiểm tra nếu chiều cao hoặc cân nặng không phải là số
    if (isNaN(height) || isNaN(weight)) {
        document.getElementById("result").innerText = "Vui lòng nhập số hợp lệ cho chiều cao và cân nặng.";
        return;
    }
    
    // Tính chỉ số BMI
    var bmi = weight / Math.pow(height / 100, 2);
    
    // Hiển thị kết quả
    var resultText = "";
    if (bmi < 18.5) {
        resultText = "Gầy";
    } else if (bmi < 24.9) {
        resultText = "Bình thường";
    } else if (bmi < 29.9) {
        resultText = "Hơi béo";
    } else {
        resultText = "Béo phì";
    }
    
    document.getElementById("result").innerText = "Chỉ số BMI của bạn là: " + bmi.toFixed(1) + " - " + resultText;
}
