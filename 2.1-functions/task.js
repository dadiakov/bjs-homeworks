'use strict';

function getSolutions(a, b, c) {
  let roots = [];
  let x1 = 0, x2 = 0;
  let D = b**2 - 4*a*c;
  if (D === 0) {
    x1 = -b / (2*a);
    roots.push(x1);
  } else if (D > 0) {
      x1 = (-b + Math.sqrt(D)) / (2*a);
      x2 = (-b - Math.sqrt(D)) / (2*a);
      roots.push(x1);
      roots.push(x2);
    };
  return {D, roots};
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\nЗначение дискриминанта: ${result.D}`);
  if (result.D < 0) {
    console.log('Уравнение не имеет вещественных корней');
  } else if (result.D === 0) {
      console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else {
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

function getAverageScore(data) {
  let outputObj = {};
  let average = 0;
  let sum = 0;
  for (let prop in data) {
    outputObj[prop] = getAverageMark(data[prop]);;
  };
  let arrayOfAverages = [];
  for (let prop in outputObj) {
    arrayOfAverages.push(outputObj[prop]);
  }
  for (let i = 0; i < arrayOfAverages.length; i++) {
    sum += arrayOfAverages[i];
  }
  average = sum / arrayOfAverages.length;
  if (!average) {
    average = 0;
  };
  outputObj.average = average;
  return outputObj;
}

function getAverageMark(marks) {
  let sum = 0;
  if (marks.length === 0) {
    return 0;
  };
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  };
  let average = sum / marks.length;
  return average;
}

function getPersonData(secretData) {
  let outputObj = {}; 
  for (let prop in secretData) {
    if (prop == 'aaa') {
      outputObj.firstName = getDecodedValue(secretData[prop]);
    } else {
      outputObj.lastName = getDecodedValue(secretData[prop]);  
      }
   }
  return outputObj;
}

function getDecodedValue(secret) {
  return secret == 0 ? 'Родриго' : 'Эмильо';
}
