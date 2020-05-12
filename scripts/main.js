var textBlock = document.createElement("INPUT");

textBlock.setAttribute("type", "text");



function calculate(){

console.log(document.getElementById('throttleValue').value)
var throttle = document.getElementById('throttleValue').value; 

if(throttle > 100){
	alert("Throttle value too high");
} else{
var speed = 0; 
var speed = (throttle*130); 

var fuel = throttle/2.5; 

document.getElementById("speedValue").value= speed; 
document.getElementById("fuelValue").value= fuel; 

console.log(speed);
console.log(fuel); 
}

}


