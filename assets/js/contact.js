function emailSend(){

    var userName = document.getElemetByid('name').value;
    var email = document.getElemetByid('email').value;
    var message = document.getElemetByid('message').value;

    var messageBody = "name" + userName +
    "<br> email" + email +
    "<br> message" + message;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "fahrul.thariq@gmail.com",
        Password : "0195F1DC4EE2D2F14ED9826DC8C2CC2250E5",
        To : 'fahrul.thariq@gmail.com',
        From : "fahrul.thariq@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => alert(message)
    );
}