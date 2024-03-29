// function processDat(
//   input: string | number,
//   config: { reverse: boolean } = { reverse: false }
// ): string | number {
//   if (typeof input === "number") {
//     return input * input;
//   } else {
//     return config.reverse
//       ? input.toUpperCase().split("").reverse().join("")
//       : input.toUpperCase();
//   }
// }
// console.log(10);
// console.log("Hello");
// console.log("Hello", { reverse: true });

type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: "john",
  isActive: true,
};

const susan: User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()}!!!`);
  return user;
}

createUser(john);

type StringOrNumber = string | number;

let value: StringOrNumber;
value = "hello";
value = 123;

// setting up alias

type Theme = "light" | "dark";

let theme: Theme;
theme = "dark";
theme = "light";

function setTheme(t: Theme) {
  theme = t;
}

setTheme("dark");

// const john: { id: number; name: string; isActive: boolean } = {
//   id: 1,
//   name: "john",
//   isActive: true,
// };
// const susan: { id: number; name: string; isActive: boolean } = {
//   id: 1,
//   name: "susan",
//   isActive: false,
// };

// function createUser(user: { id: number; name: string; isActive: boolean }): {
//     id: number; name: string; isActive: boolean;
// }

//   console.log(`Heller there ${user.name.toUpperCase()}!!!`);
// }

// createUser( )

//// Alias

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };
type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is a manager in the ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department`
    );
  }
}

const alice: Employee = { id: 1, name: "alice", department: "Sales" };
const steve: Employee = { id: 1, name: "alice", department: "HR" };

const bob: Manager = { id: 1, name: "bobo", employees: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(bob);

//invoke

//Intersecting with type

type Book = { id: number; name: string; price: number };

const book1: Book = {
  id: 1,
  name: "haw to cook a dragon",
  price: 15,
};
const book2: Book = {
  id: 2,
  name: "the secret life of unicorn",
  price: 15,
};
const discountedBook: Book & { discount: number } = {
  id: 3,
  name: "'Gnomes vs. Goblins: The Ultimate Guide'",
  price: 25,
  discount: 0.15,
};

//// interface type
