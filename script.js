// Page fade-in effect
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Go to Explore page when button or icon clicked
function goToExplore() {
  window.location.href = "explore.html";
}

const globe = document.getElementById("globe-icon");
if (globe) {
  globe.addEventListener("click", goToExplore);
}
