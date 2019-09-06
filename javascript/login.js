var users = [
    { id: 1, Email: "alaa@gmail.com", password: "123456" }
];
function logIn () {            
    let userEntered = document.getElementById("user").value;
    let passwordEntered = document.getElementById("password").value;
    let FilterArray = users.filter(user => user.Email.indexOf(userEntered) > -1);
    if (passwordEntered == FilterArray[0].password) {
        window.location = './html/admin.html';  
        console.log(passwordEntered);
    } else {
        alert("email or password not correct");
    }
}