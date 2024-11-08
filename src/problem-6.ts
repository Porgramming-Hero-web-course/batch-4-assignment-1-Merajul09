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
  updateProfile(myProfile, { age: 26 });
}
