/* ═══════════════════════════════════════════════════════════
   NABUS EXPANSION — SCRIPT.JS v4.1
   Исправлены пути к статьям и картинкам
   ═══════════════════════════════════════════════════════════ */

// === SERVICE MODAL (6 STAGES) ===
const serviceData = {
    1: {
        number: 'STAGE 1',
        title: 'АРХИТЕКТУРА БИЗНЕС-ЯДРА',
        hook: 'Интегрируй сейчас или догоняй вечно.',
        desc: 'Фундамент. Глубокая диагностика и создание чертежа будущего бизнеса.',
        process: [
            'Deep Dive Audit: Вскрываем процессы, находим утечки денег',
            'Solution Architecture: Индивидуальный подбор стека (LLM, n8n, CRM)',
            'Roadmap & Budget: План внедрения с расчётом ROI',
            'Security Protocols: Защита данных'
        ],
        artifacts: [
            { icon: '📄', text: 'Стратегия Трансформации' },
            { icon: '🗺', text: 'Техническая карта процессов' },
            { icon: '🔒', text: 'Регламент безопасности' }
        ]
    },
    2: {
        number: 'STAGE 2',
        title: 'НЕЙРО-АВТОМАТИЗАЦИЯ',
        hook: 'Убираем человеческий фактор из рутины.',
        desc: 'Нервная система бизнеса. Единый организм без перекуров.',
        process: [
            'Workflow Engineering: Сценарии в n8n/Make',
            'Data Parsing: Автосбор данных о конкурентах',
            'CRM Integration: Автоведение клиента по воронке',
            'Reporting: Авто-отчёты в Telegram'
        ],
        artifacts: [
            { icon: '⚙️', text: 'Сценарии автоматизации' },
            { icon: '📊', text: 'Dashboard собственника' },
            { icon: '🤖', text: 'Бесшовная экосистема' }
        ]
    },
    3: {
        number: 'STAGE 3',
        title: 'ВАЙБКОДИНГ',
        hook: 'MVP за 3 дня, а не за 3 месяца.',
        desc: 'Тело бизнеса. Сверхбыстрая разработка интерфейсов.',
        process: [
            'AI-Assisted Coding: Ускорение в 5-10 раз',
            'Landing Page Generation: Конверсионные сайты',
            'Web App Development: Личные кабинеты',
            'Deploy & Support: Мгновенный запуск'
        ],
        artifacts: [
            { icon: '💻', text: 'Готовый сайт/приложение' },
            { icon: '📱', text: 'Адаптивная вёрстка' },
            { icon: '🚀', text: 'Чистый исходный код' }
        ]
    },
    4: {
        number: 'STAGE 4',
        title: 'СИНТЕЗ ЦИФРОВЫХ ЛИЧНОСТЕЙ',
        hook: 'Клонируем ваших лучших сотрудников.',
        desc: 'Личность бизнеса. Умные агенты, проходящие тест Тьюринга.',
        process: [
            'Personality Design: Психотип и Tone of Voice',
            'Knowledge Base (RAG): Загрузка инструкций в ИИ',
            'Omnichannel: WhatsApp, Telegram, Instagram, Web',
            'Voice & Avatar: Голосовые ассистенты'
        ],
        artifacts: [
            { icon: '🧠', text: 'Векторная база знаний' },
            { icon: '💬', text: 'Активный AI-сотрудник' },
            { icon: '📈', text: 'Логи и аналитика' }
        ]
    },
    5: {
        number: 'STAGE 5',
        title: 'GEO-ЭКСПАНСИЯ',
        hook: 'Станьте "Ответом №1" для нейросетей.',
        desc: 'Репутация. Оптимизация бренда для выдачи в LLM.',
        process: [
            'Knowledge Graph Seeding: Посев в Вики и карты',
            'AI-Search Optimization: Цитирование в ChatGPT',
            'Review Management: Авто-работа с отзывами'
        ],
        artifacts: [
            { icon: '🔎', text: 'Присутствие в AI-выдаче' },
            { icon: '📍', text: 'Точки на картах' },
            { icon: '⭐', text: 'Рейтинг доверия' }
        ]
    },
    6: {
        number: 'STAGE 6',
        title: 'ГЕНЕРАТИВНАЯ МЕДИА-ФАБРИКА',
        hook: 'Охваты видео-продакшна по цене Netflix.',
        desc: 'Голос бизнеса. Конвейер контента без человека.',
        process: [
            'Script Generation: Сценарии на основе трендов',
            'AI-Video Production: Генерация видео и аватаров',
            'Smart Editing: Авто-монтаж',
            'Distribution: Авто-постинг в соцсети'
        ],
        artifacts: [
            { icon: '🎥', text: 'Пакет контента (30-60)' },
            { icon: '📅', text: 'Стратегия публикаций' },
            { icon: '🚀', text: 'Рост трафика' }
        ]
    }
};

// === ДАННЫЕ СТАТЕЙ ===
const articlesData = {
    'article1': {
        md: 'logs/articles/article1/article1.md',
        img: 'logs/articles/article1/article1.jpg'
    },
    'article2': {
        md: 'logs/articles/article2/article2.md',
        img: 'logs/articles/article2/article2.jpg'
    },
    'article3': {
        md: 'logs/articles/article3/article3.md',
        img: 'logs/articles/article3/article3.png'
    },
    'article4': {
        md: 'logs/articles/article4/article4.md',
        img: 'logs/articles/article4/article4.jpg'
    },
    'article5': {
        md: 'logs/articles/article5/article5.md',
        img: 'logs/articles/article5/article5.png'
    },
    'article6': {
        md: 'logs/articles/article6/article6.md',
        img: 'logs/articles/article6/article6.png'
    },
    'article7': {
        md: 'logs/articles/article7/article7.md',
        img: 'logs/articles/article7/article7.png'
    }
};

function openServiceModal(serviceId) {
    const data = serviceData[serviceId];
    if (!data) return;

    const modal = document.getElementById('service-modal');
    modal.querySelector('.service-number-large').textContent = data.number;
    modal.querySelector('.modal-title').textContent = data.title;

    let html = `
        <p style="color: var(--cyan); font-style: italic; margin-bottom: 15px;">"${data.hook}"</p>
        <p>${data.desc}</p>
        <div class="modal-process">
            <div class="modal-process-title">// НАШ ПРОЦЕСС</div>
            <ul>${data.process.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div class="modal-process-title" style="margin-top: 25px;">// АРТЕФАКТЫ</div>
        <div class="modal-artifacts">
            ${data.artifacts.map(a => `<div class="modal-artifact"><div class="modal-artifact-icon">${a.icon}</div><div class="modal-artifact-text">${a.text}</div></div>`).join('')}
        </div>
    `;
    modal.querySelector('.modal-desc').innerHTML = html;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    document.getElementById('service-modal').classList.remove('active');
    document.body.style.overflow = '';
}

// === ARTICLE MODAL (ИСПРАВЛЕНО) ===
function openArticleModal(articleId) {
    const modal = document.getElementById('article-modal');
    const body = document.getElementById('article-body');
    
    // Получаем данные статьи
    const article = articlesData[articleId];
    if (!article) {
        body.innerHTML = '<div style="text-align: center; padding: 40px; color: #ff4d4d;">Статья не найдена</div>';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        return;
    }

    body.innerHTML = '<div style="text-align: center; padding: 40px; color: #00f3ff;">⏳ Загрузка...</div>';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    fetch(article.md)
        .then(response => {
            if (!response.ok) throw new Error('Not found');
            return response.text();
        })
        .then(markdown => {
            // Добавляем картинку + контент (с версией чтобы обойти кэш)
            const cacheBuster = Date.now();
            let html = `<img src="${article.img}?v=${cacheBuster}" alt="Article cover" class="article-cover" style="width: 100%; max-height: 600px; object-fit: contain; border-radius: 12px; margin-bottom: 25px; border: 1px solid rgba(0, 243, 255, 0.2);" onerror="this.style.display='none'">`;
            html += parseMarkdown(markdown);
            body.innerHTML = html;
        })
        .catch(error => {
            body.innerHTML = '<div style="text-align: center; padding: 40px; color: #ff4d4d;">❌ Ошибка загрузки статьи</div>';
        });
}

function closeArticleModal() {
    document.getElementById('article-modal').classList.remove('active');
    document.body.style.overflow = '';
}

// === ABOUT MODAL ===
function openAboutModal() {
    document.getElementById('about-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAboutModal() {
    document.getElementById('about-modal').classList.remove('active');
    document.body.style.overflow = '';
}

// === APPLICATION MODAL ===
function openApplicationModal() {
    const modal = document.getElementById('application-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Закрыть service modal если открыт
    document.getElementById('service-modal').classList.remove('active');
}

function closeApplicationModal() {
    document.getElementById('application-modal').classList.remove('active');
    document.body.style.overflow = '';
}

// === MARKDOWN PARSER ===
function parseMarkdown(markdown) {
    let content = markdown.replace(/^---[\s\S]*?---\n*/m, '');
    content = content.replace(/^(title|date|author|image|tags|category):.*\n/gm, '');

    content = content.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    content = content.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    content = content.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');
    content = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    content = content.replace(/^\* (.*$)/gim, '<li>$1</li>');
    content = content.replace(/^- (.*$)/gim, '<li>$1</li>');
    content = content.replace(/\n\n/g, '</p><p>');
    content = '<p>' + content + '</p>';
    content = content.replace(/<p>\s*<\/p>/g, '');
    content = content.replace(/<p>\s*<h/g, '<h');
    content = content.replace(/<\/h(\d)>\s*<\/p>/g, '</h$1>');

    return content;
}

// === EVENT LISTENERS ===
document.addEventListener('DOMContentLoaded', function () {

    // Обработка отправки формы заявки
    const applicationForm = document.getElementById('application-form');
    if (applicationForm) {
        applicationForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Собираем данные формы
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Добавляем timestamp
            data.timestamp = new Date().toISOString();
            data.source = 'na8us.com';

            // Логируем в консоль
            console.log('📧 Форма отправлена:', data);

            // Отправляем на Cloudflare Worker
            try {
                const response = await fetch('https://na8us-form-handler.edsheleh.workers.dev', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    // Успех
                    alert('✅ Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
                    this.reset();
                    closeApplicationModal();
                } else {
                    // Ошибка сервера
                    alert('⚠️ Ошибка отправки. Пожалуйста, напишите в Telegram: @nabus79');
                }
            } catch (error) {
                // Ошибка сети
                console.error('Ошибка:', error);
                alert('⚠️ Ошибка отправки. Пожалуйста, напишите в Telegram: @nabus79');
            }
        });
    }

    // Клик по карточкам услуг
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function () {
            const serviceId = this.getAttribute('data-service');
            if (serviceId) {
                openServiceModal(parseInt(serviceId));
            }
        });
    });

    // Клик по карточкам статей
    document.querySelectorAll('.log-card').forEach(card => {
        card.addEventListener('click', function () {
            const articleId = this.getAttribute('data-article');
            if (articleId) {
                openArticleModal(articleId);
            }
        });
    });

    // Закрытие модалок по клику вне контента
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Закрытие по Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
            document.body.style.overflow = '';
        }
    });

});

// === SCROLL ANIMATIONS ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Стили для анимации
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
