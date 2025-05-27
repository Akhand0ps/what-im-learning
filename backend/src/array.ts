
type arrtype = number[];

function MaxValue(arr: arrtype){

    let max =0;

    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    console.log("Max ", max);
}
MaxValue ([3,100,999]);
//given list of users , filter out the users who are legal( user>18)
interface User{
    firstname:string,
    lastname:string,
    age:number
}


function filterUsers(users: User[]){
    return users.filter(x => x.age > 18);
}

console.log(filterUsers([
    {
        firstname: "Akhand",
        lastname:"ps",
        age:2
    },

    {
        firstname: "test",
        lastname:"ps",
        age:19
    }
    
]));
