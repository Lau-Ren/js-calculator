
var HTMLoutput = '<p>%data%</p>'
 
var answer
var buttValue
var values = []

$(document).ready(function () {
	$('button').click(function () {
		buttValue = $(this).attr('value');
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

	}

}

function clearAll(){
	values = []
	valOut = ""

	updateScreen()

}



function updateScreen (val) {

	values.push(val)
	valOut = values.join("")
					
	var formattedOutput = HTMLoutput.replace("%data%", valOut) || function(){};
	$(".output").html(formattedOutput)

	
}

function calculate(str){
	
	answer = eval(str)
	console.log(answer)
	valOut = ""
	clearAll()
	updateScreen(answer)

}

