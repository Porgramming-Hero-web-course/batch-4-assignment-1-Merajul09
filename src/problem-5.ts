{
  //
  const getProperty = <Obj, Str extends keyof Obj>(person: Obj, name: Str) => {
    return person[name];
  };
  const person = { name: "Alice", age: 30 };
  getProperty(person, "name");
  //
}
