

emailjs.init("qL1ABqVUKyA5tUaUH"); // Sostituisci con la tua Public Key

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("service_e7ascwb", "template_ghcaokm", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        reply_to: document.getElementById("email").value
    }).then(function(response) {
        alert("Email inviata con successo!");
    }, function(error) {
        alert("Errore nell'invio dell'email: " + JSON.stringify(error));
    });
});
