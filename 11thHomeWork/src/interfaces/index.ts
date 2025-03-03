export interface IFuelable {
    refuel(amount: number): void;
    getFuelLevel(): number;
}

export interface IChargeable {
    charge(amount: number): void;
    getBatteryLevel(): number;
}
