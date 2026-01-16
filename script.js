/* СКРИПТЫ NA8US SYSTEM */

// 1. Запуск параллакса (движение плиток за мышью)
document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, загрузилась ли библиотека
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
            max: 5,             // Максимальный наклон (меньше = строже)
            speed: 400,         // Плавность
            glare: true,        // Блик
            "max-glare": 0.1,   // Сила блика
            scale: 1.01         // Легкое увеличение
        });
    }
});

// 2. Управление открытием статьи
const modal = document.getElementById('modal');
const articleContent = document.getElementById('article-content');

// Функция открытия окна
function openModal() {
    modal.style.display = 'flex';
    articleContent.innerText = 'Загрузка данных...';

    // Загружаем файл по твоей структуре
    fetch('logs/articles/article1/article1.md')
        .then(response => {
            if (response.ok) return response.text();
            throw new Error('Файл статьи не найден');
        })
        .then(text => {
            articleContent.innerText = text;
        })
        .catch(error => {
            console.error(error);
            articleContent.innerText = 'Ошибка: Не удалось найти файл статьи.\nПроверь путь: logs/articles/article1/article1.md';
        });
}

// Функция закрытия окна
function closeModal() {
    modal.style.display = 'none';
}

// Закрытие при клике мимо окна
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}