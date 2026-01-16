/* ========================================
   NABUS EXPANSION — MAIN SCRIPT v2
   With AOS Scroll Animations
   ======================================== */

// === ДАННЫЕ УСЛУГ ===
const servicesData = {
    1: {
        number: '01',
        title: 'СИНТЕЗ ЦИФРОВЫХ ЛИЧНОСТЕЙ',
        description: 'Создаём виртуальных сотрудников с памятью, голосом и характером. Они консультируют, продают, поддерживают — 24/7, без выходных и зарплаты. Полная кастомизация под ваш бренд и задачи.'
    },
    2: {
        number: '02',
        title: 'GEO-ЭКСПАНСИЯ',
        description: 'Ваш бизнес будет первым, кого назовёт ChatGPT, Яндекс ИИ и Perplexity. Оптимизация под AI-поисковики — новое SEO для эпохи нейросетей. Аудит, стратегия, внедрение.'
    },
    3: {
        number: '03',
        title: 'НЕЙРО-АВТОМАТИЗАЦИЯ',
        description: 'Telegram-боты, CRM-интеграции, автоответы, парсинг, отчёты — всё, что можно автоматизировать, будет автоматизировано. Экономия времени и денег с первого дня.'
    },
    4: {
        number: '04',
        title: 'АРХИТЕКТУРА БИЗНЕС-ЯДРА',
        description: 'Внедряем искусственный интеллект в ваши процессы: от анализа данных до генерации контента. Не игрушка — рабочий инструмент, который окупается.'
    }
};

// === ОТВЕТЫ ЧАТА (ЗАГЛУШКА) ===
const chatResponses = [
    'Интересный запрос. Анализирую данные...',
    'Системы NABUS обрабатывают информацию. Для детального ответа свяжитесь через Telegram.',
    'Запрос принят. Это направление входит в наши компетенции.',
    'Понял. Для обсуждения деталей лучше перейти в Telegram.',
    'Обработка завершена. Рекомендую оставить заявку для персонального ответа.',
    'Принято. Наши специалисты могут подробнее раскрыть эту тему.'
];

// === ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ ===
document.addEventListener('DOMContentLoaded', () => {

    // === ИНИЦИАЛИЗАЦИЯ AOS ===
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: false,
        mirror: true,
        offset: 100
    });

    // === DOM ЭЛЕМЕНТЫ ===

    // Модалка услуг
    const serviceModal = document.getElementById('serviceModal');
    const modalClose = document.getElementById('modalClose');
    const modalNumber = document.getElementById('modalNumber');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const formService = document.getElementById('formService');
    const showFormBtn = document.getElementById('showFormBtn');
    const requestForm = document.getElementById('requestForm');

    // Модалка статьи
    const articleModal = document.getElementById('articleModal');
    const articleClose = document.getElementById('articleClose');
    const articleContent = document.getElementById('articleContent');

    // Чат
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');

    // Карточки
    const serviceCards = document.querySelectorAll('.service-card');
    const logsCard = document.getElementById('logsCard');

    // === УСЛУГИ — ОТКРЫТИЕ МОДАЛКИ ===
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceId = card.dataset.service;
            const service = servicesData[serviceId];

            if (service) {
                modalNumber.textContent = service.number;
                modalTitle.textContent = service.title;
                modalDescription.textContent = service.description;
                formService.value = service.title;

                // Сброс формы
                requestForm.classList.remove('active');
                requestForm.reset();

                openModal(serviceModal);
            }
        });
    });

    // === МОДАЛКА УСЛУГ — ЗАКРЫТИЕ ===
    modalClose.addEventListener('click', () => closeModal(serviceModal));
    serviceModal.addEventListener('click', (e) => {
        if (e.target === serviceModal) closeModal(serviceModal);
    });

    // === ПОКАЗАТЬ ФОРМУ ЗАЯВКИ ===
    showFormBtn.addEventListener('click', () => {
        requestForm.classList.toggle('active');
    });

    // === ОТПРАВКА ФОРМЫ ===
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

        // TODO: Отправка в n8n webhook
        // fetch('https://n8n.na8us.com/webhook/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });

        alert('✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
        closeModal(serviceModal);
    });

    // === СТАТЬЯ — ОТКРЫТИЕ ===
    logsCard.addEventListener('click', async () => {
        openModal(articleModal);
        articleContent.innerHTML = '<p style="color: var(--cyan); text-align: center;">⏳ Загрузка...</p>';

        try {
            const response = await fetch('logs/articles/article1/article1.md');
            if (!response.ok) throw new Error('Файл не найден');

            const markdown = await response.text();
            articleContent.innerHTML = marked.parse(markdown);
        } catch (error) {
            articleContent.innerHTML = `
                <p style="color: #ff4444; text-align: center;">
                    ❌ Ошибка загрузки статьи.<br>
                    <small style="color: var(--text-dim);">${error.message}</small>
                </p>
            `;
            console.error('Ошибка загрузки статьи:', error);
        }
    });

    // === СТАТЬЯ — ЗАКРЫТИЕ ===
    articleClose.addEventListener('click', () => closeModal(articleModal));
    articleModal.addEventListener('click', (e) => {
        if (e.target === articleModal) closeModal(articleModal);
    });

    // === ЧАТ ===
    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        // Сообщение пользователя
        addMessage(text, 'user');
        chatInput.value = '';

        // Имитация "печатает..."
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

    // XSS защита
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // === ОБЩИЕ ФУНКЦИИ МОДАЛОК ===
    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // === ЗАКРЫТИЕ ПО ESC ===
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(serviceModal);
            closeModal(articleModal);
        }
    });

    // === ПАРАЛЛАКС ЭФФЕКТ НА HERO ===
    const heroBg = document.querySelector('.hero-bg');

    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }

    // === ПЛАВНОЕ ПОЯВЛЕНИЕ ПРИ ЗАГРУЗКЕ ===
    document.body.classList.add('loaded');

    console.log('🚀 NABUS EXPANSION initialized');
});