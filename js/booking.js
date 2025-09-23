// booking.js
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const bookingForm = this; // reference form
  const statusEl = document.getElementById("bookingStatus");

  // Reset status
  statusEl.innerText = "";
  statusEl.className = "";

  // Collect values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const tickets = document.getElementById("tickets").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation
  if (name.length < 2) {
    return showError("Please enter a valid name (at least 2 characters).");
  }

  if (!validateEmail(email)) {
    return showError("Please enter a valid email address.");
  }

  if (!tickets || isNaN(tickets) || parseInt(tickets) <= 0) {
    return showError("Please select at least 1 valid ticket.");
  }

  if (message.length < 5) {
    return showError("Message should be at least 5 characters long.");
  }

  // If validation passes → send
  statusEl.innerText = "⏳ Sending booking...";
  statusEl.className = "text-info fw-bold mt-2";

  const templateParams = { name, email, tickets, message };

  emailjs
    .send("service_872cqtr", "template_2jyor37", templateParams)
    .then(() => {
      statusEl.innerText = "✅ Booking sent successfully!";
      statusEl.className = "text-success fw-bold mt-2";
      bookingForm.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      statusEl.innerText = "❌ Failed to send booking. Please try again.";
      statusEl.className = "text-danger fw-bold mt-2";
    });

  // Helpers
  function showError(msg) {
    statusEl.innerText = "❌ " + msg;
    statusEl.className = "text-danger fw-bold mt-2";
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});
