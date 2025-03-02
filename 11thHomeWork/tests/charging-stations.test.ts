import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ChargingStation } from '../src/services/charging-station';
import { ElectricCar } from '../src/models/electric-car';
import { HybridCar } from '../src/models/hybrid-car';
import { Truck } from '../src/models/truck';

const mockCharge = vi.fn();
beforeEach(() => {
    vi.clearAllMocks();
});

describe('ChargingStation', () => {
    it('should charge an electric vehicle', () => {
        const electricCar = new ElectricCar('TESLA');
        const chargingStation = new ChargingStation();
        electricCar.charge = mockCharge;

        chargingStation.charge(electricCar, 40);

        expect(mockCharge).toHaveBeenCalledWith(40);
        expect(mockCharge).toHaveBeenCalledTimes(1);
    });

    it('should charge a hybrid vehicle', () => {
        const hybridCar = new HybridCar('TOYOTA');
        const chargingStation = new ChargingStation();
        hybridCar.charge = mockCharge;

        chargingStation.charge(hybridCar, 30);

        expect(mockCharge).toHaveBeenCalledWith(30);
        expect(mockCharge).toHaveBeenCalledTimes(1);
    });

    it('should not charge a truck', () => {
        const truck = new Truck('VOLVO');
        const chargingStation = new ChargingStation();

        expect(() => chargingStation.charge(truck, 40)).toThrow();
    });


    it('should not allow charging above 100%', () => {
        const electricCar = new ElectricCar('TESLA');
        const chargingStation = new ChargingStation();

        const initialBattery = electricCar.getBatteryLevel();

        chargingStation.charge(electricCar, 30);
        expect(electricCar.getBatteryLevel()).toBe(Math.min(initialBattery + 30, 100));

        chargingStation.charge(electricCar, 100);
        expect(electricCar.getBatteryLevel()).toBe(100);
    });

    it('should not charge a vehicle without charge method', () => {
        const truck = new Truck('VOLVO');
        const chargingStation = new ChargingStation();

        expect(() => chargingStation.charge(truck as any, 40)).toThrow();
    });


});
