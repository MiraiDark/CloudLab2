var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

const port = process.env.PORT || 8080;

app.get('/index', function (req, res) {
    res.render('index', {title: 'Заголовок', message: 'Мой текст!'});
});

app.get('/page2', function (req, res) {
    res.render('page2', {title: 'Страница 2', message: 'Content is not available'});
});

app.listen(port, function() {
    console.log('Приложение запущено');
});
