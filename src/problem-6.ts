{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  const updateProfile = (profile: Profile, value: any) => {
    return Object.assign(profile, value);
  };

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));
  console.log(updateProfile(myProfile, { name: "Murad" }));
  console.log(updateProfile(myProfile, { email: "murad@example.com" }));
}
