{
    var updateProfile = function (profile, value) {
        return Object.assign(profile, value);
    };
    var myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    updateProfile(myProfile, { age: 26 });
}
