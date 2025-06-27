// Light/Dark Mode Toggle
const toggleBtn = document.querySelector(".toggle-mode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "🌙 Light Mode"
    : "🌞 Dark Mode";
});

// Smooth Scroll for nav links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Contact Form Validation
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.querySelector("#name").value;
  const email = form.querySelector("#email").value;
  const message = form.querySelector("#message").value;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
  } else {
    alert("Thanks for your message, " + name + "!");

    // Animate form fade out
    form.style.transition = "opacity 0.6s ease";
    form.style.opacity = 0;
    setTimeout(() => form.reset(), 700);
  }
});
