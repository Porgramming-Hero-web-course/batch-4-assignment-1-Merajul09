type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Person = Name & Age;

const person: Person = {
  name: "Murad", // ok, because it's assign
  age: 28, // ok, because it's assign
  // isStudent:true // error, because it's not assign
};
