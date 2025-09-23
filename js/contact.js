// js/contact.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const responseDiv = document.getElementById("contactResponse");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) {
      responseDiv.textContent = "⚠ All fields are required!";
      responseDiv.className = "text-danger";
      return;
    }

    // Send contact email via EmailJS
    emailjs.send("service_872cqtr", "template_2jyor37", {
      user_name: name,
      user_email: email,
      message: message
    }).then(() => {
      responseDiv.textContent = "✅ Message sent successfully!";
      responseDiv.className = "text-success";
      form.reset();
    }, (error) => {
      responseDiv.textContent = "❌ Error sending message. Try again later.";
      responseDiv.className = "text-danger";
      console.error(error);
    });
  });
});
