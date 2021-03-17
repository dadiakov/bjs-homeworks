'use strict';

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
console.log(weapons);

function getNames() {
  return weapons.map(wp => wp.name);
}
console.log(getNames());

function getCountReliableWeapons(reqDurab) {
  return weapons.filter(weapon => weapon.durability > reqDurab).length;
}
console.log(getCountReliableWeapons(200));


function hasReliableWeapons(reqDurab) {
  return weapons.filter(weapon => weapon.durability > reqDurab).length > 0;
}
console.log(hasReliableWeapons(200));

function getReliableWeaponsNames(reqDurab) {
  return weapons.filter(weapon => weapon.durability > reqDurab).map(weapon => weapon.name);
}
console.log(getReliableWeaponsNames(200));

function getTotalDamage() {
  let totalDamage = 0;
  weapons.map(function(weapon) {
		totalDamage+=weapon.attack; 
              });
  return totalDamage;
}
console.log(getTotalDamage());

function getValuestCountToSumValues(arr, num) {
  let outPut = [];
  let sum = 0, count = 0;
  arr.map(function(arrNum) {
    count++;
    sum+=arrNum;
    if (sum >= num) {
      outPut.push(count);
    };
  });
  return outPut[0];
}

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(100);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  return arr1.every(arr => arr1.length === arr2.length && arr === arr2[arr1.indexOf(arr)]);
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
      if (compareArrays(obj.args, args)) {
        return true;
        }
    }
    return comp;
  }
}