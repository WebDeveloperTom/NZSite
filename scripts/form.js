function sendMessage() {
  let name = document.querySelector(".form-name").value;
  let mobile = document.querySelector(".form-mobile").value;
  let email = document.querySelector(".form-email").value;
  let message = document.querySelector(".form-message").value;

  if (name == "") {
    document.querySelector(".response").innerHTML =
      "<p style='background-color: red;'>Please fill out the name field.</p>";
    name.focus;
    return false;
  }

  // the regex -> First digit must be a 0, the second digit must be between 2 and 9, the next 7 to 9 digits can be 0-1
  if (mobile == "" || !mobile.match(/^[0][2-9][0-9]{7,9}$/)) {
    document.querySelector(".response").innerHTML =
      "<p style='background-color: red;'>Please enter a valid phone number.</p>";
    mobile.focus;
    return false;
  }
  if (email == "") {
    document.querySelector(".response").innerHTML =
      "<p style='background-color: red;'>Please enter a valid e-mail address.</p>";
    email.focus;
    return false;
  }

  if (email.indexOf("@", 0) < 0) {
    document.querySelector(".response").innerHTML =
      "<p style='background-color: red;'>Please enter a valid e-mail address.</p>";
    email.focus;
    return false;
  }

  if (email.indexOf(".", 0) < 0) {
    document.querySelector(".response").innerHTML =
      "<p style='background-color: red;'>Please enter a valid e-mail address.</p>";
    email.focus;
    return false;
  }
  if (message == "") {
    document.querySelector(".response").innerHTML =
      "<p style='background-color: red;'>Please enter a message.</p>";
    message.focus;
    return false;
  }

  document.querySelector(".response").innerHTML =
    "<p style='background-color: lightgreen;'>Thank you! Someone will be in touch within 24 hours.<p>";
}
