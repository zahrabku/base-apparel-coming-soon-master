function invalidEmail() {
    document.getElementsByClassName('error')[0].style.display = 'inline';
    document.getElementsByClassName('errorText')[0].style.display = 'block';
    document.getElementById('emailinput').style.border = '2px solid  hsl(0, 93%, 68%)';
}

function evaluateEmail() {

    const inputEmail = document.getElementById("emailinput").value;

    console.log(inputEmail);

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputEmail)) {
        return true;
    } 
    else if (inputEmail.length == 0) {
        invalidEmail();
        return false;
    } 
    else {
        invalidEmail();
        return false;
    }

}