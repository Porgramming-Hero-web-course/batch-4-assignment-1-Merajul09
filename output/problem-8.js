{
    var validateKeys = function (obj, keys) {
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (obj[key] !== undefined) {
                return true;
            }
        }
        return false;
    };
    var person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));
}
