import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/concursos"
});

export const api_get = axios.get({
  baseURL: "http://localhost:3000/concursor/$`{numero}`"
})