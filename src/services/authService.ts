import { LoginData, LoginResponse } from "@/interfaces/auth";
import { api } from "./api";

export async function loginRequest(param: LoginData): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>("/auth/login", param);
  console.log({response});
  return response.data;
}
