import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;
/*console.log(
JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
  .accessToken
); */ //exchange data to/from a web server.When receiving data from a web server, the data is always a string.Parse the data with JSON.parse(), and the data becomes a JavaScript object.

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

// use requestMethods.js in order to not rewrite url all the time and reuse easily
