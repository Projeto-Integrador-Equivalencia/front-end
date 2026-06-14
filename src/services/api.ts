import axios from "axios";
import Cookies from "js-cookie";

const isServer = typeof window === "undefined";

export const api = axios.create({
  baseURL: isServer
    ? "http://host.docker.internal:3000/"
    : "http://localhost:3000/",
  
});

// Interceptor de requisição
api.interceptors.request.use(
  async (config) => {
    let token: string | undefined = undefined;

    if (isServer) {
      // Caso o arquivo seja renderizada no lado do servidor
      const { cookies } = await import("next/headers");
      const cookieStore = await cookies();
      token = cookieStore.get("token")?.value;
    } else {
      // Caso o arquivo seja renderizada no lado do cliente (No navegador)
      token = Cookies.get("token"); 
    }

    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Trata erros que acontecem antes da requisição ser enviada
    return Promise.reject(error);
  },
);
