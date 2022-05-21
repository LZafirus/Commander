
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
    addToList(inputSLI.value, inputSLQ.value);
    inputSLI.value='';
    inputSLQ.value='';
});

class ShoppingItem {
    constructor(itemName, itemQuantity){
        this.itemName = itemName;
        this.itemQuantity = itemQuantity;
        console.log(`To buy: ${this.itemName}, quantity: ${this.itemQuantity}.`)
    }
}

function addToList(name, quantity) {
    const shoppingItem = new ShoppingItem(name, quantity);
    return shoppingList.push(shoppingItem);
}

function readList() {
    shoppingList.forEach(element => {
        console.log(element);
    });
}

function deleteItemFromList() {
    let input = parseInt(prompt(`Which item remove? Choose from 0 to ${shoppingList.length}`));
    console.log(shoppingList[input]);
    shoppingList.splice(input, 1);
}

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

    addSpending(spending){
        this.spendings.push(spending);
    }

    sumSpendings(spendings){
        let sum = spendings.reduce((a,b) => a+b, 0);
        return sum;
    }

    addFixedExpenses(expense){
        this.fixedExpenses.push(expense);
    }

    sumExpenses(spendings){
        let sum = spendings.reduce((a,b) => a + b, 0);
        return sum;
    }

    balanceCalculator(){
        let balance = this.income - this.sumSpendings(this.spendings) - this.sumExpenses(this.fixedExpenses);
        return balance;
    }
    
    setIncome(income) {
        this.income = income;
    }

}

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