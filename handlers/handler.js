const { getCountries } = require("../controllers/controller");

const getCountryHandler = async (req, res) => {
  try {
    const list = await getCountries();
    return res.status(200).json(list);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCountryHandler,
};
