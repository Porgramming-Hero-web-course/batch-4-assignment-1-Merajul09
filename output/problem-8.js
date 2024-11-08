"use strict";
{
    const validateKeys = (obj, keys) => {
        for (let key of keys) {
            if (obj[key] !== undefined) {
                return true;
            }
        }
        return false;
    };
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    validateKeys(person, ["name", "age"]);
}
