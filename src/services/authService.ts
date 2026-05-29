import { api } from "./api";

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: string;
  data: {
    user: {
      id: number;
      name: string;
      email: string;
      role: string;
    };
    token: string;
  };
}

export async function loginRequest(data: LoginData): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>("/auth/login", data);

  return response.data;
}
