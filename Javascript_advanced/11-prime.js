// 11. Changing stack order using setTimeout
// Reuse the function countPrimeNumbers from 10-prime.js (copy/paste)
// Log to the console the time in milleseconds to execute the function 100 times
// Find a way to actually do most of the calculation at the end of the execution stack
// Requirements:
// Your code should display something in the range of Execution time of calculating prime numbers 100 times was 0.03999999910593033 milliseconds.
// Use setTimeout keyword to change the stack order

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
      count++;
      if (count < times) {
          setTimeout(runFunction, 0);
      } else {
          const endTime = performance.now();
          console.log(`Execution time of calculating prime numbers ${times} times was ${endTime - startTime} milliseconds.`);
      }
  };

  runFunction(); // Start the initial iteration

  for (let i = 0; i < times - 1; i++) {
    setTimeout(func, 0); // Schedule remaining function calls
  }
};

measureRunTime(countPrimeNumbers, 100);
