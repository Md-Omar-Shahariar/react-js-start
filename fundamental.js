// how to declare a variable using let and const
const fatherName = "Omar Shahnewaz";
let season = "rainy";
season = "winter";

// condition <, >, === , !==, <=, =>
//&&, ||
if (fatherName > season) {
  console.log(fatherName);
} else if (fatherName === "Omar") {
  console.log(fatherName);
} else {
  console.log(season);
}

//array
//index
//length, push

const number = [1, 2, 3, 4, 2, 1, 3];
number[0] = 56;

//loop

for (let i = 0; i < number.length; i++) {
  const number1 = number[i];
  console.log(number1);
}

//function

function multiply(a, b) {
  const result = a * b;
  return result;
}
console.log(multiply(2, 3));
//object
//acces properties by name

const student = {
  name: "Afridi",
  age: 24,
  hobby: "gardening",
};
const myAge = "age";
console.log(student.age); //direct acces by property
console.log(student["name"]); //access by property name
console.log(student[myAge]); //property name in a variable
