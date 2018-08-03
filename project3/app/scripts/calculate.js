function calc() {
	//This two variables are the intergers that you typed in the first two text fields
	var v1 = parseInt(document.querySelector("#value1").value);
	var v2 = parseInt(document.querySelector("#value2").value);
	//Takes the values from the drop down list.
	var op = document.querySelector("#operator").value;
	//Creates a variable for the checkbox
	var re = document.querySelector("#reuse").checked;
	//Used two do the calculations
	var calculate;
	//Used to display calculation
	var equation;

	//Creates different calculations depending on what is selected in the Operator drop down list
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
	//Depending on wether the checkbox is checked, it would type your answer in the v1 text field and clear v2, or it would make v1 & v2 blank
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
	//Whatever the two variables below are equal to, the will now be shown in the HTML
	document.querySelector("#equations").innerHTML = equation;
	document.querySelector("#results").innerHTML = calculate;
	console.log(calculate);
	
	//This code is used for recording all results and then is placed in order into a list in the HTML
	var ol = $("#list");
	var result = document.getElementById("results");
	var item = document.createElement("item");
  	item.innerHTML = "<b>Result" + " " + (ol.children().length + 1) + ":</b>" + calculate + " ";
	ol.append(item);	
}

// This function takes what you typed in the Search text field and places it in a for-loop to varify if your value is there
$("#bruteForce").click(function(){

	var valueToSearch = $("#bruteForceValue").val();
	var ol = $("#list")[0].innerText.split(" ");
	var tf;

	for (var i = 0; i < ol.length - 1; i++) {

		//If statement is now checking to see if what you typed in the text field matches what is in the list. If they're equal, it would respond with what result the number is in. If they're not, it responds with false.
		if (valueToSearch == ol[i].split(":")[1]) {
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