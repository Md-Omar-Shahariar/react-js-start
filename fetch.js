//json stringyfy parse
const student = {
  name: "afridi",
  age: "24",
  movies: ["king khan", "Dhakar pola"],
};

const studentJson = JSON.stringify(student);

console.log(studentJson);

const studentObj = JSON.parse(studentJson);
console.log(studentObj);

//fetch

// fetch()
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// object keys,values

const keys = Object.keys(student);
console.log(keys);

console.log(Object.values(student));

//for of array like object
// for in object

//add or remove from an array

const products = [
  { name: "Laptop", price: 3200, brand: "lenovo", color: "Silver" },
  { name: "Phone", price: 7000, brand: "iPhone", color: "Golden" },
  { name: "Watch", price: 3000, brand: "Casio", color: "Yellow" },
  { name: "Sunglass", price: 300, brand: "Ribon", color: "Black" },
  { name: "Camera", price: 9000, brand: "Canon", color: "Gray" },
];
const newProduct = { name: "WebCam", price: 700, brand: "lal" };

//copy products array then add newProduct

const newProducts = [...products, newProduct];

//create a new array without specific item
//remove phone means create a new array without phone

const remaining = products.filter((product) => product.name != "Phone");
console.log(remaining);
