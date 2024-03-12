// 9. Prime numbers & timing execution
// Write a function named countPrimeNumbers:
// It will return the number of prime numbers from 2 to 100
// Log to the console the time in milliseconds to execute the function in this format: Execution time of printing countPrimeNumbers was <time used> milliseconds.
// Requirements:
// You must use performance API to measure the time needed to execute the function (performance.now())
// Your code should display something in the range of Execution time of printing countPrimeNumbers was 0.2700000002514571 milliseconds.

const countPrimeNumbers = () => {
  let counter = 0;
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    // Changed loop to only check up to the square root
    // NOt sure that i needed that but It felt better
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {isPrime = false; break;}
    }
    if (isPrime) counter++;
  }
  return counter;
};

const countAndMeasurePrimeNumbers = () => {
  const t1 = performance.now();
  const primesCount = countPrimeNumbers();
  const t2 = performance.now();

  console.log(`Execution time for counting prime numbers: ${t2 - t1} milliseconds.`);
  console.log(`Number of prime numbers between 2 and 100: ${primesCount}`);
};

countAndMeasurePrimeNumbers();
