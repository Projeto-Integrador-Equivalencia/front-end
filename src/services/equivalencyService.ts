import {
  EquivalencySearchResponse,
  EquivalencyData,
  CreateEquivalency,
  EquivalencyCreateResponse,
  UpdateEquivalency,
  EquivalencyUpdateResponse,
} from "@/interfaces/equivalency";
import { api } from "./api";

export async function getEquivalencies(): Promise<EquivalencyData[]>{
  try {
    const response = await api.get<EquivalencyData[]>("/equivalencies/");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar equivalências:", error);
    throw error;
  }
};

export async function searchEquivalencyByName(
  name: string,
): Promise<EquivalencyData>{
  try {
    const response = await api.get<EquivalencySearchResponse>(
      "/equivalencies/search", 
      {
        params: { name }
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Erro na busca:", error);
    throw error;
  }
};

export async function createEquivalency(data: CreateEquivalency): Promise<EquivalencyCreateResponse>{
  try {
    const response = await api.post<EquivalencyCreateResponse>(
      "/equivalencies/create",
      data,
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao criar equivalência:", error);
    throw error;
  }
};

export async function updateEquivalency(
  id: number,
  data: UpdateEquivalency,
): Promise<EquivalencyUpdateResponse> {
  try {
    const response = await api.patch<EquivalencyUpdateResponse>(
      `/equivalencies/updated/${id}`,
      data,
    );
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar equivalência com ID ${id}:`, error);
    throw error;
  }
}
