"use strict";
{
    //
    const getProperty = (person, name) => {
        return person[name];
    };
    const person = { name: "Alice", age: 30 };
    getProperty(person, "name");
    //
}
