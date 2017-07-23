var a = prompt("Podaj liczbe od 0 do 30:");
var b = prompt("Podaj liczbe od 0 do 30:");
var value = (a * a) + (2 * a * b) - (b * b);
console.log("Wynik rownania wynosi: "+ value);
if (value > 0) {
	console.log("Wynik równania jest dodatni");
} else if (value < 0) {
	console.log("Wynik równania jest ujemny");
} else {
	console.log("Wynik równania równa się zero");
}