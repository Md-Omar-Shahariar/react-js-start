//'almas',5,true,{},[] truthy
//"",0,null,undefind falsy

const myVar = 0;
if (!myVar) {
  console.log("truthy");
} else {
  console.log("falsy");
}

//ternary

const money = 100;

let food = money > 80 ? "biriyani" : "cha biscute";

console.log(food);

const number1 = 43;
console.log(number1);
//converting  to string
const numstr = number1 + "";
console.log(numstr);

//converting to number
const num = +numstr;
console.log(num);

const isActive = true;
const sh = () => console.log("show");
const h = () => console.log("hide");
isActive ? sh() : h();

//left true hoile right
isActive && sh();
//left false hoile right
isActive || h();
