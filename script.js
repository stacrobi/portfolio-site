const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const contactForm = document.querySelector("[data-contact-form]");
const contactSuccess = document.querySelector("[data-contact-success]");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (contactForm) {
  const nextField = contactForm.querySelector('input[name="_next"]');
  if (nextField) {
    const successUrl = new URL(window.location.href);
    successUrl.searchParams.set("submitted", "true");
    successUrl.hash = "";
    nextField.value = successUrl.toString();
  }
}

if (contactSuccess) {
  const params = new URLSearchParams(window.location.search);
  if (params.get("submitted") === "true") {
    contactSuccess.hidden = false;
  }
}
