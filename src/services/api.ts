import axios from "axios";

const isServer = typeof window === "undefined";

export const api = axios.create({

  baseURL: isServer
    ? "http://host.docker.internal:3000/"
    : "http://localhost:3000/",
});
