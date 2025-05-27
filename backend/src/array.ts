
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