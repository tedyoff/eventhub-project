# 🎟️ EventHub – Event Discovery & Booking

EventHub is a responsive event discovery and ticket booking platform.  
Users can browse upcoming events, view details, book tickets, and contact the organizers.  
The project was built using **HTML, CSS, Bootstrap, JavaScript, and EmailJS**, and deployed on **Netlify, GitHub Pages**.  

---

## 🚀 Features
- 📱 **Responsive Design** (desktop, tablet, mobile)  
- 🗓️ Browse and discover events  
- 🔗 Event detail pages with booking option  
- ✅ Booking form with validation  
- 📧 Working **EmailJS integration** for booking & contact forms  
- 🎨 Clean UI with Bootstrap and custom CSS  
- Clickable **feature cards** on the home page  
- **Contact form** page  
- **Hover effects** for cards  

-----------------------------------------------------------------------------------

## 🗂 Project Structure

All files are in **one folder**:


eventhub-final-project/
│
├── index.html              # Home page (overview, navigation, featured events)
├── events.html             # ALL events list
├── event-details.html      # Single event details page
├── contact.html            # Contact page with email form
│
├── css/                    # Stylesheets
│   ├── style.css           # Custom styles
│   └── responsive.css      # Media query breakpoints (optional, or keep inside style.css)
│
├── js/                     # JavaScript files
│   ├── main.js             # Navbar behavior, general scripts
│   ├── events.js           # Dynamic event rendering (list of events/cards)
│   ├── booking.js          # Booking form logic + email integration (EmailJS/Formspree)
│   └── contact.js          # Contact form submission
│
├── assets/                 # Static assets
│   ├── img/                # Images (event banners, logos, backgrounds)
│   └── icons/              # Any icon packs (if not from CDN)
│
├── vendor/                 # External libraries (optional if using CDN)
│   ├── bootstrap/          # Bootstrap local copy (optional)
│   └── emailjs/            # EmailJS script (if not from CDN)
│
├── README.md               # Setup instructions (how to run and test email form)
└── .gitignore              # Ignore unnecessary files if using GitHub


---

## 📌 How to Run

1. Clone or download the folder.  
2. Open `index.html` in a browser.  
3. Navigate through pages: Home → Events → Event Details → Contact.  
4. Test **booking** and **contact** forms.

---

## ✉️ EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/).  
2. Create **Service ID**, **Template ID**, and **User ID**.  
3. Replace the IDs in `booking.js` and `contact.js`:

```javascript
emailjs.send('service_872cqtr','template_2jyor37',templateParams)
4. Submit a form to test email delivery.

🌍 Deployment

The project can be deployed on Netlify, GitHub Pages, or Vercel.

Deploy on Netlify

Log in to Netlify
.

Click New Site from Git → select your repo.

Deploy directly (no build settings needed).

Your site is live! 🎉

Deploy on GitHub Pages

Push your code to a GitHub repo.

Go to Settings → Pages.

Select main branch → /root.

Save → Your project is live at https://tedyoff.github.io/EventHub/.


🎥 Demo (Presentation Flow)

Responsive Navbar & Layout

Event browsing

Booking form submission (email sent)

Contact form working



✅ Grading Checklist

 Responsive design

 Event list + details pages

 Booking form with validation

 EmailJS integration working

 Contact page working

 Clean UI (Bootstrap + CSS)

 Proper README + GitHub repo


👤 Author

Tewodros – teddyoff317@gmail.com
--- 
# eventhub-project
