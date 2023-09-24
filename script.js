// SMOOTH SCROLLING
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    const href = link.getAttribute("href");

    // Check if the link's href starts with "http" or is not a hash "#"
    if (!href.startsWith("http")) {
      event.preventDefault();

      // Scrolling to the top (href = #)
      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      // Scroll to other sections
      else if (href != "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// UPDATE YEAR IN FOOTER
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// UPDATE IMAGE BASED ON SCREEN WIDTH
function updateImageSource() {
  const imgElement = document.getElementById("event-img");
  if (window.matchMedia("(max-width: 62.5em)").matches) {
    imgElement.src = "assets/davao-pubmat-min.png";
  } else {
    imgElement.src = "assets/davao-pubmat.png";
  }
}
