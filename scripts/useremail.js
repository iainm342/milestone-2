//New User Sign Up

var emailjs;

let form = document.getElementById("contact");

//function to activate EmailJS API
function sendMail(contactForm) {
    emailjs.send("gmail", "user", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
    })
    .then(
        function(response) {
            ("SUCCESS", response);
            //Sweet Alert API activation
            swal({
                title: "Congratulations!", 
                text: "You've successfully registered with What's for Dinner?", 
                icon: "success", 
                dangerMode: "true"
        });
    },
        function(error) {
            ("FAILED", error);
            //Sweet Alert API activation
            swal({
                title: "Oops!", 
                text: "Aomething went wrong - try again?", 
                icon: "error", 
                dangerMode: "true"
        });
        })
    //Resets form after clicking Register   
    form.reset();
    return false; 
    }