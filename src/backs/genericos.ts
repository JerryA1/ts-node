import {
  printObject,
  genericFunction,
  genericFunctionArrow,
} from "../generics/generics";
import { Hero } from "../interfaces";
// import { Hero } from "./interfaces/hero";

// printObject({ key: "value" });
// printObject("string");
// printObject(1);
// printObject(true);

// console.log(genericFunction(3.1416));
// console.log(genericFunction("hola mundo"));
// console.log(genericFunction(new Date()));

const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLever: 130,
};

console.log(genericFunctionArrow<Hero>(deadpool).realName);
