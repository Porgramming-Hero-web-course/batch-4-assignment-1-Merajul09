"use strict";
{
    const updateProfile = (profile, value) => {
        return Object.assign(profile, value);
    };
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    updateProfile(myProfile, { age: 26 });
}
