// Assignment 5.1

// Using Async/Await and generators, create the same functions and achieve the same
//  functionality. Execute 3 callback functions asynchronously, for example doTask1(), doTask2() and doTask3(). 


function doTask1() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Task 1 complete.');
        resolve();
      }, 1000);
    });
  }
  
  function doTask2() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Task 2 complete.');
        resolve();
      }, 2000);
    });
  }
  
  function doTask3() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Task 3 complete.');
        resolve();
      }, 3000);
    });
  }

  
  async function* runTasks() {
    yield doTask1();
    yield doTask2();
    yield doTask3();
  }

  
  async function executeTasks() {
    const taskGenerator = runTasks();
    for await (const task of taskGenerator) {
      // Do nothing here, just wait for each task to complete
    }
    console.log('All tasks complete.');
  }
  
  executeTasks();




// Assignment 5.2

// Write a function called vowelCount which accepts a string and
//  returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const map = new Map();
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i).toLowerCase();
      if (vowels.includes(char)) {
        const count = map.get(char) || 0;
        map.set(char, count + 1);
      }
    }
    return map;
  }

  
  const map = vowelCount('Hello, world!');
console.log(map)


//  Assignment 5.3

// Write a function called has Duplicate which accepts an array and returns true or false if 
// that array contains a duplicate. JS function should have Set API implemented.


function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

console.log(hasDuplicate(['a', 'b', 'c', 'd', 'e', 'f', 'a']))
