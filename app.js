
// <------------------- TALKING part

function startThisBajzel() {

    console.log("Welcome!");

    let input = prompt("What would you like to do?");

    while(input !== 'Q' && input !== 'q' && input !== 'quit'){

        console.log("weszlo po while")
        if(input === 'S' || input === 's' || input === 'shopping list') {
            console.log("weszlo do S")
        
        } else if (input === 'B') {
            console.log("weszlo do B")
            let budget = new Budget();
        }

        input = prompt("What else?");
    }

    console.log("App closed.")

}

// <------------------ SHOPPING part

const shoppingList = [];
const fromSL = document.querySelector('#shoppingList');
const inputSLI = document.querySelector('#shoppingItem');
const inputSLQ = document.querySelector('#shoppingItemQuantity');

fromSL.addEventListener('submit', function (e){
    e.preventDefault(); 
    addToList(inputSLI.value, parseInt(inputSLQ.value));
    inputSLI.value='';
    inputSLQ.value='';
});

class ShoppingItem {
    constructor(itemName, itemQuantity){
        this.itemName = itemName;
        this.itemQuantity = itemQuantity;
    }
}

function addToList(name, quantity) {
    const shoppingItem = new ShoppingItem(name, quantity);
    return shoppingList.push(shoppingItem);
}

//?
function readList() {
    shoppingList.forEach(element => {
        console.log(element);
    });
}


//?
function deleteItemFromList() {
    let input = parseInt(prompt(`Which item remove? Choose from 0 to ${shoppingList.length}`));
    console.log(shoppingList[input]);
    shoppingList.splice(input, 1);
}

//?
function updateItem() {
    let inputIndex = parseInt(prompt(`Which item would you like to change? 
        Choose from 0 to ${shoppingList.length}`));
    let inputName = prompt("Name of new item?");
    let inputQuantity = prompt("How many to buy?");
    shoppingList[inputIndex] = new ShoppingItem(inputName, inputQuantity);
}

// <-------------------- BUDGET part

class Budget {
    spendings = [];
    fixedExpenses = [];
    balance;
    constructor(){
    }

    addSpending(spendingDesc, amount){
        this.spendings.push([spendingDesc, amount]);
    }

    sumSpendings(){
        let sum = 0;
        for (let index = 0; index < budget.spendings.length; index++) {
            sum += budget.spendings[index][1];
        }
        return sum;
    }

    addFixedExpenses(expenseDesc, expenseAmount){
        this.fixedExpenses.push([expenseDesc, expenseAmount]);
    }

    sumExpenses(){
        let sumE = 0;
        for (let index = 0; index < budget.fixedExpenses.length; index++) {
            sumE += budget.fixedExpenses[index][1];
        }
        return sumE;
    }

    balanceCalculator(){
        let balance = this.income - this.sumSpendings(this.spendings) - this.sumExpenses(this.fixedExpenses);
        return balance;
    }
    
    setIncome(income) {
        this.income = income;
    }

}

const budget = new Budget();

// spending values
const spendingDesc = document.querySelector('#spendingDesc');
const spendingAmount = document.querySelector('#spendingAmount');
const spendingAddBtn = document.querySelector('#spendingBtn');

spendingAddBtn.addEventListener('click', function(){
    budget.addSpending(spendingDesc.value, parseInt(spendingAmount.value));
    spendingDesc.value = '';
    spendingAmount.value = '';
});

//fixed expenses values
const fixedExpDesc = document.querySelector('#fixedExpenseDesc');
const fixedExpAmount = document.querySelector('#fixedExpenseAmount');
const fixedExpBtn = document.querySelector('#fixedExpBtn');

fixedExpBtn.addEventListener('click', function(){
    budget.addFixedExpenses(fixedExpDesc.value, parseInt(fixedExpAmount.value));
    fixedExpDesc.value = '';
    fixedExpAmount.value = '';
});

//income value
const incomeAmount = document.querySelector('#incomeAmount');
const incomeBtn = document.querySelector('#incomeBtn');

incomeBtn.addEventListener('click', function(){
    budget.setIncome(parseInt(incomeAmount.value));
    incomeAmount.value = '';
});

// <----------------------- CALENDAR part

class Task {
    constructor(taskDate, taskDescription){
        this.taskDate = taskDate;
        this.taskDescription = taskDescription;
    }
}

class TasksList {
    taskList = [];

    addTask(task){
        this.taskList.push(task);
    }

    deleteTask(index){
        this.taskList.splice(index, 1);
    }

    updateTask(index, taskDate, taskDescription){
        this.taskList[index] = new Task(taskDate, taskDescription);
    }

    readTasks(){
        this.taskList.forEach(element =>{
            console.log(element)
        });
    }
}

/*

class Calendar ?




*/