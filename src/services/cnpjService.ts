import { CompanyData } from "@/interfaces/cnpj";
import { api } from "./api";

export async function buscarCNPJ(cnpj: string): Promise<CompanyData> {
  try {
    const response = await api.get<CompanyData>(
      `https://open.cnpja.com/office/${cnpj}`,
    );

    console.log({ response });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar o CNPJ:", error);
    throw error;
  }
}
