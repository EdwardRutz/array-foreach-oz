console.log("array-forEach");

let oz = [
{
	name: "Dorothy",
	description: "Lost and confused",
	desires: "Desires to go home."
},
{
	name: "Lion",
	description: "Fraidy cat",
	desires: "Wants to be brave."
},
{
	name: "Scarecrow",
	description: "Dumb as straw.",
	desires: "Wants to be smart"
},
{
	name: "Tinman",
	description: "Cold and empty inside",
	desires: "Wants to have a <3"
},
{
	name: "Toto",
	description: "Little black dog.",
	desires: "Wants a scooby snack."
}
];

console.log("oz array", oz);

oz.forEach (function(item){
	document.getElementById("character").innerHTML += `<li><h2>${item.name}</h2></li> <ul><li>${item.description}</li></ul> <ul><li>${item.desires}</ul></li>`
});








