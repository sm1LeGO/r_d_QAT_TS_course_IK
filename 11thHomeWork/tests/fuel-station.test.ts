import { describe, it, expect, vi, beforeEach } from 'vitest';
import { FuelStation } from '../src/services/fuel-station';
import { Truck } from '../src/models/truck';
import { Motorcycle } from '../src/models/motorcycle';

const mockRefuel = vi.fn();
beforeEach(() => {
    vi.clearAllMocks();
});

describe('FuelStation', () => {
    it('should refuel a fuel-powered vehicle', () => {
        const motorcycle = new Motorcycle('YAMAHA');
        const fuelStation = new FuelStation();

        motorcycle.refuel = mockRefuel;

        fuelStation.refuel(motorcycle, 10);

        expect(mockRefuel).toHaveBeenCalledWith(10);
        expect(mockRefuel).toHaveBeenCalledTimes(1);
    });

    it('should refuel a truck', () => {
        const truck = new Truck('VOLVO');
        const fuelStation = new FuelStation();
        truck.refuel = mockRefuel;
        fuelStation.refuel(truck, 50);

        expect(mockRefuel).toHaveBeenCalledWith(50);
        expect(mockRefuel).toHaveBeenCalledTimes(1);
    });

    it('should not refuel a vehicle without refuel method', () => {
        const electricCar = { name: 'Tesla' };
        const fuelStation = new FuelStation();
        expect(() => fuelStation.refuel(electricCar as any, 10)).toThrow();
    });

    it('should not move when fuel is empty', () => {
        const motorcycle = new Motorcycle('YAMAHA');
        motorcycle.refuel(-motorcycle.getFuelLevel());
        expect(motorcycle.move()).toBe('Motorcycle YAMAHA cannot move, out of fuel!');
    });


});
