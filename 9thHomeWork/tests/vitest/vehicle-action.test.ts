import { describe, it, expect, vi } from 'vitest';
import { vehicleAction } from '../../src/services/vehicle-action';
import { Truck } from '../../src/models/truck';
import { Motorcycle } from '../../src/models/motorcycle';

describe('Vehicle Action Tests', () => {
    it('Should move vehicle and accelerate', () => {
        const truck = new Truck('Volvo');

        const consoleSpy = vi.spyOn(console, 'log');

        vehicleAction(truck);

        expect(consoleSpy).toHaveBeenCalled();
        consoleSpy.mockRestore();
    });

    it('Motorcycle should move correctly', () => {
        const moto = new Motorcycle('Yamaha');
        expect(moto.move()).toContain('speeds on the highway');
    });
});
