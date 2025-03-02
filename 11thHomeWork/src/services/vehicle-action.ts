import { Vehicle } from '../models/vehicle';

export function vehicleAction(vehicle: Vehicle): void {
    console.log(vehicle.move());

    vehicle.accelerate();
    console.log(vehicle.move());
}
