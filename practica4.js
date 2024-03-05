const fs = require('fs')
const {readFiles} = require('fs/premises');

// Lectura fichero de forma asíncrona
exports.load = (file) => {
    let cities = JSON.parse(fs.readFileSync(file));
    return cities;
};

exports.load = asycn filename => {
    const buf = await readFile(filename);
    return JSON.parse(buf);
};

// Temperatura máxima
exports.max_temp = (cities) => {
    let maxTemp = cities[0].main.temp; //Coges el primero para iniciar la cuenta, accedes al main y de ahi al temp
    //tambien podria hacelo por un bucle for habitual
cities.array.forEach((city) => {
    let temperatura = city.main.temp;
    if (temperatura > maxTemp){
        maxTemp = temperatura;
    }
return maxTemp;
});
};

// Temperatura mínimo
exports.min_temp = (cities) => {
    let minTemp = cities[0].main.temp; 

    cities.array.forEach((city) => {
        let temperatura = city.main.temp;
        if (temperatura < minTemp){
            minTemp = temperatura;
        }
    return minTemp;
    });
};

// Máxima temperatura mínima
//Devuelve la ciudad que tiene la temperatura minima mas alta
exports.max_temp_min = (cities) => {
    let maxMinTemp =cities[0].main.temp_min;

    cities.forEach((city) => {
        let temperaturaMin = city.main.temp_min;
        if (temperaturaMin > maxMinTemp){
            maxMinTemp = temperaturaMin;
        }
    })

    return maxMinTemp;
};

// Mínima temperatura máxima
//Devuelve temperatura maxima mas baja
exports.min_temp_max = (cities) => {
    let minMaxTemp =cities[0].main.temp_max;

    cities.forEach((city) => {
        let temperaturaMax = city.main.temp_max;
        if (temperaturaMax < minMaxTemp){
            minMaxTemp = temperaturaMax;
        }
    })

    return minMaxTemp;
};

// Temperatura media
exports.average_temp = (cities) => {
    let numeroDeCiudades = cities.length;
    let valorInicialAcumulador = 0;

    let sumaTemperaturas = cities.reduce(
        (temperaturaAcumulada, ciudad) => {
            let temperatura = ciudad.main.temp;
            return temperaturaAcumulada + temperatura;
        }, valorInicialAcumulador
    );

    return sumaTemperaturas/numeroDeCiudades;

};

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
