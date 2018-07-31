function calc() {
	var v1 = parseInt(document.querySelector("#value1").value);
	var v2 = parseInt(document.querySelector("#value2").value);
	var op = document.querySelector("#operator").value;
	var calculate;
	var equation;

	if (op == "add") {
		calculate = v1 + v2;
		equation = v1 + "+" + v2 +  " =";
	
	} else if (op == "sub") {
		calculate = v1 - v2;
		equation = v1 + "-" + v2 +  " =";
	
	} else if (op == "mul") {
		calculate = v1 * v2;
		equation = v1 + "*" + v2 +  " =";
	
	} else if (op == "div") {
		calculate = v1 / v2;
		equation = v1 + "/" + v2 +  " =";
	
	} else if (op == "exp") {
		calculate = Math.pow(v1, v2);
		equation = v1 + "^" + v2 +  " =";
	
	} 
document.querySelector("#equations").innerHTML = equation;
document.querySelector("#results").innerHTML = calculate;
console.log(calculate);
 
}

function clear()  {
	document.getElementById("#value1").innerHTML = "";
	document.getElementById("#value2").innerHTML = "";
	document.getElementById("#results").innerHTML = "";
	document.getElementById("#equations").innerHTML = "";
}