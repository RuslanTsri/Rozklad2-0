const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    subject: String,
    type: String,
    room: String,
    teacher: String,
    groups: [String]
});

const timeSlotSchema = new mongoose.Schema({
    time: String,
    lessons: [lessonSchema]
});

const scheduleSchema = new mongoose.Schema({
    groupName: String,
    date: Date,
    timeSlots: [timeSlotSchema]
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
