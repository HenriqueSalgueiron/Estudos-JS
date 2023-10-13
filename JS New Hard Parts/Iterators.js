// Challenge 1-A

// const array = [1,2,3,4,5]
// function sum(el) {
//   var accumulate = 0;
//   for (let i = 0; i < el.length; i++) {
//     accumulate += el[i];
//   }
//   return accumulate
// }
// console.log(sum(array))

// Challenge 1-B

// const array = [1,2,3,4,5]

// function iterator(array) {
//   var i = 0;
//   return function() {
//       console.log(array[i]);
//       i++;
//   }
// }
// const next = iterator(array);
// next()
// next()

// Challenge 2

// array = [1,2,3,4,5]
// function nextIterator(array) {
//   var i = 0;
//   const iterator = {
//     next: function() {
//       console.log(array[i]);
//       i++;
//     }
//   }
//   return iterator
// }
// const iterator = nextIterator(array);
// iterator.next()
// iterator.next()

// Challenge 3

// array = [1,2,3,4,5]
// function sum(array) {
//   var accumulator = 0;
//   var iterator = nextIterator(array);
//   var next = iterator.next();
//   while(next) {
//     accumulator += next;
//     next = iterator.next()
//   }
//   return accumulator;
// }
// console.log(sum(array))

// Challenge 4

// function setIterator(set) {
//   let setIterator = set.values()
//   const iterator = {
//     next: function () {
//       return setIterator.next().value
//     }
//   }
//   return iterator
// }
// let mySet = new Set('hey')
// const myIterator = setIterator(mySet)
// console.log(myIterator.next());

// Challenge 5

// function indexIterator(arr) {
//   let index = 0;
//   const iterator = {
//     next: function () {
//       const value = arr[index];
//       index++;
//       return [index - 1, value];
//     },
//   };
//   return iterator;
// }
// const array5 = ["a", "b", "c", "d"];
// const iteratorWithIndex = indexIterator(array5);
// console.log(iteratorWithIndex.next());

// CHALLENGE 6

// function Words(string) {
//   this.str = string;
// }
// Words.prototype[Symbol.iterator] = function () {
//   let index = 0;
//   let myWords = this.str.split(/\s/);
//   return {
//     next: function () {
//       if (index < myWords.length) {
//         const value = myWords[index];
//         index++;
//         return { value: value, done: false };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };
// const helloWorld = new Words("muitas palavras para testar uhul");
// for (let word of helloWorld) {
//   console.log(word);
// }

// CHALLENGE 7

// function valueAndPrevIndex(array) {
//   let index = 0;
//   const returnedSentence = {
//     sentence: function () {
//       if (index == 0) {
//         index++;
//         return (`${array[0]} - It's the first`);
//       } else if (index < array.length) {
//         index++;
//         return `${array[index - 1]} - Was found after index ${index - 2}`;
//       } else {
//         return 'Done!'
//       }
//     },
//   };
//   return returnedSentence;
// }
// const returnedSentence = valueAndPrevIndex([4, 5, 6]);
// console.log(returnedSentence.sentence());

// CHALLENGE 8 

function* createConversation(string) {


}

console.log(createConversation('english').next());
