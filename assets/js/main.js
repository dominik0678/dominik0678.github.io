const languageButtons = document.querySelectorAll("[data-language]");
const languageBlocks = document.querySelectorAll(".lang");
const translatedNavItems = document.querySelectorAll("[data-de][data-en]");
const yearElement = document.getElementById("year");

function setLanguage(language) {
  const isGerman = language === "de";

  document.documentElement.lang = language;

  languageBlocks.forEach((block) => {
    const shouldShow =
      (isGerman && block.classList.contains("lang-de")) ||
      (!isGerman && block.classList.contains("lang-en"));

    block.classList.toggle("active", shouldShow);
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.language === language);
  });

  translatedNavItems.forEach((item) => {
    item.textContent = isGerman ? item.dataset.de : item.dataset.en;
  });

  localStorage.setItem("portfolio-language", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
  });
});

const savedLanguage = localStorage.getItem("portfolio-language");
setLanguage(savedLanguage || "de");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}