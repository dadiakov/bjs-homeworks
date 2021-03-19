'use strict';

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }
  addClock(time, callBack, id) {
    if(!(id || id==0)) {throw new Error('error text')};
    
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
    function checkClock(obj) {
      let currentTime = new Date();
      let hour = currentTime.getHours();
      if (hour < 10) hour = '0' + hour;
      let minute = currentTime.getMinutes();
      if (minute < 10) minute = '0' + minute;
      let now = hour + ':' + minute;
      if ( obj.time == now ) obj.callBack();
    }
      let interval = 0;
      if (!this.timerId) interval = 1000;
      this.timerId = setInterval(this.alarmCollection.map(checkClock), interval);
  }
  stop() {
    if(this.timerId) clearInterval(timerId);
    this.timerId = null;
  }
  printAlarms() {
    this.alarmCollection.forEach(function(timer) {
      console.log(`Будильник ${timer.id} заведен на ${timer.time}`)});
  }
  clearAlarms() {
    clearInterval(this.timerId);
    this.alarmCollection = [];
  }
}