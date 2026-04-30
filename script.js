// Simple welcome alert
let index = 0;
let slider = document.querySelectorAll(".img");

function showimg() {
    slider.forEach((img, i) => {
        img.style.display ="none";
    });
    index++;
    if(index > slider.length) {
        index = 1;
    }
    slider[index - 1].style.display = "block";
    setTimeout(showimg, 2000); // Change image every 2 seconds

}
showimg();

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
// Example button interaction (future use)
function showMessage() {
    alert("Jai Hind! NCC Cadets are always ready!");
}
const links = document.querySelectorAll(".nav");

links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

