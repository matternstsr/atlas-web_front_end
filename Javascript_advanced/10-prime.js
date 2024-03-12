// 10. Execution stack & timing execution
// Reuse the function countPrimeNumbers from 9-prime.js (copy/paste)
// Execute the function countPrimeNumbers 100 times
// Log to the console the time in milliseconds to execute the function 100 times
// Requirements:
// Your code should display something in the range of Execution time of calculating prime numbers 100 times was 40.865000002551824 milliseconds.

const countPrimeNumbers = () => {
  let primeCount = 0;

  for (let number = 2; number <= 100; number++) {
      let isPrime = true;
      for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
          if (number % divisor === 0) {
              isPrime = false;
              break;
          }
      }
      if (isPrime) {
          primeCount++;
      }
  }
  return primeCount;
};

const measureRunTime = (func, times) => {
  const startTime = performance.now();
  let count = 0;

  const runFunction = () => {
      func();
      count++;
      if (count < times) {
          setTimeout(runFunction, 0);
      } else {
          const endTime = performance.now();
          console.log(`Execution time of caclulating prime numbers ${times} times was ${endTime - startTime} milliseconds.`);
      }
  };

  runFunction();
};

measureRunTime(countPrimeNumbers, 100);
