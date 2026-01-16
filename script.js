/* NABUS SYSTEM v3.0 */

// 1. Инициализация наклона (Tilt)
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 5,
    speed: 400,
    glare: true,
    "max-glare": 0.2
});

// 2. Управление модальным окном
const modal = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');

function closeModal() {
    modal.style.display = 'none';
}

// 3. Открытие Статьи (Чтение MD файла)
function openLatestArticle() {
    modal.style.display = 'flex';
    modalContent.innerHTML = '<h2 style="color:var(--neon-cyan)">ЗАГРУЗКА ДАННЫХ...</h2>';

    // Путь к файлу
    fetch('logs/articles/article1/article1.md')
        .then(res => {
            if (!res.ok) throw new Error("Файл не найден");
            return res.text();
        })
        .then(text => {
            // Используем библиотеку Marked для красивого текста
            modalContent.innerHTML = marked.parse(text);
        })
        .catch(err => {
            modalContent.innerHTML = `<h3 style="color:red">ОШИБКА: ${err.message}</h3>`;
        });
}

// 4. Открытие Услуг (Пока заглушка, потом наполним текстом)
function openService(serviceType) {
    modal.style.display = 'flex';
    let title = "";
    let desc = "";

    if (serviceType === 'assist') {
        title = "СИНТЕЗ ЦИФРОВЫХ ЛИЧНОСТЕЙ";
        desc = "Разработка ИИ-ассистентов с уникальным характером и базой знаний.";
    } else if (serviceType === 'geo') {
        title = "GEO-ЭКСПАНСИЯ";
        desc = "Захват локальной выдачи Google Maps и поиск клиентов по геолокации.";
    } else if (serviceType === 'bots') {
        title = "АВТОНОМНЫЕ ПРОТОКОЛЫ";
        desc = "Боты для Telegram и Web, работающие 24/7 без участия человека.";
    } else if (serviceType === 'biz') {
        title = "БИЗНЕС-ЯДРО";
        desc = "Полная интеграция нейросетей в CRM и процессы продаж.";
    }

    modalContent.innerHTML = `
        <h2 style="color:var(--neon-cyan); margin-bottom:20px;">${title}</h2>
        <p style="font-size:1.2rem; line-height:1.6;">${desc}</p>
        <br>
        <button style="background:var(--neon-purple); border:none; padding:10px 20px; color:#fff; border-radius:5px; cursor:pointer;">ОСТАВИТЬ ЗАЯВКУ</button>
    `;
}

// Закрытие по клику мимо
window.onclick = function (e) {
    if (e.target == modal) closeModal();
}