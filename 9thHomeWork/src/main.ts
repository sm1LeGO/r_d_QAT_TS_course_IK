import { Truck } from './models/truck';
import { Motorcycle } from './models/motorcycle';
import { ElectricCar } from './models/electric-car';
import { HybridCar } from './models/hybrid-car';
import { FuelStation } from './services/fuel-station';
import { ChargingStation } from './services/charging-station';
import { vehicleAction } from './services/vehicle-action';

const motorcycle = new Motorcycle('YAMAHA');
const truck = new Truck('VOLVO');
const electricCar = new ElectricCar('TESLA');
const hybridCar = new HybridCar('TOYOTA');

const fuelStation = new FuelStation();
const chargingStation = new ChargingStation();

const vehicles = [motorcycle, truck, electricCar, hybridCar];

vehicles.forEach(vehicle => {
    vehicleAction(vehicle);
});

// Refueling only fuel-powered vehicles
fuelStation.refuel(motorcycle, 10);
fuelStation.refuel(truck, 50);
fuelStation.refuel(hybridCar, 20);

// Charging only electric vehicles
chargingStation.charge(electricCar, 40);
chargingStation.charge(hybridCar, 30);

// Trying to move again
vehicles.forEach(vehicle => {
    console.log(vehicle.move());
});
