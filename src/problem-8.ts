{
  const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
    for (let key of keys) {
      if (obj[key] !== undefined) {
        return true;
      }
    }
    return false;
  };
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));
}
