const { Router } = require("express");
const countryRoutes = require("./countryRoutes");

const mainRouter = Router();

mainRouter.use("/countries", countryRoutes);

module.exports = mainRouter;
