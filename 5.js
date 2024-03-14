function login(){
    const tentk = document.getElementById("bai5-name");
    var passWord = document.getElementById("bai5-password");
    const conFirm = confirm("Hiện mật khẩu");
    if(conFirm){
        passWord.type = 'text';
    }