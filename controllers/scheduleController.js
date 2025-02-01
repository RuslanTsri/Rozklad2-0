const Schedule = require('../models/scheldule');

exports.getSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.findOne(); // Извлекаем первый доступный расписание
        res.render('index', {
            title: 'Розклад занять', // Заголовок страницы
            schedule: schedule // данные расписания
        });
    } catch (error) {
        res.status(500).send('Error retrieving schedule');
    }
};
