function solveEquation() {
    var a = parseFloat(document.getElementById('inputA').value);
    var b = parseFloat(document.getElementById('inputB').value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById('result').innerText = 'Vui lòng nhập giá trị hợp lệ cho a và b.';
    } else if (a === 0) {
        document.getElementById('result').innerText = 'Phương trình không phải là phương trình bậc 1.';
    } else {
        var x = -b / a;
        document.getElementById('result').innerText = 'Nghiệm của phương trình là x = ' + x;
    }
}function solveEquation()
{
    // Lấy giá trị từ ô input
    let a = parseFloat(document.getElementById("inputA").value);
    let b = parseFloat(document.getElementById("inputB").value);

    // Kiểm tra hệ số a
    if (isNaN(a)) {
        alert("Hệ số a không hợp lệ");
        return;
    }

    // Giải phương trình
    let result;
    if (a === 0) {
        result = "Phương trình vô nghiệm";
    } else {
        let x = -b / a;
        result = "Nghiệm của phương trình là x = " + x;
    }

    // Hiển thị kết quả
    document.getElementById("result").innerText = result;
}