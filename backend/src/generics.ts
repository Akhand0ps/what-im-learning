import { get } from "http";

type Input = number | string;


function firstEl(arr:Input[]){
    return arr[0];
}

const value = firstEl(["akhand","ps",1]);
console.log(value);

/* 
now here value can be either string or number, and if we try to use toUpperCase()
ts will throw an error bcz value can be either string or number.
AND morever we've sended mixed types in the array, which is not a good practice.

To fix this, we can use generics to make the function more flexible and type-safe.
generics enable us to create components that can work with any data type 
while still providing compile-time type safety.
*/

function identity<T>(arg: T){
    return arg;
}
let r1 = identity<string>("akhand");
let r2 = identity<number>(1);

r1.toUpperCase(); // works fine
// r2.toUpperCase(); //error

function getFirstEl<T>(arr:T[]){
    return arr[0];
}

interface User{
    name:string;
}

const el = getFirstEl<User>([{name:"ram"}]);
console.log(el.name); // works fine
const el2 = getFirstEl([1,2]);
console.log(el2);
