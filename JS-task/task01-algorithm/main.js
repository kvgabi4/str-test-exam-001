const cityList = [{
    id: 1,
    name: "Cockburn Town",
    population: 15,
    area: 63
}, {
    id: 2,
    name: "Béziers",
    population: 16,
    area: 74
}, {
    id: 3,
    name: "Guaiúba",
    population: 7,
    area: 83
}, {
    id: 4,
    name: "Veliko Tŭrnovo",
    population: 17,
    area: 83
}, {
    id: 5,
    name: "São Pedro",
    population: 9,
    area: 70
}, {
    id: 6,
    name: "Ouadda",
    population: 19,
    area: 52
}, {
    id: 7,
    name: "Sanquan",
    population: 18,
    area: 35
}];

const cityFilter = (list, population, area) => {
    const filteredList = list.filter(city => city.population < population && city.area > area);
    return filteredList.map(element => element.name);
};

const citySorter = (list, key) => {
    if (typeof list[0][key] === 'number') {
        list.sort(function (x, y) {
            return x[key] - y[key];
        });
    } else {
        list.sort(function (x, y) {
            let a = x[key].toLowerCase(),
                b = y[key].toLowerCase();
            return a == b ? 0 : a > b ? 1 : -1;
        });
    }
    return list;
};

const citySlicer = (list, limit) => {
    return citySorter(list, 'name').slice(0,limit);
};

if (typeof module !== 'undefined') {
    module.exports = { 
        cityList, 
        cityFilter,
        citySorter,
        citySlicer
    };
}
