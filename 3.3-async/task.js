'use strict';

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }
  addClock(time, callBack, id) {
    if(!(id || id==0)) {throw new Error('Невозможно идентифицировать будильник')};
    
    try { if(this.alarmCollection.some( obj => obj.id == id) ) throw new Error('Такой таймер существует')}
    catch(e) {
      console.log(e);
      return;
    }
    this.alarmCollection.push({id, time, callBack});
  }
  removeClock(id) {
    this.alarmCollection = this.alarmCollection.filter((obj) => !(obj.id == id));
    }
    
  getCurrentFormattedTime() {
      let currentTime = new Date();
      let hour = currentTime.getHours();
      if (hour < 10) hour = '0' + hour;
      let minute = currentTime.getMinutes();
      if (minute < 10) minute = '0' + minute;
      return hour + ':' + minute;
      }
              
  start() {
      let checkClock = (obj) => {
      let now = this.getCurrentFormattedTime();
      if ( obj.time == now ) obj.callBack();
    }
      let interval = 0;
      if (!this.timerId) { 
        interval = 1000;
        this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock), interval);
      }
  }

  stop() {
    if(this.timerId) clearInterval(this.timerId);
    this.timerId = null;
  }

  printAlarms() {
    console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}\n`);
    this.alarmCollection.forEach(function(timer) {
      console.log(`Будильник ${timer.id} заведен на ${timer.time}`)});
  }

  clearAlarms() {
    clearInterval(this.timerId);
    this.alarmCollection = [];
  }
}

function testAlarms() {
  let phoneAlarm = new AlarmClock();
  phoneAlarm.addClock('14:39', () => console.log('Пора вставать'), 1);
  phoneAlarm.addClock('14:40', () => { console.log('Вставай уже!'); phoneAlarm.removeClock(2)}, 2);
  try {phoneAlarm.addClock('14:40', () => console.log('Пора умываться'));} catch(e) {console.log(e);};
  phoneAlarm.addClock('14:41', () => {console.log('Вставай, а то проспишь'); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms();}, 3);
  phoneAlarm.addClock('14:42', () => console.log('Вставай, а то проспишь!'), 1);  
  phoneAlarm.printAlarms();
  phoneAlarm.start();
}

testAlarms();