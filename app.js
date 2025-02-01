const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const scheduleRoutes = require('./routes/scheduleRoutes'); // Подключаем роуты для расписания

const app = express();

// Подключаем MongoDB
mongoose.connect('mongodb://localhost:27017/rozklad2')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB:', err));


// Устанавливаем EJS как шаблонизатор
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Статические файлы (CSS, изображения и т.д.)
app.use(express.static(path.join(__dirname, 'public')));

// Используем роуты
app.use('/', scheduleRoutes);  // Подключаем маршруты для расписания

app.locals.partials = {
    header: 'partials/header',
    footer: 'partials/footer'
};

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
