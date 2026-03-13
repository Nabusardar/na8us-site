# 🔄 GIT WORKFLOW - Na8us.com

**Версия:** 1.0
**Дата:** 26 февраля 2026
**Для:** C.A.L.V.I.N. (Claude AI Assistant)
**Статус:** ⚠️ ОБЯЗАТЕЛЬНО ДЛЯ ВСЕХ ИЗМЕНЕНИЙ

---

## 🚨 КРИТИЧЕСКИ ВАЖНО: ПОРЯДОК ДЕЙСТВИЙ

### ✅ ПРАВИЛЬНЫЙ ПРОЦЕСС (всегда так!):

```
1. РЕДАКТИРОВАНИЕ (локально)
   ↓
2. ЗАГРУЗКА НА СЕРВЕР (scp)
   ↓
3. ПРОВЕРКА (пользователь проверяет сайт)
   ↓
4. ПРЕДЛОЖИТЬ GIT COMMIT
   ↓
5. ПОЛУЧИТЬ ПОДТВЕРЖДЕНИЕ
   ↓
6. GIT COMMIT (сервер + локально)
   ↓
7. GIT PUSH (сервер + локально)
```

### ❌ НЕПРАВИЛЬНЫЙ ПРОЦЕСС (никак так!):

```
1. Редактирование
2. Загрузка на сервер
3. ❌ Сразу Git commit (без подтверждения!)
4. ❌ Забыл про локальный git
```

---

## 📋 ПОШАГОВАЯ ИНСТРУКЦИЯ

### ФАЗА 1: РЕДАКТИРОВАНИЕ (ЛОКАЛЬНО)

**Где:** `/Users/nabusardar/Developer/Na8us_site/`

```bash
# Редактирую файлы
# - style.css
# - index.html
# - articles.html
# - etc.
```

**Проверка:**
```bash
cd /Users/nabusardar/Developer/Na8us_site
git status
# Должно быть: modified files
```

---

### ФАЗА 2: ЗАГРУЗКА НА СЕРВЕР

**Откуда:** Локальный Mac
**Куда:** Сервер `root@45.80.228.254:/var/www/na8us/`

```bash
# Пример команды
scp /Users/nabusardar/Developer/Na8us_site/style.css root@45.80.228.254:/var/www/na8us/
scp /Users/nabusardar/Developer/Na8us_site/index.html root@45.80.228.254:/var/www/na8us/
# ... и так далее для всех файлов
```

**Проверка:**
```bash
ssh root@45.80.228.254 "ls -la /var/www/na8us/style.css"
```

---

### ФАЗА 3: СООБЩИТЬ ПОЛЬЗОВАТЕЛЮ

**Сказать:**
```
"Файлы залиты на сервер. Сайт обновлен: https://na8us.com

Пожалуйста, проверь:
- [ ] Сайт работает?
- [ ] Изменения видны?
- [ ] Мобильная версия OK?"

Жду твоей проверки ✅
```

**КРИТИЧНО:** ЖДУТЬ проверки пользователем!

---

### ФАЗА 4: ПРЕДЛОЖИТЬ GIT COMMIT

**ТОЛЬКО после проверки пользователем!**

**Спросить:**
```
"Сайт работает? Сделать Git commit для бэкапа на GitHub?"
```

**Варианты ответа:**
- "да" / "делай" → продолжить
- "нет" / "подожди" → ждать

---

### ФАЗА 5: GIT COMMIT (СЕРВЕР)

**Где:** Сервер `root@45.80.228.254`

**Шаг 5.1: Скопировать файлы в git репо**

```bash
ssh root@45.80.228.254
cd /root/my-server/site

# Копирую из /var/www/na8us/ в /root/my-server/site/
cp /var/www/na8us/style.css .
cp /var/www/na8us/index.html .
cp /var/www/na8us/articles.html .
# ... и так далее
```

**Шаг 5.2: Проверить статус**

```bash
git status
# Должно быть: modified files
```

**Шаг 5.3: Добавить файлы**

```bash
git add .
```

**Шаг 5.4: Создать commit**

```bash
git commit -m "Описание изменений"
```

**Правила для commit message:**
- Первая строка: краткое описание (что сделал)
- Тело: подробности (почему, что изменил)
- Пример: `Mobile improvements: responsive images, touch targets`
- Всегда указывать номер задачи если есть: `(#20)`

**Шаг 5.5: Push на GitHub**

```bash
git push
```

**Если push fails (conflicts):**
```bash
git pull --rebase
git push
```

---

### ФАЗА 6: GIT COMMIT (ЛОКАЛЬНЫЙ macOS)

**Где:** Локальный Mac `/Users/nabusardar/Developer/Na8us_site/`

**Шаг 6.1: Проверить статус**

```bash
cd /Users/nabusardar/Developer/Na8us_site
git status
```

**Возможные ситуации:**

**Ситуация A: Ваша ветка позади origin/main**
```
Your branch is behind 'origin/main' by 1 commit
```
**Решение:**
```bash
git stash              # спрятать локальные изменения
git pull               # подтянуть с сервера
git stash pop          # восстановить изменения
```

**Ситуация B: Проблемы с rebase**
```
error: cannot pull with rebase: You have unstaged changes
```
**Решение:** (см. Ситуация A)

**Ситуация C: Conflicts при pull**
```
CONFLICT (content): Merge conflict in file.html
```
**Решение:**
1. Разрешить конфликты вручную
2. `git add <files>`
3. `git commit`
4. `git push`

**Шаг 6.2: Добавить файлы**

```bash
git add .
```

**Шаг 6.3: Создать commit**

```bash
git commit -m "Описание изменений"
```

**Шаг 6.4: Push на GitHub**

```bash
git push
```

**Шаг 6.5: Проверить результат**

```bash
git status
# Должно быть: nothing to commit, working tree clean
```

---

## 🐛 ТИПИЧНЫЕ ОШИБКИ И РЕШЕНИЯ

### Ошибка 1: "Your branch is behind"

**Причина:** На сервере сделали commit, локально нет

**Решение:**
```bash
git stash
git pull
git stash pop
```

---

### Ошибка 2: "Cannot pull with rebase: unstaged changes"

**Причина:** Есть незакоммиченные изменения

**Решение:**
```bash
git stash
git pull
git stash pop
```

---

### Ошибка 3: Push rejected (remote contains work)

**Причина:** Кто-то другой закоммитил в GitHub

**Решение:**
```bash
git pull --rebase
git push
```

---

### Ошибка 4: Rebate conflicts

**Причина:** Конфликты при слиянии

**Решение:**
```bash
# 1. Разрешить конфликты в файлах вручную
# 2. Добавить файлы
git add <file1> <file2>
# 3. Продолжить rebase
git rebase --continue
# 4. Push
git push
```

---

## 📝 ЧЕК-ЛИСТ ПЕРЕД ЗАВЕРШЕНИЕМ

**Сервер:**
- [ ] Файлы скопированы в `/root/my-server/site/`
- [ ] `git add .` выполнен
- [ ] Commit создан
- [ ] `git push` выполнен без ошибок

**Локально:**
- [ ] `git pull` выполнен (если позади)
- [ ] `git add .` выполнен
- [ ] Commit создан
- [ ] `git push` выполнен без ошибок
- [ ] `git status` показывает: `nothing to commit, working tree clean`

---

## ⚠️ КРИТИЧЕСКИЕ ПРАВИЛА

### 1. ВСЕГДА проверять статус
```bash
git status  # ПЕРЕД каждым действием
```

### 2. ВСЕГДА спрашивать подтверждение
```
"Сделать Git commit?" ← ЖДать ответа "да/делай"
```

### 3. ВСЕГДА коммитить СНАЧАЛА сервер, ПОТОМ локально
```
Сервер: commit + push ✓
Локально: pull + commit + push ✓
```

### 4. ВСЕГДА проверять результат
```bash
git status  # ПОСЛЕ каждого действия
git log --oneline -3  # проверить что commit создан
```

---

## 🎯 ШАБЛОН COMMIT MESSAGE

### Хороший commit:
```
Mobile improvements (#20)

- Added responsive images (max-width: 100%)
- Improved touch targets (44x44px minimum)
- Fixed font sizes on mobile

Score: 8.5/10 → 9.5/10
```

### Плохой commit:
```
update
fixes
stuff
```

---

## 🚀 КРАТКАЯ ПАМЯТКА

```
1. Отредактировать файлы (локально)
2. Залить на сервер (scp)
3. Сообщить пользователю ✅
4. ЖДАТЬ проверки ⏳
5. Предложить commit: "Сделать Git commit?"
6. Получить "да" ✓
7. Коммитить на сервере
8. Коммитить локально (git stash → pull → pop → commit → push)
9. Проверить git status
```

---

## 💬 ПРИМЕР ДИАЛОГА

❌ **ПЛОХО:**
```
C.A.L.V.I.N.: Файлы залиты.
(сразу делает git commit без спроса)
Пользователь: "Кто разрешил?!"
```

✅ **ПРАВИЛЬНО:**
```
C.A.L.V.I.N.: Файлы залиты на сервер! ✅
              Сайт: https://na8us.com

              Проверь пожалуйста:
              - [ ] Сайт работает?
              - [ ] Мобильная версия OK?

              Жду твоей проверки 🙏

Пользователь: "Все отлично, делай commit"

C.A.L.V.I.N.: Понял! Делаю Git commit...
              (коммитит на сервере и локально)
              ✅ Готово! GitHub обновлен.
```

---

**Версия:** 1.0
**Автор:** C.A.L.V.I.N. на основе ошибок от 26.02.2026
**Статус:** ✅ АКТИВЕН
**Дата:** 26 февраля 2026

---

🎯 **ЗАПОМНИ: Порядок важнее скорости!**
