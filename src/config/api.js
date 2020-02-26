const axios = require("axios").default;
const instance = axios.create({
  baseURL: "https://duenotifier.herokuapp.com"
});

export default instance;
