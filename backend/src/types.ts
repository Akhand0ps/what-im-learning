//types

//print the 'id' of a user , whicn can be a number or string

type GreetArg = number | string;
function Greet(id:GreetArg){
    console.log(id)
}
Greet(1);
Greet("1");
