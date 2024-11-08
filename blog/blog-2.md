## How to handle asynchronous operations using async/await over callback/promise TypeScript.

### Async/Await is a much simpler and clearer way to handle asynchronous operations in TypeScript, reducing the complexities of callbacks and promises.Below are explanations and examples of these methods:

#### Callback method:

Callback methods add complexity when performing many asynchronous operations.Using consecutive callback functions in code quickly becomes complicated, known as callback hell.
`Example:`

```typescript
const addData = (callback: (data: string) => void) => {
  setTimeout(() => {
    callback("Data added from server");
  }, 1000);
};

addData((data) => {
  console.log(data);
});
```

Here the addData function takes a callback parameter which adds the data after 1 second.

#### Promise method

Writing asynchronous code using Promises becomes much easier. It uses then and catch blocks to perform sequential actions.
`Example:`

```typescript
const addData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data added from server");
    }, 1000);
  });
};

addData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

Here addData returns a Promise, which passes the data to the then block. However, using too many promises can make the code complex.

#### Async/Await method

Async/Await is based on Promise, but it's easier to write code and looks like a synchronous method. Declaring a function with the async keyword makes it asynchronous, and using the await keyword we can wait for a Promise to complete.
`Example:`

```typescript
const addData = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data added from server");
    }, 1000);
  });
};

const showData = async () => {
  try {
    const data = await addData();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

showData();
```

Here the showData function is declared as async, and waits for addData's Promise to complete with await. This makes the code much simpler and easier to read.

#### Advantages of Async/Await

- Makes the code look simple and synchronous.
- Errors can be handled easily with a Try-Catch block.
- Code can be written without the complexity of callbacks and promises.

#### Disadvantages of Callbacks

- **`Callback Hell`** : When multiple asynchronous operations are nested within each other, the code structure becomes deeply nested and harder to read and maintain. This is known as "callback hell."
  This can lead to messy code that is difficult to debug, understand, and maintain.
- **`Error Handling `** : Handling errors with callbacks is not as clean as with promises or async/await. If any callback function encounters an error, managing that error gracefully across multiple nested callbacks becomes complex.

#### Disadvantages of Promises

- **`Chaining Complexity`** : Although promises are more readable than callbacks, chaining too many then statements can still lead to complex code, especially if each step relies on data from the previous one.
- **`Error Handling `** : While promises have a catch method, managing errors within long promise chains is still less straightforward. If errors occur in different parts of the chain, it can be challenging to handle them all appropriately without cluttering the code with multiple catch statements.
