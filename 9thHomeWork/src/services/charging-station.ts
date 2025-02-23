import { IChargeable } from '../interfaces/index';

export class ChargingStation {
    public charge(client: IChargeable, amount: number): void {
        client.charge(amount);
        console.log(`Transport charged with ${amount}% battery.`);
    }
}
