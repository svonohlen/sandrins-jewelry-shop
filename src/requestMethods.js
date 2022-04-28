import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjA2MDA0MDZlNDFmNmI3NDY4YTA4MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDkxMTE5MCwiZXhwIjoxNjUxMTcwMzkwfQ.nRbTQZbcSPlZpuu-sljv1P9tR11rmqWYylbul5rxXwc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

// use requestMethods.js in order to not rewrite url all the time and reuse easily
