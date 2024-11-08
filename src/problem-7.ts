{
  class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    getCarAge(): string {
      const d = new Date();
      const currentYear = d.getFullYear();
      const totalYear = currentYear - this.year;
      return `${totalYear} (assuming current year is ${currentYear})`;
    }
  }
  const car = new Car("Honda", "Civic", 2018);
  car.getCarAge();
}
