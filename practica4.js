const fs = require('fs')
const {readFiles} = require('fs/premises');

// Lectura fichero de forma asíncrona
exports.load = (file) => {
    let cities = JSON.parse(fs.readFileSync(file));
    return cities;
};

exports.load = asycn (filename) => {
    const buf = await readFile(filename);
    return JSON.parse(buf);
};

// Temperatura máxima
exports.max_temp = (cities) => {};

// Temperatura mínimo
exports.min_temp = (cities) => {};

// Máxima temperatura mínima
exports.max_temp_min = (cities) => {};

// Mínima temperatura máxima
exports.min_temp_max = (cities) => {};

// Temperatura media
exports.average_temp = (cities) => {};

// Warmer average temp
exports.warmer_average_temp = (cities) => {};

// Ciudad más al norte
exports.max_north = (cities) => {};

// Ciudad más al sur
exports.max_south = (cities) => {};

// Cálculo centro de gravedad
exports.gravity_center = (cities) => {};

// Más cercano al centro de gravedad
exports.closest_GC = (cities) => {};
