export interface IVehicle {
    move(): string;
    accelerate(): void;
}

export interface IFuelable {
    refuel(amount: number): void;
    getFuelLevel(): number;
}
