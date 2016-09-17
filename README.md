///////////////////////////примечания///////////////////////////

TODO - раздел ТОЛЬКО для описания задач, целей и того что нужно сделать

CHANGELOG - заполняется ВВЕРХ (свежие записи ВСЕГДА вверху) заполняется путём ВЫРЕЗАНИЯ (Ctrl+X) пунктов из TODO с припиской
"(решено)" и\или с примечаниями, например: "частично решено, продолжается поиск оптимального решения по вопросу блаблабла,
сейчас стоит костыль"

README - раздел для документирования команд, их порядка, примечаний в ходе работ этих команд и т.д.

!!!ДУБЛИРОВАНИЯ ИНФОРМАЦИИ В ЭТИХ ТРЁХ ФАЙЛАХ БЫТЬ НЕ ДОЛЖНО!!!

////////////////////////////////////////////////////////////////


Описание файлов и их назначение и применение
=========================
.gitignore - перечень файлов и папок на сервере, которые не отправляются в Github


команды в консоли боевого сервера
=========================
//начало работ. обновление, установка рабочего окружения и т.д.


//оперативные команды для работы с окружением и т.д.


Хоткеи облака Cloud9
=========================


0) F6 = убирает\восстанавливает консоль
1) Ctrl + F - поиск по открытому файлу
2) Ctrl + Х - вырезать и вставить в буфер
3) Ctrl + S - сохранить изменения в файле
4) Ctrl + Z - отмена последнего действия

**кнопки меню облака Cloud9
//=======================//

1) кнопка Preview - запускает отображение сайта во внутреннем браузере.
                    вывести это на отдельную вкладку браузера можно через иконку "окна" в превьюшке

2) кнопка Run - запускает сервер



Команды Гитхаба
=========================
**https://git-scm.com/book/ru/v1/ - документация по Гитхабу
  http://www-cs-students.stanford.edu/~blynn/gitmagic/intl/ru/ch02.html - ещё более понятная инструкция по Гитхабу
  http://maxsite.org/page/how-to-put-your-project-on-github-com
  https://help.github.com/articles/set-up-git/ (наиболее доступно и быстро)
  
//вспомогательные ссылки по теме:
**https://www.youtube.com/watch?v=TCcWwUgQe8s (наглядное пошаговое пособие от создания SSH до git push) !!!
  https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/ (описание создания SSH-ключей для связи облака и гита)
  https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/
  http://codenamecrud.ru/basics-of-web-development/project-html-css
  http://dev-blogs.com/git-hub-how-to-upload/

// команды относящиеся к процессу перемещения своего или чужого проекта ИЗ Гитхаба в облако:
`git clone <...>` - клонировать проект из репозитория (см. детальное описание процесса и его команд в файле HOWTO.md)

//команды относящиеся к процессу отправки проекта и\или его правок из облака на гитхаб:
`git status` - команда опрашивает проект на предмет поиска тех файлов, которые были изменены
`git add .` - команда добавляет эти файлы и готовит к коммиту на гитхаб
`git commit -m "комментарий"` - команда позволяет сделать коммит с собственным комментарием (кавычки комментария обязательны)
`git push` - команда отправляет коммит в репозиторий

`git remote` - посмотреть, какие удалённые репозитории уже настроены



Команды NodeJS
=========================
`node app.js` - команда стартует приложение с именем app
`node -v, --version` - эта команда проверяет и показывает версию NodeJS


Команды фреймворка Express
=========================
*ссылки по теме:
 http://expressjs.com/ru/guide/routing.html - руководство по Express

`express -e имяпапки` - данной командой мы создаем тестовое приложение с шаблонизатором EJS с названием
                        корневой папки имяпапки. данная корневая папка будет создана и поименована даже
                        в том, случае если не существует, т.о. создавать её перед созданием приложения не
                        обязательно.
                        данное тестовое приложение совершенно спокойно можно перепиливать как угодно, не
                        забывая ставить модули с включением в каталог зависимостей package.json
                        
`express --help` - выводит список ВСЕХ доступных команд, которые можно сказать экспрессу



Команды NPM
=========================
`npm update npm`- обновить npm до последней версии
`npm install .` - установить зависимости. npm установит все зависимости из package.json
`npm install npm -g` - установить последнюю версию npm
`npm init` (i) - создать файл package.json
`npm adduser` (addu) - добавить юзера (или себя)
`npm publish` (pu) - опубликовать свой модуль
`npm search module` (s) - поиск модулей
`npm install имямодуля` - установить модуль
`npm i -g модуль` - установить модуль глобально
`npm update module` (up) - обновить модуль
`npm update` - обновить все модули
`npm help` - справка по списку команд доступных в npm

**флаги команд NPM
//=======================//

`-g`     - этот флаг делает...

`-i`     - этот флаг делает...

`--save` - этот флаг делает запись (внутри файла package.json) о том, что этот модуль используется приложением



Команды NVM
=========================

`nvm install 6.5.0` - установить версию ноды 6.5.0
`nvm use 6.5.0` - использовать версию ноды 6.5.0 (принудительно использовать именно конкретную версию 6.5.0,
                                                  даже если в проекте доступны другие версии)
`nvm alias default v6.5.0` - установка версии по умолчанию в среде
`nvm install stable`- команда ставит последнюю доступную стабильную версию NVM (менеджер версий Ноды на сервере)


