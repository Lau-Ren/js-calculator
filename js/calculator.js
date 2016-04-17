
var HTMLoutput = '<p>%data%</p>'
 


var answer
var buttValue
var remValues = []
var theOp
var values = []
var value1
var value2


$(document).ready(function () {
	 $('button').click(function () {
	 	 buttValue = $(this).attr('value');
	 	 // console.log(buttValue)
     nextStep(buttValue)
	 	 });

});

function nextStep(val){
		if (val === "Cl" ) { 
	 	 	clearAll()
	 	 } else if (val === "=") {
	 	 	calculate(valOut)

	 	 } else {
		updateScreen(val)
		// console.log(val)

		}

}

function clearAll(){
values = []
valOut = ""

updateScreen()

}


// function assignValues(val){

// 	if(isNaN(val) === false){
// 		updateScreen(val)
// 		values = values.push(val)
// 		console.log(val)
// 	} else if  (val === "Cl" ) {

// 		val = ""
// 		updateScreen(val)
// 		console.log(val)
// 	}

// }

function updateScreen (val) {

 // if (isNaN(val) === false) {
	values.push(val)
	valOut = values.join("")
					console.log(values)
					console.log(valOut)
	var formattedOutput = HTMLoutput.replace("%data%", valOut) || function(){};
	$(".output").html(formattedOutput)

	
	 // } else if (isNaN(val) === true) {

 // 	 theOp = val
 // 	 var formattedOutput = HTMLoutput.replace("%data%", theOp) || function(){};
	// $(".output").html(formattedOutput)
	// values = []

 // }

}

function calculate(str){
	
	answer = eval(str)

console.log(answer)
valOut = ""
clearAll()
	updateScreen(answer)

}

