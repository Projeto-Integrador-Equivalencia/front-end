import { api } from "./api";

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: string;
  data: {
    user: LoginUser;
    token: string;
  };
}

export interface LoginUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

export async function loginRequest(param: LoginData): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>("/auth/login", param);
  console.log({response});
  return response.data;
}
