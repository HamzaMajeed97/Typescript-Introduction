console.log("HELLO WORLD");
// TYPE INFERENCE
var nome = "JOHN DOE";
var numero = 50;
var booleano = false;
var mixedAddition = function (par1, par2) {
    if (typeof par1 === "number" && typeof par2 === "number") {
        return par1 + par2;
    }
    else {
        return "è necessario fornire due valori numerici :(";
    }
};
// TUPLE
var MyMixedTuple = ["Mario Rossi", 100, false];
console.log("TUPLE LENGTH", MyMixedTuple.length);
var fiatPunto = {
    company: "Fiat",
    productionYear: "2020",
    typeOfFuel: "Diesel",
    country: "Italy"
};
// ANY EXAMPLE
var hello = "Ciao";
hello = 23;
hello = true;
