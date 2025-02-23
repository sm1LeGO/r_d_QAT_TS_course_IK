import { IFuelable } from '../interfaces/index';

export class FuelStation {
    public refuel(client: IFuelable, amount: number): void {
        client.refuel(amount);
        console.log(`Transport refueled with ${amount}L.`);
    }
}
