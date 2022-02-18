// function 
function salary(input) {
    return document.querySelector(input)
}


// connect with html
let income = salary(".salary-input")
let food = salary('.food-input')
let houeRent = salary('.rent-input')
let clothes = salary('.cloth-input')
let totalExpense = salary('.totalexpense')
let balance = salary('.balance')
let calculateBtn = salary('.calculate-btn')
let error = salary('.error')


// function declaration 
function salaryTotal(x) {


    //    error Handling 
    if (x > 0) {
        return parseInt(x)
    }
    else {
        error.innerText = "Salary cannot be negative"
        error.classList.add("bg-red-300")
    }

}

function salaryExpense(a, b, c,) {
    return parseInt(a) + parseInt(b) + parseInt(c)
}


calculateBtn.addEventListener('click', function () {

    let initialExpense = salaryExpense(food.value, houeRent.value, clothes.value)

    totalExpense.innerText = initialExpense

    let expense = totalExpense.innerText

    let total = salaryTotal(income.value)

    let salaryBalance = total - parseInt(expense)



    if (total > expense) {
        balance.innerText = salaryBalance

    }
    else {
        error.innerText = "Income cnnot be less than Expense"
        error.classList.add("bg-red-300")
    }

})

