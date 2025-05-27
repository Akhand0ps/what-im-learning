/* 

Enums(enumerations) in TS are a feature that allows you to define a set of named ConstantSourceNode

the concept behind an enum is to create human readble way to represnt a set of constant values, which might be represented as numbers or strings 

ques: create a function a game which perform an action based on the user has pressed the UP arrow key , DOWN , LEFT and Right
yes we can do this without even using enums, but enums will provide the compile-time support

//ENUM SE DEKHA CODE CLENER HAI, ENUMS SE CODE MEIN READABILITY BHI AATI HAI
*/

enum Direction{
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}

function doSomething(KeyPressed: Direction){

    if(KeyPressed === Direction.Up){
        
    }
    
}

doSomething(Direction.Up);
doSomething(Direction.Down);
console.log(Direction.Up); // 0
console.log(Direction.Down); // 1 


/* 
    basic USECASE IN EXPRESS

*/
const express = require("express");
const app = express();


enum ResponseCode{
    Success = 200,
    NotFound = 404,
    Error = 500
}
app.get("/",(req,res)=>{

    if(!req.query.userId){
        res.status(ResponseCode.NotFound).json("User ID is required");
    }

})

