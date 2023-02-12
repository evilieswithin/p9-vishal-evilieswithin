//  Assignment 4.1

// Implement a function named getNumber which generate a random number. If random Number is
//  divisible by 5 it will reject the promise else it will resolve 
// the promise. Let’s also keep the promise resolution/rejection time as a variable

const getNumber = (resolutionTime = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100);
      if (randomNumber % 5 === 0) {
        reject(`Random number ${randomNumber} is divisible by 5.`);
      } else {
        resolve(randomNumber);
      }
    }, resolutionTime);
  });
};



// Assignment 4.2

// Create an object calledTeacher derived from the Person class, and implement a method called teach which receives
//  a string called subject, and prints out: [teacher's name]is now teaching[subject]

function Person(name) {
    this.name = name;
  }
  
  function Teacher(name) {
    Person.call(this, name);
  }
  
  Teacher.prototype = Object.create(Person.prototype);
  Teacher.prototype.constructor = Teacher;
  
  Teacher.prototype.teach = function(subject) {
    console.log(`${this.name} is now teaching ${subject}.`);
  };
  

  const teacher = new Teacher("Ms. Smith");
   teacher.teach("Mathematics");


   // Assignment 4.3

  //  Implement Fibonacci Series with Iterators 

  function fibonacci() {
    let [a, b] = [0, 1];
    return {
      next: function() {
        [a, b] = [b, a + b];
        return { value: a, done: false };
      }
    };
  }
  
  const fib = fibonacci();
  let i = 0;
  while (i++ < 10) {
    console.log(fib.next().value);
  }
  
