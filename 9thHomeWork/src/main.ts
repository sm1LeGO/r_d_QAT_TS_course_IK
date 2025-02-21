import { Car } from './models/car';
import { Truck } from './models/truck';
import { Motorcycle } from './models/motorcycle';
import { vehicleAction } from './service/vehicle-action';

const car = new Car('TESLA');
const truck = new Truck('VOLVO');
const motorcycle = new Motorcycle('YAMAHA');

const vehicles = [car, truck, motorcycle];

vehicles.forEach(vehicle => {
    vehicleAction(vehicle);
});

motorcycle.refuel(20);
truck.refuel(50);

vehicles.forEach(vehicle => {
    console.log(vehicle.move());
});
