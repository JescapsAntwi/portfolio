// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// Get the "Download CV" link element by its ID
var downloadLink = document.getElementById("download-link");

// Add a click event listener to the link
downloadLink.addEventListener("click", function (event) {
  // Prevent the default behavior of the link
  event.preventDefault();

  // Create a temporary anchor element
  var tempLink = document.createElement("a");

  // Set the href attribute of the temporary link to the URL of the CV file
  tempLink.href = "Jescaps Antwi CV.pdf"; // Replace with the actual path to your CV file

  // Set the download attribute of the temporary link to the desired filename for the downloaded file
  tempLink.download = "jescapsantwi-cv.pdf"; // Replace with the desired filename for the downloaded file

  // Append the temporary link to the document body
  document.body.appendChild(tempLink);

  // Programmatically trigger a click event on the temporary link
  tempLink.click();

  // Remove the temporary link from the document body
  document.body.removeChild(tempLink);
});

// Get the "Hire Me" tab link element by its ID
var hireMeTab = document.getElementById("hire-me-tab");

// Add a click event listener to the link
hireMeTab.addEventListener("click", function (event) {
  // Prevent the default behavior of the link
  event.preventDefault();

  // Open the default email client with a pre-filled email address
  window.location.href = "mailto:jescaps.antwi@ashesi.edu.gh";
});

document.getElementById("chat-btn").addEventListener("click", function () {
  var whatsappNumber = "+233594175628"; // Replace with your WhatsApp number
  var message = "Hello, I would like to chat with you."; // Replace with your desired message
  var url =
    "https://api.whatsapp.com/send?phone=" +
    whatsappNumber +
    "&text=" +
    encodeURIComponent(message);
  window.open(url, "_blank");
});
