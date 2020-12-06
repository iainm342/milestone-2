//New User Sign Up

var emailjs;

let form = document.getElementById("contact");

function sendMail(contactForm) {
    emailjs.send("gmail", "user", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    

    form.reset();
    return false;
    }
