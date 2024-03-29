// -- any
// -- config
// type

function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}

sayHi("John");
// sayHi(5);

function calculateDiscount(price: number): number {
  const hasDiscount = true;

  if (hasDiscount) {
    return price;
    // return 'Discount Applied';
  }
  return price * 0.9;
}

const finalPrice = calculateDiscount(200);

// ```````````````````````````````````

const teamNames: string[] = ["hohn", "hane", "jim", "jill"];

function isNameInList(name: string): boolean {
  return teamNames.includes(name);
}

let nameToCheck = "jimi";

if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list`);
} else {
  console.log(`${nameToCheck} is not in the list`);
}

// OPTIONAL AND DEFAULT PARAMETERES IN TYPESCRIPT

function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);

///////``````````````

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return `${message}${total}`;
}

let result = sum("The total is : ", 1, 2, 3, 4, 5);
console.log(result);

///////``````````````

function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello, Typescript");

///////``````````````
