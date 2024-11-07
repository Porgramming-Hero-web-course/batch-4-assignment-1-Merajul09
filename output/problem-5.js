{
    var getProperty = function (person, name) {
        return person[name];
    };
    var person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
}
