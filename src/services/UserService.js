const { default: axios } = require("axios");

const BASE_URL = "https://pokeapi.co/api/v2";

// GET
const findAllUsers = async () => {
  try {
    const result = await axios.get(`${BASE_URL}/pokemon`);
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("error", error);
  }
};

export default findAllUsers;
