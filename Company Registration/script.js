// script for company registration

// function to check if all fields are filled after clicking submit button
function check_fields() {
    var name = document.getElementById("cname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var phone = document.getElementById("phone").value;
    var website = document.getElementById("website").value;
    var description = document.getElementById("description").value;
    var file = document.getElementById("file").value;
    var error_message = document.getElementById("error_message");
    var error = "";
    if (name == "") {
        error = error + "Please enter your name.\n";
    }
    if (email == "") {
        error = error + "Please enter your email.\n";
    }
    if (password == "") {
        error = error + "Please enter your password.\n";
    }
    if (confirm_password == "") {
        error = error + "Please confirm your password.\n";
    }
    if (password != confirm_password) {
        error = error + "Password and confirm password do not match.\n";
    }
    if (address == "") {
        error = error + "Please enter your address.\n";
    }
    if (city == "") {
        error = error + "Please enter your city.\n";
    }
    if (state == "") {
        error = error + "Please enter your state.\n";
    }
    if (zip == "") {
        error = error + "Please enter your zip code.\n";
    }
    if (phone == "") {
        error = error + "Please enter your phone number.\n";
    }
}

// click event for submit button
document.getElementById("sub").addEventListener("click", function () {
    check_fields();
    if (error != "") {
        error_message.innerHTML = error;
        return false;
    } else {
        return true;
    }
});

