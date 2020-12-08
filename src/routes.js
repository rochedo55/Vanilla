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
    
    const expensesCurrentMonth = expenses.filter(expense => {
        return new Date(expense.date).getMonth() == today.getMonth()
    });

    const revenuesCurrentMonthSum = revenuesCurrentMonth.reduce((accumulator, revenue) => accumulator + revenue.value, 0);
    const expensesCurrentMonthSum = expensesCurrentMonth.reduce((accumulator, expense) => accumulator + expense.value, 0);

    const currentMoney = revenuesCurrentMonthSum - expensesCurrentMonthSum;

    const revenuesSum = revenues.reduce((accumulator, revenue) => accumulator + revenue.value, 0);
    const expensesSum = expenses.reduce((accumulator, expense) => accumulator + expense.value, 0);

    const balance = revenuesSum - expensesSum;
    
    res.render('index', {
        revenuesCurrentMonth,
        expensesCurrentMonth,
        revenuesCurrentMonthSum, 
        expensesCurrentMonthSum, 
        currentMoney, 
        balance });
});

router.route('/expenses/')
    .get(ExpenseController.list)
    .post(ExpenseController.create);

router.route('/revenues/')
    .get(RevenueController.list)
    .post(RevenueController.create);


module.exports = router;