# NA8US EXPANSION - Project Manifest (v2.4)

## Branding & Identity
- **Main Brand:** NA8US EXPANSION
- **Tagline Fix:** Разделить на две строки строго через <br> в HTML:
  1. ИИ-интеграция и автоматизация процессов.
  2. Новая эра цифрового превосходства.

## Content & File System (CRITICAL)
- **Article Path:** logs/articles/article1/article1.md (Убедиться, что расширение .md, а не .rtf).
- **Image Path:** logs/articles/article1/article1.jpg.
- **Glitch Effect:** Уменьшить интенсивность тряски картинки в 3 раза (сделать едва заметным мерцанием).

## Functional Fixes
- **Error "Network response was not ok":** Исправить script.js. Проблема в том, что fetch не находит файл или путь указан неверно.
- **Modal Logic:** При нажатии на INITIATE READ_PROTOCOL открывать модальное окно. 
- **Modal Content:** Считывать текст из article1.md. Если это Markdown, преобразовать в простой текст или использовать простой текстовый вывод.
- **Readability:** Цвет текста в модальном окне — строго ярко-белый (#ffffff).