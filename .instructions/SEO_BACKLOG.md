# 🚀 SEO BACKLOG - Na8us.com

**Версия:** 1.0
**Дата создания:** 13 марта 2026
**Последнее обновление:** 13 марта 2026
**Статус:** 🔄 В РАБОТЕ
**Ответственный:** Эдуард Шелег + Claude AI

---

## 📊 ОБЩИЙ ПРОГРЕСС

```
□□□□□□□□□□ 0% complete (0/11 tasks)
```

**Всего задач:** 11
**Выполнено:** 0
**В работе:** 0
**Ожидает:** 11

**Оценка времени:** 20 часов
**Затрачено:** 0 часов

---

## 🔴 КРИТИЧЕСКИЕ ЗАДАЧИ (СЕГОДНЯ - 3-4 часа)

> **Влияние на SEO:** +40%
> **Срочность:** Выполнить сегодня!

### ❌ Task #1: Schema.org Article Markup

**Приоритет:** 🔴 КРИТИЧНО
**Время:** 2 часа
**Статус:** ⏳ Ожидает
**Назначен:** Claude AI

**Описание:**
Добавить JSON-LD разметку Schema.org для всех 7 статей. Без этого Google не показывает rich snippets и нейросети плохо понимают контент.

**Что сделать:**
- [ ] Добавить Article schema в article1/index.html
- [ ] Добавить Article schema в article2/index.html
- [ ] Добавить Article schema в article3/index.html
- [ ] Добавить Article schema в article4/index.html
- [ ] Добавить Article schema в article5/index.html
- [ ] Добавить Article schema в article6/index.html
- [ ] Добавить Article schema в article7/index.html
- [ ] Проверить через Google Rich Results Test
- [ ] Закоммитить изменения

**Проверка:**
```bash
# Проверить что schema добавлена:
curl -s https://na8us.com/logs/articles/article7/ | grep "application/ld+json"
```

**Результат:**
- ✅ Rich snippets в Google
- ✅ AI понимает структуру статьи
- ✅ Knowledge graph в Google

---

### ❌ Task #2: Geo Meta Tags

**Приоритет:** 🔴 КРИТИЧНО
**Время:** 30 минут
**Статус:** ⏳ Ожидает
**Назначен:** Claude AI

**Описание:**
Добавить geo meta tags для GEO SEO продвижения. Без этого Яндекс/Google не понимают локацию.

**Что сделать:**
- [ ] Добавить geo.region в <head> index.html
- [ ] Добавить geo.placename в <head> index.html
- [ ] Добавить geo.position в <head> index.html
- [ ] Добавить ICBM в <head> index.html
- [ ] Добавить hreflang для RU
- [ ] Добавить hreflang для EN (если планируется EN версия)
- [ ] Добавить hreflang x-default
- [ ] Закоммитить изменения

**Код:**
```html
<!-- В <head> добавить: -->
<meta name="geo.region" content="RU">
<meta name="geo.placename" content="Москва">
<meta name="geo.position" content="55.7558;37.6173">
<meta name="ICBM" content="55.7558, 37.6173">

<link rel="alternate" hreflang="ru" href="https://na8us.com/logs/articles/article7/">
<link rel="alternate" hreflang="x-default" href="https://na8us.com/logs/articles/article7/">
```

**Результат:**
- ✅ Лучшее ранжирование в геозависимых запросах
- ✅ Яндекс/Google понимают локацию
- ✅ +15% к региональному трафику

---

### ❌ Task #3: Google & Yandex Verification

**Приоритет:** 🔴 КРИТИЧНО
**Время:** 15 минут
**Статус:** ⏳ Ожидает
**Назначен:** Эдуард Шелег

**Описание:**
Добавить verification meta tags для Google Search Console и Яндекс.Вебмастер.

**Что сделать:**
- [ ] Открыть https://search.google.com/search-console
- [ ] Добавить сайт na8us.com
- [ ] Получить google-site-verification meta tag
- [ ] Добавить в <head> index.html
- [ ] Открыть https://webmaster.yandex.com
- [ ] Добавить сайт na8us.com
- [ ] Получить yandex-verification meta tag
- [ ] Добавить в <head> index.html
- [ ] Закоммитить изменения

**Результат:**
- ✅ Полноценная работа с Google Search Console
- ✅ Полноценная работа с Яндекс.Вебмастер
- ✅ Доступ к статистике и ошибкам

---

### ❌ Task #4: Alt Text for Images

**Приоритет:** 🔴 КРИТИЧНО
**Время:** 1 час
**Статус:** ⏳ Ожидает
**Назначен:** Claude AI

**Описание:**
Добавить alt текст ко ВСЕМ изображениям. Сейчас 0 изображений с alt!

**Что сделать:**
- [ ] Найти все изображения без alt: `grep -r "<img" /var/www/na8us/ | grep -v "alt="`
- [ ] Добавить alt в article1/index.html
- [ ] Добавить alt в article2/index.html
- [ ] Добавить alt в article3/index.html
- [ ] Добавить alt в article4/index.html
- [ ] Добавить alt в article5/index.html
- [ ] Добавить alt в article6/index.html
- [ ] Добавить alt в article7/index.html
- [ ] Добавить alt в index.html (главная)
- [ ] Добавить alt в articles.html
- [ ] Закоммитить изменения

**Пример:**
```html
<!-- ПЛОХО: -->
<img src="article7.png">

<!-- ХОРОШО: -->
<img src="article7.png" alt="AI агенты автоматизация бизнеса - переход от ChatGPT к автономным агентам">
```

**Результат:**
- ✅ +10% к SEO
- ✅ Accessibility для незрячих
- ✅ AI понимает изображения

---

## 🟡 ВАЖНЫЕ ЗАДАЧИ (НА ЭТОЙ НЕДЕЛЕ - 4-5 часов)

> **Влияние на SEO:** +35%
> **Срочность:** Выполнить на этой неделе

### ❌ Task #5: Organization & WebSite Schema

**Приоритет:** 🟡 ВАЖНО
**Время:** 30 минут
**Статус:** ⏳ Ожидает
**Назначен:** Claude AI

**Описание:**
Добавить Organization, WebSite и BreadcrumbList schema markup.

**Что сделать:**
- [ ] Добавить Organization schema в index.html
- [ ] Добавить WebSite schema в index.html
- [ ] Добавить BreadcrumbList schema в article1/index.html
- [ ] Добавить BreadcrumbList schema в article2/index.html
- [ ] Добавить BreadcrumbList schema в article3/index.html
- [ ] Добавить BreadcrumbList schema в article4/index.html
- [ ] Добавить BreadcrumbList schema в article5/index.html
- [ ] Добавить BreadcrumbList schema в article6/index.html
- [ ] Добавить BreadcrumbList schema в article7/index.html
- [ ] Закоммитить изменения

**Результат:**
- ✅ Knowledge graph в Google
- ✅ Rich breadcrumbs в SERP
- ✅ +10% к CTR

---

### ❌ Task #6: Fix Favicon

**Приоритет:** 🟡 ВАЖНО
**Время:** 15 минут
**Статус:** ⏳ Ожидает
**Назначен:** Эдуард Шелег

**Описание:**
Исправить favicon - сейчас /favicon.svg возвращает 404.

**Что сделать:**
- [ ] Проверить если favicon.png существует: `ls /var/www/na8us/favicon.png`
- [ ] Если есть - обновить путь в HTML
- [ ] Если нет - создать favicon или убрать ссылку
- [ ] Закоммитить изменения

**Результат:**
- ✅ Нет ошибки 404
- ✅ Лучший branding в browser tabs

---

### ❌ Task #7: Improve Internal Linking

**Приоритет:** 🟡 ВАЖНО
**Время:** 2 часа
**Статус:** ⏳ Ожидает
**Назначен:** Claude AI

**Описание:**
Улучшить внутренний линкинг между статьями. Сейчас только 15 ссылок.

**Что сделать:**
- [ ] Добавить секцию "Related Articles" в article1
- [ ] Добавить секцию "Related Articles" в article2
- [ ] Добавить секцию "Related Articles" в article3
- [ ] Добавить секцию "Related Articles" в article4
- [ ] Добавить секцию "Related Articles" в article5
- [ ] Добавить секцию "Related Articles" в article6
- [ ] Добавить секцию "Related Articles" в article7
- [ ] Использовать правильные anchor text с keywords
- [ ] Закоммитить изменения

**Пример:**
```html
<section class="related-articles">
  <h2>Читайте также</h2>
  <a href="/logs/articles/article6/">Архитектура бизнес-ядра</a>
  <a href="/logs/articles/article5/">Нейро-автоматизация</a>
</section>
```

**Результат:**
- ✅ Лучшая перелинковка
- ✅ +15% к времени на сайте
- ✅ +10% к page views

---

### ❌ Task #8: Expand Article Content

**Приоритет:** 🟡 ВАЖНО
**Время:** 8-10 часов
**Статус:** ⏳ Ожидает
**Назначен:** Эдуард Шелег

**Описание:**
Расширить статьи до минимум 1500 слов. Сейчас слишком короткие.

**Что сделать:**
- [ ] Расширить article1 до 1500+ слов
- [ ] Расширить article2 до 1500+ слов
- [ ] Расширить article3 до 1500+ слов
- [ ] Расширить article4 до 1500+ слов
- [ ] Расширить article5 до 1500+ слов
- [ ] Расширить article6 до 1500+ слов
- [ ] Расширить article7 до 1500+ слов
- [ ] Добавить примеры/кейсы
- [ ] Добавить LSI keywords
- [ ] Закоммитить изменения

**Советы:**
- Используйте Markdown файлы в папках статей
- Добавьте секции: Примеры, FAQ, Выводы
- Используйте цитаты, статистику, ссылки

**Результат:**
- ✅ Google считает контент экспертным
- ✅ Выше рейтинг E-E-A-T
- ✅ +25% к ранжированию

---

## 🟢 ЖЕЛАТЕЛЬНЫЕ ЗАДАЧИ (КОГДА БУДЕТ ВРЕМЯ)

> **Влияние на SEO:** +15%
> **Срочность:** Не критично

### ❌ Task #9: FAQ Schema Markup

**Приоритет:** 🟢 ЖЕЛАТЕЛЬНО
**Время:** 1 час
**Статус:** ⏳ Ожидает

**Описание:**
Добавить FAQ schema в статьи если уместно.

**Что сделать:**
- [ ] Проверить если в статьях есть FAQ
- [ ] Добавить FAQ schema в подходящие статьи
- [ ] Закоммитить изменения

---

### ❌ Task #10: Video Schema (если есть видео)

**Приоритет:** 🟢 ЖЕЛАТЕЛЬНО
**Время:** 30 минут
**Статус:** ⏳ Ожидает

**Описание:**
Если на сайте есть видео - добавить Video schema.

---

### ❌ Task #11: Submit Sitemap to Search Engines

**Приоритет:** 🟢 ЖЕЛАТЕЛЬНО
**Время:** 5 минут
**Статус:** ⏳ Ожидает
**Назначен:** Эдуард Шелег

**Описание:**
Отправить sitemap в Google Search Console для быстрой индексации.

**Что сделать:**
- [ ] Открыть https://search.google.com/search-console
- [ ] Раздел "Sitemaps"
- [ ] Ввести: https://na8us.com/sitemap.xml
- [ ] Нажать "Submit"

---

## 📋 ДОПОЛНИТЕЛЬНЫЕ ЗАДАЧИ (БУДУТ ДОБАВЛЕНЫ)

### Место для новых задач:
```
[ Задачи будут добавляться по мере необходимости ]
```

---

## 🔍 МЕТРИКИ И KPI

### Текущие метрики (до улучшений):
- Google Safe Browsing: ✅ Чист
- SSL: ✅ TLSv1.3
- Page Speed: ✅ 0.22s
- Articles: ✅ 7 шт (HTTP 200)
- Schema.org: ❌ 0 шт
- Geo tags: ❌ 0 шт
- Alt текст: ❌ 0 изображений
- Internal links: ⚠️ 15 (слабо)

### Целевые метрики (после всех улучшений):
- Schema.org: ✅ 15+ штук
- Geo tags: ✅ Полный набор
- Alt текст: ✅ 100% изображений
- Internal links: ✅ 50+ ссылок
- Article length: ✅ 1500+ слов каждая
- Rich snippets: ✅ В Google SERP
- Knowledge graph: ✅ В Google

### Ожидаемый трафик:
- **Без улучшений:** 30-50 посещений/день
- **С критическими:** 100-200 посещений/день
- **Со всеми:** 300-500 посещений/день

---

## 📝 ИСТОРИЯ ИЗМЕНЕНИЙ

### 2026-03-13:
- ✅ Создан файл SEO_BACKLOG.md
- ✅ Добавлены 11 задач из аудита
- ✅ Установлены приоритеты и сроки

---

## 💬 ЗАМЕТКИ

**Правила работы с этим файлом:**

1. ✅ Перед выполнением задачи - прочитать описание
2. ✅ После выполнения - отметить галочкой [x]
3. ✅ Обновлять статус: ⏳ → 🔄 → ✅
4. ✅ Записывать время затраченное
5. ✅ Добавлять новые задачи в конец
6. ✅ Каждую неделю пересматривать приоритеты

**Формат статусов:**
- ⏳ Ожидает (не начата)
- 🔄 В работе (выполняется)
- ⚠️ Заблокирована (ждем чего-то)
- ✅ Выполнена (готово)
- ❌ Отменена (не нужна)

**Приоритеты:**
- 🔴 КРИТИЧНО (выполнить сегодня)
- 🟡 ВАЖНО (на этой неделе)
- 🟢 ЖЕЛАТЕЛЬНО (когда будет время)

---

## 🎯 СЛЕДУЮЩИЙ ШАГ

**Начать с Task #1 (Schema.org Article Markup)**

Это займет 2 часа но даст **мгновенный прирост SEO!**

Готов начать? Напиши "да" и я добавлю schema markup! 🚀

---

**Версия:** 1.0
**Автор:** Claude AI + Эдуард Шелег
**Последнее обновление:** 13 марта 2026
**Статус:** 🔄 АКТИВЕН
