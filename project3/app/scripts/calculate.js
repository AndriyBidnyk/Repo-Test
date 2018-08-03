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
	var ol = $("#list");
	var result = document.getElementById("results");

	var item = document.createElement("item");
  	
  	item.innerHTML = "<b>Result" + " " + (ol.children().length + 1) + ":</b>" + calculate + " ";

	ol.append(item);
	
}

$("#bruteForce").click(function(){

	var valueToSearch = $("#bruteForceValue").val();
	
	//var ol = $("#list");
	var ol = $("#list")[0].innerText.split(" ");
	debugger;
	var tf;

	for (var i = 0; i < ol.length - 1; i++) {

		if (valueToSearch == ol[i].split(":")[1]) {
		//if (valueToSearch == ol[0].innerText.split(" ")[i].split(":")[1]) {
			tf = i;
			break;
		}
	}

	if(tf != undefined)
	{
		$("#show").val("Result : " + (tf + 1));
	}
	else
	{
		$("#show").val(false);	
	}
});