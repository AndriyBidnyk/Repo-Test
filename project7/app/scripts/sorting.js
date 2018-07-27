var arrayToSort = [];
var threshold =50;
var maximumSize = 100;

//the number of elements to place in the array
var numElements = Math.floor(Math.random() * threshold);


//display the array when the document loads
$(document).ready(function() {

	loop("myList");

});

//execute the bubble sort algorithm

$("#bubbleSort").click(function() {

	//current time on start
	$("#currentTime1").html(new Date());
	
	

	

	//c//TODO write bubble sort hereurrent time once complete
	function bubbleSort(arrayToSort)
	{
		var swapped;
		do {
			//Does not allow swap at beginning
			swapped = false;
		    //creates a for loop with i
			for (var i = 0; i < arrayToSort.length - 1; i++) {
				//gives possibility for all lines in final bracket to work
				if (arrayToSort[i] > arrayToSort[i + 1]) {
					//Gives a variable that assists keeping all of the originals numbers and assists placing sorted numbers
					var temp = arrayToSort[i];
					//Allows sortation of original numbers
					arrayToSort[i] = arrayToSort[i + 1];
					//allows Result to be more than 1
					arrayToSort[i + 1] = temp;
					//enables while(swapped)
					swapped = true;
				}
			}

		//prevents the do { from going into an infinte loop
		} while(swapped);

	}
	//sorts the array
	bubbleSort(arrayToSort);
	//Prints into the console
	console.log(arrayToSort);
	//Prints the sorted array
	$("#bubbleSortResult").html(loop("bubbleSortResult"));


	$("#endTime1").html(new Date());


});

//execute the insertion sort algorithm
$("#insertionSort").click(function() {

	//current time on start
	$("#currentTime2").html(new Date());

	$("#insertionSortResult").html(loop("insertionSortResult"));
	//write insertion sort here

	//current time once complete
	$("#endTime2").html(new Date());

});

//execute the selection sort algorithm
$("#selectionSort").click(function() {

	//current time on start
	$("#currentTime3").html(new Date());

	$("#selectionSortResult").html(loop("selectionSortResult"));
	
	//write selection sort here

	//current time once complete
	$("#endTime3").html(new Date());

});

$("#bruteForce").click(function(){

	

	var valueToSearch = $("#bruteForceValue").val();
	//TODO write brute force algorithm
//Sets variable tf to true
var tf = "true"
//For-loop to see if the brute force value doesn't have anything related to the array
for (var i = 0;valueToSearch != arrayToSort[i]; i++) {
//Checks to see if i reached to the end of the array, if so, tr would change from true to false, and break stops the infinite loop
	if ( i == arrayToSort.length) {
		tf = "false";
		break;
	}
}



	//writes the answer down on the website with whatever tf is equal to.
	$("#bruteForceResult").html("The result is " + tf)



});

//Requires list to be sorted

$("#binarySearch").click(function(){
	var valueToSearch = $("#binarySearchValue").val();
	
	var tf = "false";

	 var guess;
     var min = 0;
     //1 was subtracted from arrayToSort because there's a possibility of 1 being added in line 146 bringing it outside of the array
     var max = arrayToSort.length - 1;	

     //The lines 135-151 would only function if the minimum was less than the Maximum
  	  while(min <= max)
  	  {
 	   	   //Begins binary searching
 	   	   	guess = Math.floor((min + max) /2);
 	   	   	//Makes sure that the valueToSearch has something equal to the array, and changes tf to true if it does
			if(arrayToSort[guess] == valueToSearch)
			{
				tf = "true";
				break;
			}
			else if(arrayToSort[guess] < valueToSearch)
			{
		   	 min = guess + 1;
			}
			else
			{
		  	  max = guess - 1;	
			}
       }
	
	console.log(tf);
	//Show true/false
	$("#binarySearchResult").html("The result is " + tf)



});


function loop(myId) {
	$("#" + myId).append("[");

	if(arrayToSort.length == 0)
	{
		//populate the array with random numbers
		for(var i = 0; i < numElements; i = i + 1)
		{
			var num = Math.floor(Math.random() * maximumSize);
			arrayToSort.push(num);

			if(i == numElements - 1)
				$("#" + myId).append(num);
			else
				$("#" + myId).append(num + ", ");
		}
	}
	else
	{
		for(var i = 0; i < numElements; i = i + 1)
		{
			if(i == numElements - 1)
				$("#" + myId).append(arrayToSort[i]);
			else
				$("#" + myId).append(arrayToSort[i] + ", ");
		}
	}
	$("#" + myId).append("]");
	
}