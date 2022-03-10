const number = [1, 2, 3, 4, 2, 1, 3];
const student = {
  name: "Afridi",
  age: 24,
  hobby: ["breeding", "gardening"],
};
//tamplate string
const aboutMe = `My name is ${student.name}. Age is ${student.age} has number ${number[2]} also like ${student.hobby[1]}`;
console.log(aboutMe);

//arrow function
const getFiftyfive = () => 55;
console.log(getFiftyfive());
const addSixtyfive = (num) => num + 65;
console.log(addSixtyfive(20));
const isEven = (x) => x % 2 == 0;
console.log(isEven(5));
const addThree = (x, y, z) => x + y + z;
console.log(addThree(1, 2, 3));
const doMath = (num1, num2) => {
  const add = num1 + num2;
  const mul = add * 2;
  return mul;
};
console.log(doMath(2, 3));

//spred operator

const newNumber = number;
number.push(99);
console.log(number);
console.log(newNumber);

//copy of aray
const newNumber2 = [...number];
number.push(44);
console.log(number);
console.log(newNumber2);

// create a new array from older array and add new element

const currentNumber = [...number, 66];
console.log(number);
console.log(currentNumber);
