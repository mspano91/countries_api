const { Router } = require("express");
const { getCountryHandler, getEuropeHandler } = require("../handlers/handler");

const countryRoutes = Router();

countryRoutes.get("/", getCountryHandler);
// countryRoutes.get("/europe", getEuropeHandler);

module.exports = countryRoutes;
