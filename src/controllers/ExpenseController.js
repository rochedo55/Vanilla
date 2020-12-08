const { v4 } = require('uuid');
const db = require('../database/connection');


exports.list = function(req, res) {
    const expenses = db.get('expenses').value();

    res.render("expenses", { expenses });
}

exports.create = function(req, res) {
    const { title, value, date } = req.body;
    
    const parsedDate = new Date(date);

    db
        .get("expenses")
        .push({ 
            title, 
            value: Number(value), 
            id: v4(),
            date: parsedDate
        })
        .write();

    const expenses = db.get('expenses').value();

    res.render("expenses", { expenses });
}