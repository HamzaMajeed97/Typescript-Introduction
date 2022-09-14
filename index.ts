console.log("HELLO WORLD");

// TYPE INFERENCE

let nome: string = "JOHN DOE";

let numero: number = 50;

let booleano: boolean = false;

// UNION TYPE

type StringOrNumber = string | number;

const mixedAddition = (par1: StringOrNumber, par2: StringOrNumber) => {
  if (typeof par1 === "number" && typeof par2 === "number") {
    return par1 + par2;
  } else {
    return "è necessario fornire due valori numerici :(";
  }
};

// TUPLE

const MyMixedTuple: [string, number, boolean] = ["Mario Rossi", 100, false];

console.log("TUPLE LENGTH", MyMixedTuple.length);

interface Car {
  company: string;
  productionYear: string;
  typeOfFuel: string;
  country: string;
}

const fiatPunto: Car = {
  company: "Fiat",
  productionYear: "2020",
  typeOfFuel: "Diesel",
  country: "Italy",
};

// ANY EXAMPLE

let hello: any = "Ciao";
hello = 23;
hello = true;
