jQuery( document ).ready(function() {
    // console.log( "ready!" );
    jQuery('#grayButton').click(switchToGrey)
    jQuery('#whiteButton').click(switchToWhite)

    function switchToGrey() {
    	jQuery('body').css("background-color", "grey");
    	jQuery('body').css("color", "white");
    	console.log("I'm grey!")
    }
    function switchToWhite() {
		jQuery('body').css("background-color", "white");
		jQuery('body').css("color", "black")
		console.log("I'm white!")
	}
});

// // On click white button set colors white
// document.getElementById('grayButton').onclick = switchToGrey;

// // On click grey butten set colors grey
// document.getElementById('whiteButton').onclick = switchToWhite;


// // function to make colors white
// function switchToWhite () {
// 	// change background
// 	document.body.style.backgroundColor = "white";
// 	// change text colors
// 	document.body.style.color = "black";
// }

// //function to make colors grey
// function switchToGrey () {
// 	// change background
// 	document.body.style.backgroundColor = "grey";
// 	// change text colors
// 	document.body.style.color = "white";
// }