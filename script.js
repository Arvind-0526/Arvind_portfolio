document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("dark-toggle");
  const profileImg = document.querySelector(".profile-container img");

  // Check saved mode from localStorage
  const savedMode = localStorage.getItem("theme");

  if (savedMode === "light") {
    document.body.classList.remove("dark-mode");
    toggleBtn.textContent = "🌙";
    profileImg.src = "images/profile.png";
  } else {
    // Default to dark mode
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
    profileImg.src = "images/profile_dark.png";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️";
      profileImg.src = "images/profile_dark.png";
      localStorage.setItem("theme", "dark");
    } else {
      toggleBtn.textContent = "🌙";
      profileImg.src = "images/profile.png";
      localStorage.setItem("theme", "light");
    }
  });
});

gsap.registerPlugin(ScrollTrigger);

// Pin the intro text so it stays until About starts overlapping
ScrollTrigger.create({
  trigger: ".intro-wrapper",
  start: "top top",
  end: "bottom top",
  pin: ".text-align-center",
  pinSpacing: false
});

// Scroll-driven content + video switching
let sections = document.querySelectorAll('.tabs_let-content');
let videos = document.querySelectorAll('.tabs_video');

sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: ".tabs_height",
    start: () => (index * window.innerHeight) + " top",
    end: () => ((index + 1) * window.innerHeight) + " top",
    onEnter: () => setActive(index),
    onEnterBack: () => setActive(index),
  });
});

function setActive(index) {
  // reset all
  sections.forEach((s, i) => s.classList.remove("is-1"));
  videos.forEach((v, i) => v.classList.remove("is-1"));
  
  // activate current
  sections[index].classList.add("is-1");
  videos[index].classList.add("is-1");
}
