{
    var Car = /** @class */ (function () {
        function Car(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        Car.prototype.getCarAge = function () {
            var d = new Date();
            var currentYear = d.getFullYear();
            var totalYear = currentYear - this.year;
            return "".concat(totalYear, " (assuming current year is ").concat(currentYear, ")");
        };
        return Car;
    }());
    var car = new Car("Honda", "Civic", 2018);
    car.getCarAge();
}
