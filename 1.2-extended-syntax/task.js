'use strict';

function getResult(a,b,c){
    let D = b**2 - 4*a*c;
    let x = [];
    if (D === 0) {
        x.push(-b / (2*a));
    } else if (D < 0) {
        return x;
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2*a);
        let x2 = (-b - Math.sqrt(D)) / (2*a);
        x.push(x1);
        x.push(x2);
    }
    return x;
}

function getAverageMark(marks){
    let averageMark = 0;
    let count = 0;
    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5) {
        alert('Оценок больше 5!');
        marks.splice(5);
    }
    for (let i=0; i < marks.length; i++) {
        count += marks[i];
    }
    averageMark = count / marks.length;
    return averageMark;
}

function askDrink(name, dateOfBirthday){
    let result = '';
    let userBirthYear = dateOfBirthday.getFullYear();
    let todayYear = new Date().getFullYear();
    let userAges = todayYear - userBirthYear;
    if (userAges >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
    return result;
}