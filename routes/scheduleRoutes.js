const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

// Главная страница (отображение расписания)
router.get('/', scheduleController.getSchedule);

// Другие маршруты (например, для добавления или редактирования расписания, если нужно)
// router.get('/add', scheduleController.addSchedule);
// router.post('/update', scheduleController.updateSchedule);

module.exports = router;
