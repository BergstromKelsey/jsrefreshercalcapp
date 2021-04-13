const button= document.querySelector("button");
const output=document.querySelector(".output")
button.innerHTML="Calculate Tip"




button.addEventListener("click", function(){
    const cost= document.querySelector("input")
    let tip=(cost.value * 0.20).toFixed(2);
 
if (isNaN(tip)){
    output.innerHTML= `Please enter a numerical bill amount`;
}
else{
    output.innerHTML= `<h1> You should tip $ ${tip} on $ ${cost.value} </h1>`;
    }

})
