import { EquivalencySearchResponse, EquivalencyData, CreateEquivalency, EquivalencyCreateResponse, UpdateEquivalency, EquivalencyUpdateResponse } from "@/interfaces/equivalency";
import { api } from "./api";

export const getEquivalencies = async (token: string): Promise<EquivalencyData[]> => {
  try {
    const response = await api.get<EquivalencyData[]>("/equivalencies/", {
      headers: {

        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar equivalências:", error);
    throw error;
  }
};

export const searchEquivalencyByName = async (name: string, token?: string): Promise<EquivalencyData> => {
  try {
    const response = await api.get<EquivalencySearchResponse>('/equivalencies/search', {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      params: { name }
    });

    return response.data.data;
  } catch (error) {
    console.error("Erro na busca:", error);
    throw error;
  }
};

export const createEquivalency = async (
  data: CreateEquivalency, 
  token?: string
): Promise<EquivalencyCreateResponse> => {
  try {
    const response = await api.post<EquivalencyCreateResponse>('/equivalencies/create', data, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao criar equivalência:", error);
    throw error;
  }
};

export const updateEquivalency = async (
  id: number,
  data: UpdateEquivalency,
  token?: string
): Promise<EquivalencyUpdateResponse> => {
  try {
   
    const response = await api.patch<EquivalencyUpdateResponse>(`/equivalencies/updated/${id}`, data, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar equivalência com ID ${id}:`, error);
    throw error;
  }
};