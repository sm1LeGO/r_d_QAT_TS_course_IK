export abstract class Vehicle {
    protected speed = 90;
    protected vehicleType: string;

    public constructor(protected name: string, vehicleType: string) {
        this.vehicleType = vehicleType;
    }

    public abstract getAcceleration(): number;

    public accelerate(): void {
        this.speed += this.getAcceleration();
        console.log(`${this.vehicleType} ${this.name} accelerates to ${this.speed} km/h.`);
    }

    public move(): string {
        return `${this.vehicleType} ${this.name} moves at ${this.speed} km/h.`;
    }
}
