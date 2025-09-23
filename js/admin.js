// ---------------- Events CRUD ----------------
const eventsKey = 'adminEvents';
const bookingsKey = 'bookings';

// Load Events Table
function loadEvents(){
  const events = JSON.parse(localStorage.getItem(eventsKey) || '[]');
  const container = document.getElementById('eventsTableContainer');
  if(!container) return;
  let html = `<table class="table table-striped">
    <thead>
      <tr><th>Title</th><th>Date</th><th>Location</th><th>Price</th><th>Actions</th></tr>
    </thead><tbody>`;
  events.forEach(e=>{
    html += `<tr>
      <td>${e.title}</td>
      <td>${e.date}</td>
      <td>${e.location}</td>
      <td>$${e.price}</td>
      <td>
        <button class="btn btn-sm btn-warning me-2" onclick="editEvent(${e.id})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteEvent(${e.id})">Delete</button>
      </td>
    </tr>`;
  });
  html += `</tbody></table>`;
  container.innerHTML = html;
}

// Add/Edit Event
const eventForm = document.getElementById('eventForm');
if(eventForm){
  eventForm.addEventListener('submit', e=>{
    e.preventDefault();
    let events = JSON.parse(localStorage.getItem(eventsKey) || '[]');
    const id = document.getElementById('eventId').value || Date.now();
    const newEvent = {
      id: parseInt(id),
      title: document.getElementById('eventTitle').value,
      date: document.getElementById('eventDate').value,
      location: document.getElementById('eventLocation').value,
      price: parseFloat(document.getElementById('eventPrice').value),
      thumb: document.getElementById('eventThumb').value,
      desc: document.getElementById('eventDesc').value
    };
    events = events.filter(ev=>ev.id != id);
    events.push(newEvent);
    localStorage.setItem(eventsKey, JSON.stringify(events));
    bootstrap.Modal.getInstance(document.getElementById('eventModal')).hide();
    eventForm.reset();
    loadEvents();
  });
}

// Edit Event
function editEvent(id){
  const events = JSON.parse(localStorage.getItem(eventsKey) || '[]');
  const e = events.find(ev=>ev.id == id);
  document.getElementById('eventId').value = e.id;
  document.getElementById('eventTitle').value = e.title;
  document.getElementById('eventDate').value = e.date;
  document.getElementById('eventLocation').value = e.location;
  document.getElementById('eventPrice').value = e.price;
  document.getElementById('eventThumb').value = e.thumb;
  document.getElementById('eventDesc').value = e.desc;
  new bootstrap.Modal(document.getElementById('eventModal')).show();
}

// Delete Event
function deleteEvent(id){
  if(confirm('Are you sure you want to delete this event?')){
    let events = JSON.parse(localStorage.getItem(eventsKey) || '[]');
    events = events.filter(ev=>ev.id != id);
    localStorage.setItem(eventsKey, JSON.stringify(events));
    loadEvents();
  }
}

// ---------------- Bookings ----------------
function loadBookings(){
  const bookings = JSON.parse(localStorage.getItem(bookingsKey) || '[]');
  const container = document.getElementById('bookingsTableContainer');
  if(!container) return;
  let html = `<table class="table table-striped">
    <thead>
      <tr><th>Event</th><th>Name</th><th>Email</th><th>Phone</th><th>Tickets</th></tr>
    </thead><tbody>`;
  bookings.forEach(b=>{
    html += `<tr>
      <td>${b.event_title}</td>
      <td>${b.name}</td>
      <td>${b.email}</td>
      <td>${b.phone}</td>
      <td>${b.tickets}</td>
    </tr>`;
  });
  html += `</tbody></table>`;
  container.innerHTML = html;
}

// Run on page load
loadEvents();
loadBookings();
