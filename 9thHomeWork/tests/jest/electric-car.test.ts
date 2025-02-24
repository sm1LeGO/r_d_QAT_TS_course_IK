import { ElectricCar } from '../../src/models/electric-car';

describe('ElectricCar', () => {
    it('should lose battery on move', () => {
        const car = new ElectricCar('Tesla');

        car.move();

        expect(car.getBatteryLevel()).toBe(70);
    });

    it('should not move if battery is empty', () => {
        const car = new ElectricCar('Tesla');

        for (let i = 0; i < 8; i++) {
            car.move();
        }

        expect(car.move()).toBe('Electric Car Tesla cannot move, battery empty!');
    });
});
