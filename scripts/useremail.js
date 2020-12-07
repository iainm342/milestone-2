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
            ("SUCCESS", response);
            swal("Congratulations!", "You've successfully registered with What's for Dinner?", "success");
        },
        function(error) {
            ("FAILED", error);
            swal("Oops!", "Something went wrong - try again?", "error");
        });
    

    form.reset();
    return false;
    }
