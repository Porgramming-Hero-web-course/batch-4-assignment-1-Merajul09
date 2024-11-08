# batch4-assignment-1

## Problem-1

Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

```typescript
const sumArray = (numbers: number[]): number => {
  const result = numbers.reduce((previous, current) => previous + current, 0);

  return result;
};

// Sample Input:
sumArray([1, 2, 3, 4, 5]);

// Sample Output:
15;
```

## Problem-2

Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

```typescript
const removeDuplicates = (numbers: number[]): number[] => {
  const result = numbers.filter((num, index) => numbers.indexOf(num) === index);
  return result.sort((a, b) => a - b);
};

// Sample Input:
removeDuplicates([1, 2, 2, 3, 4, 4, 5])[
  // Sample Output:
  (1, 2, 3, 4, 5)
];
```

## Problem-3

Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

```typescript
const countWordOccurrences = (paragraph: string, check: string) => {
  const result = paragraph
    .toLowerCase()
    .replace(/[$&+,:;=?@#|'<>.-^*()%!]/g, " ")
    .split(" ");
  const res = result.filter((s) => s === check);
  return res.length;
};

// Sample Input:
countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
// Sample Output:
2;
```

## Problem-4

Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

```typescript
type CircleAreaRequire = {
  shape: "circle";
  radius: number;
};
type RectangleAreaRequire = {
  shape: "rectangle";
  width: number;
  height: number;
};
type All = CircleAreaRequire | RectangleAreaRequire;

const calculateShapeArea = (area: All) => {
  if (area.shape === "circle") {
    const result = 3.1416 * (area.radius * area.radius);
    return result.toFixed(2);
  } else if (area.shape === "rectangle") {
    return area.width * area.height;
  }
};

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// Sample Output 2:
24;
```

## Problem-5

Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

```typescript
const getProperty = <Obj, Str extends keyof Obj>(person: Obj, name: Str) => {
  return person[name];
};

// Sample Input:
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));

// Sample Output:
Alice;
```

## Problem-6

Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

```typescript
interface Profile {
    name: string;
    age: number;
    email: string;
  }
  const updateProfile = (profile: Profile, value: any) => {
    return Object.assign(profile, value);
  };

 // Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));

// Sample Output:
{
  name: "Alice",
  age: 26,
  email: "alice@example.com"
}
```

## Problem-7

Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

```typescript
class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    getCarAge(): string {
      const d = new Date();
      const currentYear = d.getFullYear();
      const totalYear = currentYear - this.year;
      return `${totalYear} (assuming current year is ${currentYear})`;
    }
  }

  // Sample Input 1:
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();

// Sample Output 1:
6 (assuming current year is 2024)
```

## Problem-8

Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

```typescript
const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
  for (let key of keys) {
    if (obj[key] !== undefined) {
      return true;
    }
  }
  return false;
};

// Sample Input:
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));

// Sample Output:
true;
```

## Blog

[[Blog-1](https://github.com/Porgramming-Hero-web-course/batch-4-assignment-1-Merajul09/blob/main/blog/blog-1.md)]

[[Blog-2](https://github.com/Porgramming-Hero-web-course/batch-4-assignment-1-Merajul09/blob/main/blog/blog-2.md)]
