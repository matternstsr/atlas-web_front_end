// 13. Binding + Closure
// Write an object user with the attributes:
// hobby: Calligraphy
// favoriteSport: Hockey
// astrologicalSign: Aries
// firstName: Buillaume
// lastName: Johns
// location: Netherlands
// occupation: Engineer
// Create a function named logWelcomeUser:
// It takes one argument welcomeString (String)
// It logs to the console <welcomeString>, <firstName>. Your occupation is: <occupation>
// Create a variable named bindLogWelcomeUser. It binds the logWelcomeUser function to the user object.
// Call the function with the string Welcome
// Requirements:
// Calling bindLogWelcomeUser('Hello'); should return Hello, Buillaume. Your occupation is: Engineer

const user = {
  hobby: "Calligraphy",
  favoriteSport: "Hockey",
  astrologicalSign: "Aries",
  firstName: "Buillaume",
  lastName: "Johns",
  location: "Netherlands",
  occupation: "Engineer"
};

const logWelcomeUser = function(welcomeString) {
  console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
};

const bindLogWelcomeUser = logWelcomeUser.bind(user);

console.log(bindLogWelcomeUser('Hello'));
