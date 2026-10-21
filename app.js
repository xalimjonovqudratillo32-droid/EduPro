
const courseButtons = document.querySelectorAll(".enroll-btn");
const courseSelect = document.querySelector("#course");
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

courseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    courseSelect.value = button.dataset.course;

    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth"
    });
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const course = courseSelect.value;

  if (!name || !phone || !course) {
    formMessage.textContent =
      "Iltimos, barcha majburiy maydonlarni to‘ldiring.";
    formMessage.style.color = "#d93025";
    return;
  }

  if (!/^\+?[\d\s()-]{9,20}$/.test(phone)) {
    formMessage.textContent =
      "Telefon raqamini to‘g‘ri kiriting.";
    formMessage.style.color = "#d93025";
    return;
  }

  formMessage.textContent =
    `Rahmat, ${name}! ${course} kursiga arizangiz qabul qilindi.`;
  formMessage.style.color = "#18864b";

  contactForm.reset();
});
