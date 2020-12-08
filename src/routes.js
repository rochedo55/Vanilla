const express = require("express");
const ExpenseController = require('./controllers/ExpenseController');
const RevenueController = require('./controllers/RevenueController');
const db = require('./database/connection');

const router = express.Router();

router.get("/", (req, res) => {

    const revenues = db.get("revenues").value();
    const expenses = db.get("expenses").value();
    
    const today = new Date();

    const revenuesCurrentMonth = revenues.filter(revenue => {
        return new Date(revenue.date).getMonth() == today.getMonth()
    });
    const revenuesSum = revenuesCurrentMonth.reduce((accumulator, revenue) => accumulator + revenue.value, 0);

    const expensesCurrentMonth = expenses.filter(expense => {
        return new Date(expense.date).getMonth() == today.getMonth()
    });
    const expensesSum = expensesCurrentMonth.reduce((accumulator, expense) => accumulator + expense.value, 0);
    
    res.render('index', { revenuesSum, expensesSum, currentMoney: revenuesSum - expensesSum });
});

router.route('/expenses/')
    .get(ExpenseController.list)
    .post(ExpenseController.create);

router.route('/revenues/')
    .get(RevenueController.list)
    .post(RevenueController.create);


module.exports = router;