let result=document.querySelector("input");
console.log(result.value)

let calculate=(number)=>{
result.value= result.value + number
};


let Result= ()=>{
    try{
        result.value=eval(result.value)
    }
catch(err){
    alert("Enter the valid Input")
}
};

let Clear=()=>{
result.value=""
};

let Delete=()=>{
    result.value=result.value.slice(0,-1)
};
