class Car {
    public make: string;
    public model: string;
    public year: number;
    public constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    public displayInfo(): void {
        console.log(`Car Info: ${this.year} ${this.make} ${this.model}`);
    }
    public updateModel(newModel: string): void {
        this.model = newModel;
        console.log(`The car model has been updated to: ${this.model}`);
    }
    public updateYear(newYear: number): void {
        this.year = newYear;
        console.log(`The car year has been updated to: ${this.year}`);
    }
}

const myCar = new Car('Volvo', 'S60', 2015);

myCar.displayInfo();
myCar.updateModel('XC60');
myCar.updateYear(2020);
myCar.displayInfo();
