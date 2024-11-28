import { describe, expect, it } from 'vitest';
import { CarParkEscape } from './carpark-escape';

describe('CarPark Escape', () => {
    it('Creating an instance of the CarParkEscape class should work', () => {
        const clazz = new CarParkEscape();
        expect(clazz).toBeDefined();
    });
});
