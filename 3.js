//function submitForm() {
    // Lấy giá trị từ form
    var hoten = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var textarea = document.getElementById("message").value;

    // Kiểm tra xem các trường có được nhập đầy đủ không
    if (name === "" || email === "" || message === "") {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }

    // Hiển thị thông báo thành công
    var successMessage = document.getElementById("successMessage");
    successMessage.innerHTML = "Cảm ơn " + name + ", chúng tôi sẽ liên lạc với bạn sớm nhất!";
    successMessage.style.color = "green";

    // Reset form
    document.getElementById("contactForm").reset();

}