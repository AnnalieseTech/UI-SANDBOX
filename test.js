const thing = "some text";

// console.log ("thing:: " + thing + " " + typeof(thing));

// let newThing = thing.concat(" some other text");
// console.log ("newThing:: " + newThing + " " + typeof(newThing));

// newThing = newThing.split(" ");

// console.log ("newThing:: " + newThing + " " + typeof(newThing));

// value = newThing.find(function(thing) {
//     console.log("thing:: " + thing);
//     if (thing == "other") {
//         return thing;
//     }
// });

// console.log("value:: " + value);
// console.log("value:: " + value + " " + typeof(value));

// // user from the API or database
// const user =  {
//     firstName: "John",
//     lastName: "Doe",
//     yearOfBirth: 1975,
//     calculateAge: function() {
//         currentYear = new Date(Date.now()).getFullYear(); // 2024
//         return currentYear - this.yearOfBirth;
//     }
// };

// function User(firstName, lastName, yearOfBirth) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;

//     // deprecated
//     this.calculateAge = function () {
//         currentYear = new Date(Date.now()).getFullYear(); // 2024
//         return currentYear - this.yearOfBirth;
//     }
// }

// User.prototype.age = function () {
//     currentYear = new Date(Date.now()).getFullYear(); // 2024
//     return currentYear - this.yearOfBirth;
// }


// // let user1 = new User(user.firstName, user.lastName, user.yearOfBirth);
// // user1.calculateAge()
// // user1.age();


// // const userString = JSON.stringify(user);

// // console.log("user:: " + userString, typeof(user));

// // console.log(userString.lastName);


// // const parsedJSONString = JSON.parse(userString);

// // console.log ("calculateAge:: " + user.calculateAge());

// // console.log(parsedJSONString.lastName);



const patientsList = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      physician_id: 101,
      dob: "1990-01-01",
      ssn: "123-45-6789",
      gender: "Male",
      address: "1234 Elm Street, Anytown, AN 12345",
    }
];

patient = patientsList[0];

console.log (JSON.stringify(patient))

patientKeys = Object.keys(patient);

// the keys
patientKeys.forEach((headerText) => {
    console.log("headerText:: ", headerText);
  });


// Loop thru the cell data object keys and values
Object.entries(patient).forEach(([key, value], index) => {
    console.log(`${index}: ${key} = ${value}`);
  });
  