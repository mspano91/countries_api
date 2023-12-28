const { Router } = require("express");
const { getCountryHandler } = require("../handlers/handler");

const countryRoutes = Router();

countryRoutes.get("/", getCountryHandler);

module.exports = countryRoutes;
