import { describe, it } from 'mocha';
import { expect } from 'chai';
import { ElectricCar } from '../../src/models/electric-car';
import { HybridCar } from '../../src/models/hybrid-car';
import { Motorcycle } from '../../src/models/motorcycle';
import { Truck } from '../../src/models/truck';

describe('Vehicle Tests', function () {
    it('ElectricCar should lose battery on move', function () {
        const car = new ElectricCar('Tesla');
        car.move();
        expect(car.getBatteryLevel()).to.equal(70);
    });

    it('HybridCar should use fuel first', function () {
        const car = new HybridCar('Toyota');
        car.move();
        expect(car.getFuelLevel()).to.equal(35);
    });

    it('Motorcycle should lose fuel on move', function () {
        const moto = new Motorcycle('Yamaha');
        moto.move();
        expect(moto.getFuelLevel()).to.equal(8);
    });

    it('Truck should refuel properly', function () {
        const truck = new Truck('Volvo');
        truck.refuel(50);
        expect(truck.getFuelLevel()).to.equal(150);
    });
});
