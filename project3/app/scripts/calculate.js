function calc() {
	var v1 = parseInt(document.querySelector("#value1").value);
	var v2 = parseInt(document.querySelector("#value2").value);
	var op = document.querySelector("#operator").value;
	var re = document.querySelector("#reuse").checked;
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

	if(re == true)
	{
		document.querySelector("#value1").value = calculate;
		document.querySelector("#value2").value = "";
	}
	else
	{
		document.querySelector("#value1").value = "";
		document.querySelector("#value2").value = "";
	}
	


	document.querySelector("#equations").innerHTML = equation;
	document.querySelector("#results").innerHTML = calculate;
	console.log(calculate);
	var ol = document.getElementById("list");
	var result = document.getElementById("results");
  	var li = document.createElement("li");
  	
  	for (var i = 1; i < ol.length; i++) {
  		ol[i]
  	}

  	li.innerHTML = "<b>Result " + i + ":</b> " + calculate; 

  	ol.appendChild(li);

}

$("#bruteForce").click(function() {
	debugger;
	var nlist = document.getElementById("#list");
	var valueToSearch = $("#bruteForceValue").val();

var tf = "Result"
for (var i = 0;valueToSearch != nlist[i]; i++) {
	if ( i == nlist.length) {
		tf = "No such result";
		break;
	}
}
});


function clear()  {
	document.getElementById("#value1").innerHTML = "";
	document.getElementById("#value2").innerHTML = "";
	document.getElementById("#results").innerHTML = "";
	document.getElementById("#equations").innerHTML = "";
}