// type ReturnObj = {
//   increment: () => number;
//   decrement: () => number;
//   reset: () => number;
// };

// function createCounter(init: number): ReturnObj {
function createCounter(init) {
  let val = init;
  return {
    increment: () => {
      val++;
      return val;
    },
    decrement: () => {
      val--;
      return val;
    },
    reset: () => {
      val = init;
      return val;
    },
  };
}

let one = 5;
const counter = createCounter(one);
console.log(counter.increment(), counter.decrement(), counter.reset());

// node 2620-Counter-II.ts
