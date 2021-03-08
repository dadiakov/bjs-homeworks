'use strict';

String.prototype.isPalindrome = function() {
  let str = this.toLowerCase().replace(/\s/g, '');
  return str == str.split('').reverse().join('');
}

function getAverageMark(marks) {
  let average = 0;
  let averageMark = 0;
  for (let i = 0; i < marks.length; i++) {
    average += marks[i];
  }
  if (!average) {
    return 0;
  }
  return averageMark = Math.round(average / marks.length);
}

function checkBirthday(birthday) {
  let now = Date.now();
  let currentYear = new Date().getFullYear();
  birthday = (new Date(birthday)).getTime();
  let diff = now - birthday;
  let isLeap = new Date(currentYear, 1, 29).getMonth() == 1;
  let age = isLeap? diff / 3.16224e+10 : diff / 3.1536e+10;
  let verdict = age > 18? true : false;
  return verdict;
}