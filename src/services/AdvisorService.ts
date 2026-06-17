import { Advisor, ApiResponseAdvisor, CreateAdvisorData } from "@/interfaces/advisor";
import { api } from "./api";

export async function createAdvisor(
  data: CreateAdvisorData,
): Promise<ApiResponseAdvisor> {
  try{
    const response = await api.post<ApiResponseAdvisor>(`/advisors/`, data);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar um advisor/orientador:", error);
    throw error;
  }
}

export async function getAdvisorById(
  id: number,
): Promise<Advisor> {
  try{
    const response = await api.get<{ data: Advisor }>(`/advisors/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(`Erro ao buscar um advisor/orientador pelo id: ${id}:`, error);
    throw error;
  }
}

export async function getAdvisorByCpf(
  cpf: string,
): Promise<Advisor> {
  try{
    const response = await api.get<{ data: Advisor }>(`/advisors/search/${cpf}`);
    return response.data.data;
  } catch (error) {
    console.error(`Erro ao buscar um advisor/orientador pelo cpf: ${cpf}:`, error);
    throw error;
  }
}

export async function getAdvisorByEmail(
  email: string,
): Promise<Advisor> {
  try{
    const response = await api.get<{ data: Advisor }>(`/advisors/search/${email}`);
    return response.data.data;
  } catch (error) {
    console.error(`Erro ao buscar um advisor/orientador pelo email: ${email}:`, error);
    throw error;
  }
}
