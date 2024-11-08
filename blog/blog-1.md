## The significance of union and intersection types in Typescript.

### Union and Intersection types in TypeScript adds more accuracy and protection to coding.Below are their explanations and examples:

1. #### Union Types
   When a function or variable can accept multiple different types of data and you want to depend on one.The union type refers to the "or" relationship. For creating union type | symbols are used.

```typescript
const showValue = (value: string | number): void => {
  console.log("Value:", value);
};

showValue("Hello"); // ok, because it's string
showValue(123); // ok, because it's number
showValue(true); // error, because it's boolean
```

Here the value variable can be `string` or `number`, but not any other type.This Union type declaration orders TypeScript that only one of these two types can exist.

2. #### Intersection Types
   When a function or variable can accept multiple different types of data And all qualities must be maintained together.The Intersection type refers to the "and" relationship. For creating union type & symbols are used.

```typescript
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
```

Here the value variable can be name property `string` and age property `number`, but not any other type,Because only two property in assign.This Intersection type declaration orders TypeScript that all of these two types can exist.Otherwise error is shown.
