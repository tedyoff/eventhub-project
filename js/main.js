// main.js

// Navbar active link
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ================================
// Load Featured Events (Landing Page)
// ================================
function loadFeaturedEvents() {
  const container = document.getElementById("featured-events");
  if (!container) return; // Only run on index.html

  container.innerHTML = ""; // Clear before render

  // Limit to 3 featured events
  eventsData.slice(0, 3).forEach(event => {
    const card = document.createElement("div");
    card.className = "col-md-4";

    card.innerHTML = `
      <div class="card feature-card h-100 shadow-sm">
        <img src="${event.image}" class="card-img-top" alt="${event.title}">
        <div class="card-body">
          <h5 class="card-title">${event.title}</h5>
          <p class="card-text text-muted">
            <i class="fa-solid fa-calendar"></i> ${event.date} <br>
            <i class="fa-solid fa-location-dot"></i> ${event.location}
          </p>
          <p class="card-text">${event.description}</p>
          <p class="fw-bold">$${event.price}</p>
          <a href="event-details.html?id=${event.id}" class="btn btn-primary">Book Now</a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadFeaturedEvents);
