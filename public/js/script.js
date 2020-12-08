var revenues = [];
var expenses = [];

function showAddTransaction() {
    document.querySelector('.add-expense').classList.toggle('show');
    document.querySelector('.add-revenue').classList.toggle('show');
}

const modalAddRevenue = document.getElementById("modalAddRevenue")
const modalAddExpense = document.getElementById("modalAddExpense")

const span1 = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("close")[1];

const titleRevenue = document.getElementById("tituloReceita");
const valueRevenue = document.getElementById("valorReceita");
const formRevenue  = document.getElementById("revenueForm");

const titleExpense = document.getElementById("titleExpense");
const valueExpense = document.getElementById("valueExpense");
const formExpense = document.getElementById("expenseForm");

const expensesSum = document.getElementById("expensesSum");
const revenuesSum = document.getElementById("revenuesSum");
const currentBalance = document.getElementById("currentBalance");

function openModalRevenue(){
    modalAddRevenue.style.display = "block";
}

function openModalExpense(){
    modalAddExpense.style.display = "block";
}

span1.onclick = function() {
    modalAddRevenue.style.display = "none";
}

span2.onclick = function() {
    modalAddExpense.style.display = "none";
}

function calculateStatistics() {
    let sumRevenues = 0;
    let sumExpenses = 0;

    revenues.forEach(revenue => {
        sumRevenues += revenue.value
    });

    expenses.forEach(expense => {
        sumExpenses += expense.value
    });

    currentBalance.innerHTML = `R$ ${sumRevenues - sumExpenses}`;
    expensesSum.innerHTML = `R$ ${sumExpenses}`;
    revenuesSum.innerHTML = `R$ ${sumRevenues}`;
}

document.getElementById("btnAddReceita").onclick = function(e) {    
    e.preventDefault();

    if (titleRevenue.value === "" || valueRevenue.value === "") {
        alert("Todos os campos são obrigatórios");
        return;
    }

    if (Number(valueRevenue.value) <= 0) {
        alert("Por favor insira um valor válido para receita");
        return;
    }

    formRevenue.submit();

    modalAddRevenue.style.display = "none";
}


document.getElementById("btnAddExpense").onclick = function(e) {
    e.preventDefault();

    if (titleExpense.value === "" || valueExpense.value === "") {
        alert("Todos os campos são obrigatórios");
        return;
    }

    if (Number(valueExpense.value) <= 0) {
        alert("Por favor insira um valor válido para receita");
        return;
    }

    formExpense.submit();

    modalAddExpense.style.display = "none";
}