const products = [
  { name: "Laptop", price: 3200, brand: "lenovo", color: "Silver" },
  { name: "Phone", price: 7000, brand: "iPhone", color: "Golden" },
  { name: "Watch", price: 3000, brand: "Casio", color: "Yellow" },
  { name: "Sunglass", price: 300, brand: "Ribon", color: "Black" },
  { name: "Camera", price: 9000, brand: "Canon", color: "Gray" },
];
//map returns an array
const brands = products.map((product) => product.brand);
console.log(brands);
const price = products.map((price) => price.price);
console.log(price);

//no return from foreach
products.forEach((product) => console.log(product.color));

// filter returns the products that fulfills condition

const cheap = products.filter((product) => product.price < 5000);
console.log(cheap);

const specific_name = products.filter((product) => product.name.includes("n"));
console.log(specific_name);
//find returns the first matching condition
const specific_name1 = products.find((product) => product.name.includes("n"));
console.log(specific_name1);
