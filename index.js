// Задание 1: ""Управление библиотекой книг""
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
  title;
  author;
  pages;

  constructor (title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfoBook(){
    return `Название книги - ${this.title}, Автор - ${this.author}, Количество страниц - ${this.pages}`
  }
}

const book = new Book("Евгений Онегин", "А.С. Пушкин", 200);
console.log(book.displayInfoBook());

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

class Student {
  name;
  age;
  grade;

  constructor (name, age, grade){
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayInfoStudent(){
    return `Имя студента - ${this.name}, Возраст - ${this.age}, Группа - ${this.grade}`
  }
}

const student = new Student("Иван", 16, "1.044");
console.log(student.displayInfoStudent());