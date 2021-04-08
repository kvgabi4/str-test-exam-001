const { cityList, cityFilter, citySorter, citySlicer } = require('../main');

describe('JS algoritmus teszt cinema listára', () => {

    test('Túl kicsi populációra történő szűrés.', () => {
        const results = cityFilter(cityList, 3, 30);
        expect(results.length).toBe(0);
    });
    
    test('Túl nagy területre történő szűrés.', () => {
        const results = cityFilter(cityList, 30, 85);
        expect(results.length).toBe(0);
    });

    test('Létező populációra szűrés.', () => {
        const results = cityFilter(cityList, 30, 1);
        expect(results.length).toBe(7);
    });

    test('Létező populációra és területre szűrés.', () => {
        const results = cityFilter(cityList, 15, 50);
        expect(results.length).toBe(2);
    });

    test('Csak a nevekkel, mint string lista tér vissza a szűrés', () => {
        const results = cityFilter(cityList, 15, 50);
        expect(results[0]).toBe('Guaiúba');
        expect(results[1]).toBe('São Pedro');
    });
    
    test('Név szerinti rendezés ellenőrzése', () => {
        const results = citySorter(cityList, 'name');
        expect(results[0].name).toBe('Béziers');
        expect(results[1].name).toBe('Cockburn Town');
    });

    test('Populáció szerinti rendezés ellenőrzése', () => {
        const results = citySorter(cityList, 'population');
        expect(results[0].population).toBe(7);
        expect(results[1].population).toBe(9);
    });
    
    test('Név szerint rendezett és vágott lista hossza és első három eleme', () => {
        const results = citySorter(cityList, 'name');
        const sliced = citySlicer(results, 3);
        expect(sliced.length).toBe(3);
        expect(sliced[0].name).toBe('Béziers');
        expect(sliced[1].name).toBe('Cockburn Town');
        expect(sliced[2].name).toBe('Guaiúba');
    });
});
