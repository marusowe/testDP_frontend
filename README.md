### Тестовое задание ###

Требуется реализовать web-приложение - аналог bit.ly и подобных систем.
То есть для длинных урлов создает их короткие аналоги.

Приложение содержит одну страницу на которой:
Форма, в которой можно ввести URL, который должен быть сокращен
Табличка со всеми сокращенными URL (с пагинацией) данного пользователя

Обязательные требования:
* Приложение НЕ содержит авторизации
* Приложение отслеживает пользователей по сессии (использовать сессии Django), т.е. у каждого пользователя свой набор редиректов (правил)
* Данные хранятся в MySQL
* При заходе на сжатый URL приложение редиректит (серверный редирект) на соответствующий URL (который был сжат)
* Пользователь по желанию может указать свой <subpart>. Если такой <subpart> уже используется, нужно сообщить об этом юзеру
* Реализация на Django
* Кэширование редиректов в редисе. Требуется сохранить в редис маппинг сокращенного урла с полным адресом, а не объект правила редиректа полностью. НЕ ИСПОЛЬЗОВАТЬ кэширование представлений, QuerySet’ов, и иные высокоуровневые способы, которые подразумевают лишь установку пары атрибутов в настройке приложения
* Очистка старых правил по расписанию:
удаление записей из MySQL; 
 очистку редиректов из Redis можно реализовать либо вместе с очисткой MySQL, либо по TTL
  
### Развертывание ###
Для простоты развертывания, все файлы с переменным виратульного окружения находятся в репозитории

1. Установить зависимости  
    `npm i`
2. Заупустить  
    `npm run`

