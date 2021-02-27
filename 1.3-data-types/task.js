'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
  
    if (isNaN(Number(percent))) {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    }

    if (isNaN(Number(contribution))) {
        return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
    }    

    if (isNaN(Number(amount))) {
        return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
    }

    let currentDate = new Date().getTime();
    let creditAmount = amount - contribution;
    let creditDate = date.getTime();
    let monthsToPay = (creditDate - currentDate) / 2.628e+9;
    let P = (1 / 12) * percent / 100;
    let monthlyPayment = creditAmount*(P+P/(((1+P)**monthsToPay)-1));
    let totalAmount = monthsToPay * monthlyPayment;
    totalAmount = +totalAmount.toFixed(2);
    if (contribution == amount) {
        totalAmount = 0;
    }
    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
    let greeting = '';
    if (name) {
        greeting = `Привет, мир! Меня зовут ${name}.`;
    } else {
        greeting = 'Привет, мир! Меня зовут Аноним.';
    }
    console.log(greeting);
    return greeting;
}

