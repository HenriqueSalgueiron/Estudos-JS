// CHALLENGE 1
function createFunction() {
  function banana() { console.log('hello')}
  return banana
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
  function banana() { console.log(input)}
  return banana
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


function addByX(x) {
  function calc(number) {
    console.log(number + x);
  }
  return calc;
}

/*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9


// CHALLENGE 4
function addByTwo(number) {
  return (number + 2);
}

function once(func) {
  var count = 0;
  var memory = 0;
  function banana(number){
    if(count == 0) {
      count ++;
      memory = func(number);
      return memory;
    } else {
      return memory;
    }
  };
  return banana;
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
  var countHolder = 0;
  var callback = func;
  function banana() {
    countHolder ++;
    if(countHolder >= count) {
      callback();
    }
  }
  return banana; 
}

// /*** Uncomment these to check your work! ***/
// const called = function() { console.log('hello') };
// const afterCalled = after(3, called)  ;
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait, ...params) {
  setTimeout(() => {
    func(...params);    
  }, wait);
}

// /*** Uncomment these to check your work! ***/
delay(() => console.log('oi', batatinha), 1000, batatinha = 2)

// CHALLENGE 7
function rollCall(names) {
  var count = 0;
  function printNames() {
    count ++;
    if (names.length == count - 1) {
      console.log('Everyone accounted for')
    } else {
      console.log(names[count - 1]);
    }
  };
  return printNames;
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(passedFunction, magicWord) {
  var previousResults = [];
  function verifier(arg) {
    if (magicWord != arg) {
      result = {magicWord: passedFunction(arg)};
      previousResults.push(result);
      return passedFunction(arg)
    } else {
      return {...previousResults} 
    }
  }
  return verifier;
}

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
  var count = 0;
  function logArray() {
    count ++
    if (count > array.length) { count = 1 };
    console.log(array[count - 1]);
  }
  return logArray;
}

// ou 

function cycleIterator(array) {
  var count = 0;
  function logArray() {
    console.log(array[count % array.length]);
    count++
  }
  return logArray;
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// getDay() // => should log 'Fri'
// getDay() // => should log 'Sat'
// getDay() // => should log 'Sun'
// getDay() // => should log 'Fri'


// CHALLENGE 10
function defineFirstArg(func, laranja) {
  function banana(abacate) {
    return func(laranja, abacate)
  }
  return banana
}

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
  function createdFunc(...arg) {
    return {
      date: (new Date()).getDate(),
      output: func(...arg)
    }
  }
  return createdFunc;
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {
  memory = [];
  function createdFunction(string1,string2) {
    if(string2) {
      memory.push({search: string1, replace: string2});
      return;
    } 
    else {
      memory.map((item) => {
      string1 =  string1.replace(item.search, item.replace);
      }) 
      return string1
    }
    
  } 
  return createdFunction;
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secretPassed) {
  var secret = secretPassed;
  
  return {
    getSecret,
    setSecret
  }

  function getSecret() {
    console.log(secret)
  }

  function setSecret(x) {
    secret = x;
  }
}


// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5)
// obj.getSecret() // => returns 5
// obj.setSecret(2)
// obj.getSecret() // => returns 2


// CHALLENGE 14
function callTimes() {
  var count = 0;
  function createdFunction() {
    count++
    console.log(count)
  } 
  return createdFunction;
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2


// CHALLENGE 15
function roulette(num) {
  var count = 0;
  function createdFunction() {
    count ++
    if (count < num) {
      return 'spin'
    }
    else if (count == num) {
      return 'win'
    }
    else {
      return 'pick a number to play again'
    }
  }
  return createdFunction;
}

// /*** Uncomment these to check your work! ***/
// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'


// CHALLENGE 16
function average() {
  var memory = [];
  let med = 0;
  function createdFunction(num) {
    if (typeof num == 'number') {
      memory.push(num);
      med = memory.reduce((acc, curr) => acc + curr, 0) / memory.length;
      return med;
    } 
    if (memory.length != 0 && typeof num == 'undefined') {
      return med;
    }
    else {
      return 0;
    }
  }
  return createdFunction;
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  let tests = arrOfTests;

  function test(func){
  	let result = true;
    tests.map((item) => {
      if(func(item[0]) !== item[1]) {
        result = false;
      }
    })
    return result;
  }

  return test;
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
function makeHistory(limit) {
  var limitHistoric = limit;
  var stringHistoric = [];
  var count = 0;

  function createdFunction(string) {
    if (string == 'undo') {
      count += 1;
      if(stringHistoric.length > 0 && count <= limitHistoric + 1) {
        var removed = stringHistoric.pop(stringHistoric[stringHistoric.length - 1]);
        return (`${removed} undone`);
      } else {
        return 'nothing to undo'
      }
    } 
    else { 
      stringHistoric.push(string)
      return (`${string} done`)
    }
}

  return createdFunction;

}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'


// CHALLENGE 19
function blackjack(array) {

  function dealer(num1, num2) {
    timesPlayerInvoked = 0;

    function player() {
      if(timesPlayerInvoked == 1) {
        return num1 + num2;
      } else if(array[0] + num1 + num2 <= 21) {
          return (array[0] + num1 + num2);
      } else {
          return 'bust'
      }
    }
    return player;
  }

  return dealer;
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
