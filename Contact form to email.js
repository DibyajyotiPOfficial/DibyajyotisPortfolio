const form = document.getElementById('contactForm');
const fullName = document.getElementById("name");
const emailAddress = document.getElementById("email");
const contact = document.getElementById("contactNumber");
const emailSubject = document.getElementById("emailSubject");
const usermessage = document.getElementById("usermessage");

function emailSend() {
    const templateParams = {
        from_name: fullName.value,         // From Name
        from_email: emailAddress.value,    // From Email
        contact_number: contact.value,     // Contact Number
        email_subject: emailSubject.value, // Email Subject
        message: usermessage.value         // User Message (this will be inserted into the email body)
    };

    emailjs.send('service_w8ilxed', 'template_0owwmyk', templateParams, 'iSAOzElaaHnqgUnLd')
    .then((response) => {
        console.log("Email sent successfully:", response);
        Swal.fire({
            title: "Email Sent Successfully",
            text: "Thank you for reaching out.",
            icon: "success"
        });
        form.reset();
    })
    .catch((error) => {
        console.error("Error sending email:", error);
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
