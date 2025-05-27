// let userName: string = "Akhand";
// console.log(`Hello, ${userName}`);

// //duiuhiufhiuh

// let a: number = 1;
// console.log(a);


// function greet(firstname:string){
//     console.log("hello "+ firstname);
// }


// greet("akhand");



// //function 


// const doSmth = (a: any): number => {
//     console.log("Doing something with", a);
//     return a + 1;
// } 


// console.log(doSmth(1));

//INTERFACE PADHGe

//without interface
// function isLegal(user:{
//     firstname: string,
//     lastname:string,
//     age: number
// }){

//     if(user.age > 18) return true;
//     return false;
// }


// const a  = isLegal({
//     firstname:"akhand",
//     lastname:"sharma",
//     age:2
// })

// console.log(a);


//WITH INTERFACE
// interface User{
//     firstname:string,
//     lastname: string,
//     age:number
//     email?:string
// }


// function isLegal(user: User){

//     if(user.age > 18) return true;
//     return false;
// }

// function greet(user:User){
//     console.log(`Hello ${user.firstname} ${user.lastname}`);
// }

// const a  = isLegal({
//     firstname:"akhand",
//     lastname:"sharma",
//     age:2
// })


// const b = greet({
//     firstname:"akhand",
//     lastname:"sharma",
//     age:2
// })

// console.log(a);



// interface Person{
//     name:string,
//     age:number,
//     greet(pharse:string):void;
// }

// class Employee implements Person{

//     name:string;
//     age:number;
    

//     constructor(n:string, a:number){

//         this.name = n;
//         this.age = a;
//     }

//     greet(pharse: string): void {
//         console.log(`${pharse}, ${this.name}`);
//     }
// }

// const e = new Employee("Akhand", 1);
// e.greet("hey");
// console.log(e.name);
// console.log(e.age);



