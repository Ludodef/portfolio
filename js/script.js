
emailjs.init("qL1ABqVUKyA5tUaUH");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("service_e7ascwb", "template_ghcaokm", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        reply_to: document.getElementById("email").value
    }).then(function(response) {
        showPopup("Messaggio inviato con successo!", "success");
        document.getElementById("contact-form").reset();
    }, function(error) {
        showPopup("Messaggio non inviato. Riprova.", "error");
        console.error("Errore:", error);
    });
});

function showPopup(message, type) {
  const popup = document.getElementById("popup-message");
  const text = document.getElementById("popup-text");

  text.textContent = message;

  // Rimuove hidden e aggiunge show + success/error
  popup.classList.remove("hidden");
  popup.classList.add("show", type);

  setTimeout(() => {
      popup.classList.remove("show", "success", "error");
      popup.classList.add("hidden");
  }, 3000);
}


const links = document.querySelectorAll(".menu-link");

function activateLinkOnScroll() {
  let scrollPosition = window.scrollY + 80; 
  
  document.querySelectorAll("section").forEach(section => {
    if (
      scrollPosition >= section.offsetTop &&
      scrollPosition < section.offsetTop + section.offsetHeight
    ) {
      links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}


window.addEventListener("scroll", activateLinkOnScroll);

links.forEach(link => {
  link.addEventListener("click", function() {
    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});
