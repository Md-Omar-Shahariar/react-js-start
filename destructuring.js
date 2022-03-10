//array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x, y);

// const [x, y] = [42, 65];
const [x, y] = numbers;
console.log(x, y);

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}
const [a, b] = boxify(90, 80);
console.log(a, b);

const student = {
  name: "afridi",
  age: "24",
  movies: ["king khan", "Dhakar pola"],
};

const [first, second] = student.movies;
console.log(first, second);

//objext destructuring

const { name, age } = { name: "alu", id: 1122, age: "14" };

console.log(name, age);

const employee = {
  ide: "vs code",
  designation: "developer",
  machine: "mac",
  language: ["html", "c++", "js"],
  specifation: {
    height: 66,
    weight: 50,
    address: "Dhaka",
    drink: "Water",
    watch: {
      brand: "apple",
    },
  },
};

const { machine, ide } = employee;
const { weight, height } = employee.specifation;
const { brand } = employee?.specifation?.watch;
