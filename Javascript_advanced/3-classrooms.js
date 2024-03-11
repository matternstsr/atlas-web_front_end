3. Closure and loops
// Write a function named createClassRoom:
// It takes into argument numbersOfStudents (number)
// Inside, it contains a function studentSeat, that takes into argument seat (number) and returns a function that returns the seat number
// After the definition of studentSeat, create and populate a variable students (array)
// Using a loop from 0 to numbersOfStudents, pass the number of iteration + 1 to studentSeat and add its return value to the students array
// Returns the students array
// Create a closure classRoom, calling createClassRoom with 10 students
// Requirements:
// Executing the following code:
// console.log(classRoom[0]());
// console.log(classRoom[3]());
// console.log(classRoom[9]());


const createClassRoom = (numbersOfStudents) => {
  const studentSeat = (seat) => {
      return function () {
          return seat;
      }
  }
  let students = []
  for (let i = 0; i <= numbersOfStudents; i++) {
      students.push(studentSeat(i + 1))
  }
  return students
}

let classRoom = createClassRoom(10)