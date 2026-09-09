// Portfolio Website JavaScript
// Handles mobile navigation, reveal animations, custom cursor, and demo contact form.

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealElements.forEach((element) => revealObserver.observe(element));

const cursor = document.querySelector(".cursor-dot");

if (cursor) {
  window.addEventListener("mousemove", (event) => {
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
  });
}

const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");

    formNote.textContent = `Thank you${name ? `, ${name}` : ""}. This demo form is working. Connect it to Formspree, Netlify Forms, or your backend to receive messages.`;
    contactForm.reset();
  });
}
