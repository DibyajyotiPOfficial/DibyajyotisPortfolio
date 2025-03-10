const form = document.getElementById('contactForm');
const fullName = document.getElementById("name");
const emailAddress = document.getElementById("email");
const contact = document.getElementById("contactNumber");
const emailSubject = document.getElementById("emailSubject");
const textmessage = document.getElementById("usermessage");

function emailSend() {
    const templateParams = {
        fullName: fullName.value,
        emailAddress: emailAddress.value,
        contactNumber: contact.value,
        emailSubject: emailSubject.value,
        userMessage: textmessage.value
    };

    console.log("Sending email with the following details:", templateParams);

    emailjs.send('service_w8ilxed', 'template_0owwmyk', templateParams, 'iSAOzElaaHnqgUnLd')
        .then(response => {
            console.log("Email send response:", response.status, response.text);
            Swal.fire({
                title: "Email Sent Successfully",
                text: "Thank you for reaching out.",
                icon: "success"
            });
            form.reset();
        })
        .catch(error => {
            console.error("Email sending error:", error);
            Swal.fire({
                title: "Email Sending Failed",
                text: "Please try again later.",
                icon: "error"
            });
        });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    emailSend();
});