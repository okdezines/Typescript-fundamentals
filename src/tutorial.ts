console.log("typescript tutorial");

// Describing typscript types

let awesomeName: string = "shakeAndBake";
awesomeName = "something";
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

let amount: number = 20;
amount = 12 - 1;
// amount = 'pant'

let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = 'shakeAndBake';

let greetings: string = "Hello, Typescript!";
greetings = greetings.toUpperCase();

let age: number = 25;
age = age - 15;

let isAdult: boolean = age >= 18;
isAdult = !isAdult;
console.log(age);
console.log(isAdult);

// greeting = 10;
// age = "thirty";
// isAdult = "yes";

console.log(isAdult, greetings, age);

// UNION TYPE

let tax: number | string = 10;
tax = 100;
tax = "$10";

let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "error";
requestStatus = "pending";
requestStatus = "success";

// TYPE CHECKING
// be careful when using 'any' coz it can cause wild-fire
let notSure: any = 4;
(notSure = "maybe a string instead"), (notSure = false);

//PRACTICAL USE OF TYPE

const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "Brave New World") {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook?.length);
console.log(foundBook);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let discount: number | string = 20;
discount = "20%";
// discount = true;

let orderStatus: "shipped" | "delivered" | "processing" = "processing";
orderStatus;

console.log(orderStatus);

//ARRAY TYPES CHALLENGE

let prices: number[] = [100, 75, 43, 34];
//prices.push('hello')
console.log(prices);

let fruit: string[] = ["apple", "orange"];

//let randomValues: [] = ['hello'];

let emptyValues: number[] = [];

let names = ["peter", "susan"];
let array: (string | boolean)[] = ["apple", true, "orange", false];

let temperatures: number[] = [20, 25, 30];

// temperature.push('hot')

let mixedArray: (number | string)[] = [1, "two", 3];

let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };

car.brand = "ford";
let car1: { brand: string; year: number } = { brand: "mazda", year: 2023 };

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 20 };
let notebook = { title: "notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

let bike: { brand: string; year: number } = { brand: "yamaha", year: 2020 };
//bike.year ='old'

let laptop: { brand: string; year: number } = { brand: "toshiba", year: 2029 };
//let laptop2: { brand: string; year: number } = { brand: "toshiba" };

let product1 = { title: "shirt", price: 20 };
let product2 = { title: "shirt" };
let products: { title: string; price?: number }[] = [product1, product2];

//products.push({ title: "shoes", price: "expensive" });
