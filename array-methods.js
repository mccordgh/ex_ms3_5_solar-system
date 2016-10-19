var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var el = document.getElementById("planets");

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
planets.forEach(function(item) { el.innerHTML += item + "<br>"});
console.log ("planets:", planets);


// Use the map method to create a new array where the first letter of each planet is capitalized
var planetsCaps = planets.map(function(item) { return item.charAt(0).toUpperCase() + item.slice(1);	});
console.log("planetsCaps:", planetsCaps );


// Use the filter method to create a new array that contains planets with the letter 'e'
var planetsFilter = planetsCaps.filter(function(item){ 
	return item.search('e') > -1;
});
console.log ("planetsFilter:", planetsFilter);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
console.log ("words reduce:", words.reduce(function(total, item){ return total + " " +item; }) + ".");