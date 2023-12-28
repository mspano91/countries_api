const axios = require("axios");

const URL = "https://restcountries.com/v3.1/independent?status=true";

const getCountries = async () => {
  try {
    const response = await axios.get(`${URL}`);
    const countries = response.data;
    const list = countries.map((data) => {
      return {
        key: data.id,
        name: data.name.official,
        capital: data.capital,
        continent: data.continents,
        population: data.population,
        timeZone: data.timezones,
        language: data.languages,
        flag: data.flags.png,
        maps: data.maps.googleMaps,
      };
    });
    return list;
  } catch (error) {
    throw new Error("Error en la solicitud");
  }
};

module.exports = {
  getCountries,
};
