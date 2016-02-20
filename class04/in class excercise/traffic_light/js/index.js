$( document ).ready(function() {
    console.log( "ready!" );
	$('#stopButton').click(illuminateRed)
	$('#slowButton').click(illuminateYellow)
	$('#goButton').click(illuminateGreen)

		function illuminateRed() {
			clearLights();
			$('#stopLight').css("background-color", "red")
			console.log("red light")
		}
		function illuminateYellow() {
			clearLights();
			$('#slowLight').css("background-color", "yellow")
			console.log("yellow light")
		}
		function illuminateGreen() {
			clearLights();
			$('#goLight').css("backgroundColor", "green")
			console.log("green light")
		}
		function clearLights() {
			$('#stopLight').css("backgroundColor", "black");
			$('#slowLight').css("backgroundColor", "black");
			$('#goLight').css("backgroundColor", "black");
		}
});


// document.getElementById('stopButton').onclick = illuminateRed;

// document.getElementById('slowButton').onclick = illuminateYellow;

// document.getElementById('goButton').onclick = illuminateGreen;



// function illuminateRed() {
// 	clearLights();
//   document.getElementById('stopLight').style.backgroundColor = "red";
// }

// function illuminateYellow () {
// 	clearLights();
// 	document.getElementById('slowLight').style.backgroundColor = 'yellow';
// }

// function illuminateGreen () {
// 	clearLights();
// 	document.getElementById('goLight').style.backgroundColor = 'green';
// }

// function clearLights() {
//   document.getElementById('stopLight').style.backgroundColor = "black";
//   document.getElementById('slowLight').style.backgroundColor = "black";
//   document.getElementById('goLight').style.backgroundColor = "black";
// }