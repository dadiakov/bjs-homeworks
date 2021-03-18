'use strict';

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  return weapons.map(wp => wp.name);
}

function getCountReliableWeapons(reqDurab) {
  return weapons.filter(weapon => weapon.durability > reqDurab).length;
}

function hasReliableWeapons(reqDurab) {
  return weapons.filter(weapon => weapon.durability > reqDurab).length > 0;
}

function getReliableWeaponsNames(reqDurab) {
  return weapons.filter(weapon => weapon.durability > reqDurab).map(weapon => weapon.name);
}

function getTotalDamage() {
  return weapons.reduce(((sum, weapon) => sum + weapon.attack), 0);
}

function getValuestCountToSumValues(arr, num) {
  return arr.reduce((sum, value, index, arr) => {
    sum += value;
    if (index == arr.length-1 && sum < num) {
      return arr.length;
    }
    if (sum >= num) {
      arr.splice(index);
      return index+1;
    }
    return sum;
    });
}

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
//  sleep(100);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  return arr1.every(function(arg, index) {
    return (arg == arr2[index] && arr1.length === arr2.length)
  });
}

function memorize(fn, limit) {
  let memory = [];
  return function(...args) {
    if (memory.find(finder)) {
      return (memory.find(finder)).result;
      }
    let comp = fn(...args);
    memory.push({args, result: comp});
    if (memory.length > limit) {
      memory.shift();
    }
    function finder(obj) {
      return compareArrays(obj.args, args);
    }
    return comp;
  }
}

function testCase(testFunction, timerName) {
  let testArray = [ [1,2,3], [1,2], [1,2,3], [1,2] , [9,5,2,4] ];
  console.time(timerName);
  for (let i=0; i<50; i++) {
     testArray.forEach((args) => testFunction(...args));
    }
  console.timeEnd(timerName);
} 

testCase(sum, 'startTestSum');
testCase(memorize, 'startTestMem');