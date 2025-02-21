import { IVehicle } from '../interface/index';

export function vehicleAction(vehicle: IVehicle): void {
    console.log(vehicle.move());
    vehicle.accelerate();
}
