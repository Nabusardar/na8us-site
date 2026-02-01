<<<<<<< HEAD
/* ═══════════════════════════════════════════════════════════
   NABUS EXPANSION — SCRIPT.JS v4.0
   На основе текущего сайта + согласованные изменения
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

function openServiceModal(serviceId) {
    const data = serviceData[serviceId];
    if (!data) return;

    const modal = document.getElementById('service-modal');
    modal.querySelector('.service-number-large').textContent = data.number;
    modal.querySelector('.modal-title').textContent = data.title;

    // Расширенное описание с процессом и артефактами
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

// === ARTICLE MODAL ===
function openArticleModal(articleId) {
    const modal = document.getElementById('article-modal');
    const body = document.getElementById('article-body');

    body.innerHTML = '<div style="text-align: center; padding: 40px; color: #00f3ff;">Загрузка...</div>';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    fetch(`logs/articles/${articleId}/${articleId}.md`)
        .then(response => {
            if (!response.ok) throw new Error('Not found');
            return response.text();
        })
        .then(markdown => {
            body.innerHTML = parseMarkdown(markdown);
        })
        .catch(error => {
            body.innerHTML = '<div style="text-align: center; padding: 40px; color: #ff4d4d;">Ошибка загрузки статьи</div>';
        });
}

function closeArticleModal() {
    document.getElementById('article-modal').classList.remove('active');
    document.body.style.overflow = '';
}

// === ABOUT MODAL (НОВОЕ) ===
function openAboutModal() {
    document.getElementById('about-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAboutModal() {
    document.getElementById('about-modal').classList.remove('active');
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

    // Клик по карточкам услуг
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function () {
            const serviceId = this.getAttribute('data-service');
            if (serviceId) {
                openServiceModal(parseInt(serviceId));
=======
/* ========================================
   NABUS EXPANSION — MAIN SCRIPT v4
   Original + All Agreed Changes
   ======================================== */

// === ДАННЫЕ УСЛУГ ===
const servicesData = {
    1: {
        number: '01',
        title: 'AI-АССИСТЕНТЫ',
        description: 'Создаём виртуальных сотрудников с памятью, голосом и характером. Telegram-боты и чат-боты на базе GPT/Claude. Консультируют, продают, поддерживают — 24/7, без выходных. Полная кастомизация под ваш бренд.'
    },
    2: {
        number: '02',
        title: 'N8N АВТОМАТИЗАЦИЯ',
        description: 'Связываем сервисы в единую систему. CRM, почта, календарь, Telegram — всё работает само. Автоматические отчёты, уведомления, обработка заявок. Экономия времени с первого дня.'
    },
    3: {
        number: '03',
        title: 'GEO-ПРОДВИЖЕНИЕ',
        description: 'Ваш бизнес будет первым, кого назовёт ChatGPT, Perplexity и Gemini. Оптимизация под AI-поисковики — новое SEO для эпохи нейросетей. Аудит, стратегия, внедрение.'
    },
    4: {
        number: '04',
        title: 'ВАЙБКОДИНГ',
        description: 'Быстрое создание сайтов, лендингов, MVP через AI. Код через нейросети — в 5 раз быстрее и дешевле традиционной разработки. От идеи до продакшна за дни, не месяцы.'
    }
};

// === ДАННЫЕ СТАТЕЙ ===
const articlesData = {
    1: {
        path: 'logs/articles/article1/article1.md',
        image: 'logs/articles/article1/article1.jpg'
    },
    2: {
        path: 'logs/articles/article2/article2.md',
        image: 'logs/articles/article2/article2.jpg'
    },
    3: {
        path: 'logs/articles/article3/article3.md',
        image: 'logs/articles/article3/article3.png'
    }
};

// === ОТВЕТЫ ЧАТА ===
const chatResponses = [
    'Интересный запрос. Анализирую данные...',
    'Системы NABUS обрабатывают информацию. Для детального ответа свяжитесь через Telegram.',
    'Запрос принят. Это направление входит в наши компетенции.',
    'Понял. Для обсуждения деталей лучше перейти в Telegram @nabus79.',
    'Обработка завершена. Рекомендую оставить заявку для персонального ответа.',
    'Принято. Наши специалисты могут подробнее раскрыть эту тему.',
    'Сканирую базу знаний... Найдено несколько релевантных протоколов.',
    'Запрос классифицирован. Рекомендую изучить секцию DEPLOYMENT_LOG для примеров.'
];

// === ИНИЦИАЛИЗАЦИЯ ===
document.addEventListener('DOMContentLoaded', () => {

    // AOS Init
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: false,
        mirror: true,
        offset: 100
    });

    // DOM Elements
    const serviceModal = document.getElementById('serviceModal');
    const modalClose = document.getElementById('modalClose');
    const modalNumber = document.getElementById('modalNumber');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const formService = document.getElementById('formService');
    const showFormBtn = document.getElementById('showFormBtn');
    const requestForm = document.getElementById('requestForm');

    const articleModal = document.getElementById('articleModal');
    const articleClose = document.getElementById('articleClose');
    const articleContent = document.getElementById('articleContent');

    const aboutModal = document.getElementById('aboutModal');
    const aboutClose = document.getElementById('aboutClose');

    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');

    const serviceCards = document.querySelectorAll('.service-card');
    const logsCards = document.querySelectorAll('.logs-card');

    // === SERVICES MODAL ===
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceId = card.dataset.service;
            const service = servicesData[serviceId];

            if (service) {
                modalNumber.textContent = service.number;
                modalTitle.textContent = service.title;
                modalDescription.textContent = service.description;
                formService.value = service.title;
                requestForm.classList.remove('active');
                requestForm.reset();
                openModal(serviceModal);
>>>>>>> 3525a788cafc0be2d632a3fbc6195c29c9d59809
            }
        });
    });

<<<<<<< HEAD
    // Клик по карточкам статей
    document.querySelectorAll('.log-card').forEach(card => {
        card.addEventListener('click', function () {
            const articleId = this.getAttribute('data-article');
            if (articleId) {
                openArticleModal(articleId);
=======
    modalClose.addEventListener('click', () => closeModal(serviceModal));
    serviceModal.addEventListener('click', (e) => {
        if (e.target === serviceModal) closeModal(serviceModal);
    });

    showFormBtn.addEventListener('click', () => {
        requestForm.classList.toggle('active');
    });

    requestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(requestForm);
        const data = {
            name: formData.get('name'),
            contact: formData.get('contact'),
            service: formData.get('service'),
            timestamp: new Date().toISOString()
        };
        console.log('📨 Заявка:', data);
        alert('✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
        closeModal(serviceModal);
    });

    // === ARTICLE MODAL ===
    logsCards.forEach(card => {
        card.addEventListener('click', async () => {
            const articleId = card.dataset.article;
            const article = articlesData[articleId];

            if (!article) return;

            openModal(articleModal);
            articleContent.innerHTML = '<p style="color: var(--cyan); text-align: center;">⏳ Загрузка...</p>';

            try {
                const response = await fetch(article.path);
                if (!response.ok) throw new Error('Файл не найден');

                let markdown = await response.text();
                markdown = markdown.replace(/^---[\s\S]*?---\n*/m, '');
                const parsedHtml = marked.parse(markdown);
                const imageHtml = `<img src="${article.image}" alt="Article cover" class="article-image">`;
                articleContent.innerHTML = imageHtml + parsedHtml;

            } catch (error) {
                articleContent.innerHTML = `
                    <p style="color: #ff4444; text-align: center;">
                        ❌ Ошибка загрузки статьи.<br>
                        <small style="color: var(--text-dim);">${error.message}</small>
                    </p>
                `;
                console.error('Ошибка загрузки статьи:', error);
>>>>>>> 3525a788cafc0be2d632a3fbc6195c29c9d59809
            }
        });
    });

<<<<<<< HEAD
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
=======
    articleClose.addEventListener('click', () => closeModal(articleModal));
    articleModal.addEventListener('click', (e) => {
        if (e.target === articleModal) closeModal(articleModal);
    });

    // === ABOUT MODAL ===
    if (aboutClose) {
        aboutClose.addEventListener('click', () => closeModal(aboutModal));
    }
    if (aboutModal) {
        aboutModal.addEventListener('click', (e) => {
            if (e.target === aboutModal) closeModal(aboutModal);
        });
    }

    // === CHAT ===
    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        chatInput.value = '';

        setTimeout(() => {
            const randomResponse = chatResponses[Math.floor(Math.random() * chatResponses.length)];
            addMessage(randomResponse, 'bot');
        }, 800 + Math.random() * 1200);
    }

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}-message`;
        const prefix = sender === 'user' ? '[YOU]:' : '[NABUS]:';
        messageDiv.innerHTML = `
            <span class="message-prefix">${prefix}</span>
            <span class="message-text">${escapeHtml(text)}</span>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // === MODAL HELPERS ===
    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // === CLOSE ON ESC ===
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(serviceModal);
            closeModal(articleModal);
            if (aboutModal) closeModal(aboutModal);
        }
    });

    // === PARALLAX ===
    const heroBg = document.querySelector('.hero-bg');
    const heroGrid = document.querySelector('.hero-grid');

    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
            if (heroGrid) {
                heroGrid.style.opacity = Math.max(0, 1 - scrolled / 500);
            }
        });
    }

    console.log('🚀 NABUS EXPANSION v4 initialized');
    console.log('📡 Systems online. Ready for deployment.');
});

// === GLOBAL: About Modal ===
function openAboutModal() {
    const aboutModal = document.getElementById('aboutModal');
    if (aboutModal) {
        aboutModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
>>>>>>> 3525a788cafc0be2d632a3fbc6195c29c9d59809
