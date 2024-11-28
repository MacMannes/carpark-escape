import { describe, expect, test } from 'vitest';
import { CarParkEscape } from './carpark-escape';

describe('CarPark Escape Acceptance', () => {
    test('Escape carpark from the first floor', () => {
        const carpark = new CarParkEscape([
            [1, 0, 0, 0, 2],
            [0, 0, 0, 0, 0],
        ]);
        expect(carpark.escape()).toEqual(['L4', 'D1', 'R4']);
    });
});

describe('CarPark Escape should', () => {
    test('Should escape when 1 floor only', () => {
        const carpark = new CarParkEscape([[0, 0, 2, 0, 0]]);
        expect(carpark.escape()).toEqual(['R2']);
    });
});
