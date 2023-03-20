// Задача 1
const pageTitleEl = document.querySelector(".page-title");
pageTitleEl.textContent = "Новий заголовок";

// Задача 2
const parTextEl = document.querySelector(".paragraph");
parTextEl.textContent = "Lorem ipsum";

// Задача 3
const listEl = document.querySelector("ul.list");

// Задача 4
const imgEl = document.querySelector(".image");
imgEl.src = 'https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/harry-potter-hogwarts-day-i71938.jpg';


// Задача 5
const sectionTitleEl = document.querySelectorAll(".section-title");
sectionTitleEl[sectionTitleEl.length - 1].textContent = "Новий заголовок";


// Задача 6
const tableCellEl = document.querySelectorAll(".table-cell");
tableCellEl[tableCellEl.length - 1].textContent = "Оновлене значення";

// Задача 7
const footerText = document.querySelectorAll(".footer-text");
for (footerItems of footerText) {
    footerItems.classList.add("highlight");
}

// Задача 8
const navEl = document.querySelector(".navigation");
navEl.style.backgroundColor = "lightblue"
