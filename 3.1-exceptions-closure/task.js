'use strict';

function parseCount(num) {
  const parseNum = Number.parseInt(num, 10);
  if (isNaN(parseNum)) {
    throw new Error("Невалидное значение");
  }
  return parseNum;
}

function validateCount(num) {
  try {
    return parseCount(num);
  } catch(e) {
    return e;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }
  
  getPerimeter() {
    return this.a+this.b+this.c;
  }
  getArea() {
    const p = (this.getPerimeter())/2;
    const area = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
    return +area.toFixed(3);
  }
}

function getTriangle(a,b,c) {
  try {
    return new Triangle(a,b,c);
    } catch(e) {
    return {
      getArea: function() {
        return 'Ошибка! Треугольник не существует';
        }, 
      getPerimeter: function() {
        return 'Ошибка! Треугольник не существует';
        },
      }
    }
}