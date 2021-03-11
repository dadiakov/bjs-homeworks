'use strict';

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
    fix() {
      this.state = this.state * 1.5;
    }
    set state(condition) {
      if (condition < 0) {
        this._state = 0;
      } else if (condition > 100) {
        this._state = 100;
      } else {
        this._state = condition;
      }
    }
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = 'magazine';
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = 'book';
      this.author = author;
    }
  }
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'novel';
    }
  }
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'fantastic';
    }
  }
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = 'detective';
    }
  }
  
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
    findBookBy(key, value) {
      for (let i = 0; i < this.books.length; i++) {
        if (key in this.books[i] && this.books[i][key] == value) {
        return this.books[i];
        }
      }
      return null;
    }
    giveBookByName(bookName) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name == bookName) {
          this.findedBook = this.books[i];
          this.books.splice(i, 1);
          return this.findedBook;
        }
      }
      return null;
    }
  }

  class StudentLog {
    constructor(studentName) {
      this.studentName = studentName;
    }
    getName() {
      return this.studentName;
    }
    addGrade(grade, subject) {
      if (subject in this) {
            if (grade < 1 || grade > 5 || isNaN(grade)) {
              console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
              return this[subject].length;
            }
      grade = Math.round(grade);
      this[subject].push(grade);
      } else {
            this[subject] = [];
            if (grade < 1 || grade > 5 || isNaN(grade)) {
              console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
              return this[subject].length;
            }
            grade = Math.round(grade);
            this[subject].push(grade);
      }
      return this[subject].length;
    }
    getAverageBySubject(subject) {
      let sum = 0;
      if (subject in this) {
        for (let i=0; i<this[subject].length;i++) {
          sum+=this[subject][i];
        }
      } else {
        return 0;
      }
      return sum/this[subject].length;
    }
    getTotalAverage() {
      let total = 0, count = 0;
      for (let prop in this) {
        if (Array.isArray(this[prop])) {
          for (let i=0; i<this[prop].length;i++) {
            total+=this[prop][i];
            count+=1;
          }
        }
      }
          if (total == 0) {
          return 0;
        }
        return total/count;
      }
  }