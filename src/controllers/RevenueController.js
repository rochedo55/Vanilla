const { v4 } = require('uuid');
const db = require('../database/connection');


exports.list = function(req, res) {
    const revenues = db.get('revenues').value();

    res.render("revenues", {revenues});
}

exports.create = function(req, res) {
    const { title, value, date } = req.body;

    const parseDate = new Date(date);

    db
        .get("revenues")
        .push({
            title,
            value: Number(value),
            id: v4(),
            date: parseDate
        })
        .write();

    const revenues = db.get('revenues').value();

    res.render("revenues", {revenues});
}