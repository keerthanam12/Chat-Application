function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateSignUpInputCredentials(){

    username=document.getElementById("name").value;
    email=document.getElementById("email_address").value;
    password=document.getElementById("password").value;
    confirmpassword=document.getElementById("confirm_password").value;
    var nameErr = emailErr = passwordErr = confirmPasswordErr = true;

    // Validate email address
    if(username == "") {
        printError("nameErr", "Please enter your Name");
    } else {
        // Regular expression for basic email validation
        var regex = /^[A-Za-z ]+$/;
        if(regex.test(username) === false) {
            printError("nameErr", "Please enter a valid Name");
        } else{
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if(password == "") {
        printError("passwordErr", "Please enter your password");
    } else{
        printError("passwordErr", "");
        passwordErr = false;
    }
    
    if(confirmpassword == "") {
        printError("confirmPasswordErr", "Please enter your password");
    } else{
        printError("confirmPasswordErr", "");
        confirmPasswordErr = false;
    }

    if((nameErr || emailErr || passwordErr || confirmPasswordErr ) == true) {
        return false;
    }else{
        return true;
    }

}

function validateLoginInputCredentials(){
    ///event.preventDefault();
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    var emailErr = passwordErr = true;

    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation\s
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if(password == "") {
        printError("passwordErr", "Please enter your password");
    } else{
        printError("passwordErr", "");
        passwordErr = false;
    }
    if((emailErr || passwordErr ) == true) {
        return false;
    }else{
        return true;
    }
    
}