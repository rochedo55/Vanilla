

function showAddTransaction() {
    document.querySelector('.add-expense').classList.toggle('show');
    document.querySelector('.add-revenue').classList.toggle('show');
}

const modal1 = document.getElementById("myModal1")
const modal2 = document.getElementById("myModal2")

const span1 = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("close")[1];

function openModalRevenue(){
    modal1.style.display = "block";
}

function openModalExpense(){
    modal2.style.display = "block";
}

span1.onclick = function() {
    modal1.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal1 || event.target == modal2) {
      modal1.style.display = "none";
      modal2.style.display = "none";
    }
}