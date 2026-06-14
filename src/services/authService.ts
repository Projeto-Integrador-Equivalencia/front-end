import { LoginData, LoginResponse, recuperarSenha, message } from "@/interfaces/auth";
import { api } from "./api";



export async function loginRequest(param: LoginData): Promise<LoginResponse> {
  try{
    const response = await api.post<LoginResponse>("/auth/login", param);
    console.log({response});
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
}

export async function forgotPassword(param: recuperarSenha): Promise<message>{
  try{
    const response = await api.post<message>("/auth/forgot-password",param)
    return response.data
  } catch (error) {
    console.error("Erro ao fazer a recuperação de senha:", error);
    throw error;
  }
}