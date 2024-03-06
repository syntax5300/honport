// Slideshow functionality
const slideshow = document.getElementById('slideshow');
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg']; // Replace with your image URLs
let currentIndex = 0;

function changeSlide() {
  slideshow.innerHTML = `<img src="${images[currentIndex]}" alt="Slideshow Image">`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeSlide, 5000); // Change slide every 5 seconds

// Fetch and display blog posts dynamically
// Add your JavaScript code for fetching and displaying blog posts here

// Time & Date Display
function updateTime() {
  const now = new Date();
  const datetimeElement = document.getElementById("datetime");
  datetimeElement.innerHTML = now.toLocaleString();
}

updateTime(); // Call the function once to display time on page load
setInterval(updateTime, 1000); // Update time every second

// Calendar
function displayCalendar() {
  const calendarElement = document.getElementById("calendar");
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // Months are zero-indexed
  calendarElement.innerHTML = `<iframe src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FNew_York" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>`;
}

displayCalendar(); // Call the function to display calendar on page load
// Marquee Effect for Date and Time
function marqueeDate() {
  const datetimeElement = document.getElementById("datetime");
  const date = new Date();
  let dateString = date.toLocaleString();
  dateString = dateString.substring(0, dateString.length - 3); // Removing seconds
  datetimeElement.innerText = dateString;
}

setInterval(marqueeDate, 1000); // Update time every second

// Optional: Adjust the marquee scroll speed by modifying the CSS animation
