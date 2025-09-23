// Example events array (replace with backend/API if available)
const events = [
  {id:1,title:"Summer Music Festival",location:"New York, USA",date:"2025-07-20",price:45,thumb:"assets/img/music.jpg",desc:"Top artists for live music."},
  {id:2,title:"Global Tech Conference 2025",location:"San Francisco, USA",date:"2025-09-10",price:120,thumb:"assets/img/tech.jpg",desc:"Explore innovations in AI, Blockchain, and more."},
  {id:3,title:"Business Leadership Seminar",location:"London, UK",date:"2025-08-15",price:90,thumb:"assets/img/business.jpg",desc:"Learn leadership strategies."}
];

const container = document.getElementById("eventsContainer");

function renderEvents(list){
  container.innerHTML = '';
  if(list.length === 0){
    container.innerHTML = '<p class="text-center">No events found.</p>';
    return;
  }
  list.forEach(e=>{
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${e.thumb}" class="card-img-top" alt="${e.title}">
          <div class="card-body">
            <h5 class="card-title">${e.title}</h5>
            <p class="text-muted"><i class="fa-solid fa-location-dot"></i> ${e.location} | ${e.date}</p>
            <p>${e.desc}</p>
            <p class="fw-bold">$${e.price}</p>
            <a href="event-details.html?id=${e.id}" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
    `;
  });
}

renderEvents(events);

// Search / filter
document.getElementById("searchBtn").addEventListener("click",()=>{
  const title = document.getElementById("searchTitle").value.toLowerCase();
  const date = document.getElementById("searchDate").value;
  const location = document.getElementById("searchLocation").value.toLowerCase();

  const filtered = events.filter(e=>{
    return (!title || e.title.toLowerCase().includes(title))
      && (!date || e.date === date)
      && (!location || e.location.toLowerCase().includes(location));
  });

  renderEvents(filtered);
});
