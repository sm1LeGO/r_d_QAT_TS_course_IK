export abstract class Vehicle {
    protected speed = 90;
    public constructor(protected name: string) {}

    public abstract move(): string;
    public abstract accelerate(): void;
}
