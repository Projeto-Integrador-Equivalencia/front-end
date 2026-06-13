import {
  Administrator,
  GetAdministrator,
  RegisterAdministratorData,
  RegisterAdministratorResponse,
} from "@/interfaces/administrator";
import { api } from "./api";

//------------------------Cadastro------------------------//

export async function registerAdministrator(
  data: RegisterAdministratorData,
): Promise<RegisterAdministratorResponse> {
  try{
    const response = await api.post<RegisterAdministratorResponse>(
      "/administrators",
      data,
    );
    console.log({ response });
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar administrador:", error);
    throw error;
  }
}

//------------------------Busca por CPF------------------------//

export async function getAdministratorByCpf(
  cpf: string,
): Promise<Administrator> {
  try{
    const response = await api.get<GetAdministrator>(
      `/administrators/search/${cpf}`,
    );
    console.log({ response });
    return response.data.data;
  } catch (error) {
    console.error(`Erro ao buscar administrador pelo CPF: ${cpf}:`, error);
    throw error;
  }
}

//------------------------Busca por e-mail------------------------//

export async function getAdministratorByEmail(
  email: string,
): Promise<Administrator> {
  try{
    const response = await api.get<GetAdministrator>(
      `/administrators/search/${email}`,
    );
    console.log({ response });
    return response.data.data;
  } catch (error) {
    console.error(`Erro ao buscar administrador pelo email: ${email}:`, error);
    throw error;
  }
}

//------------------------Busca por id------------------------//

export async function getAdministratorById(id: number): Promise<Administrator> {
  try{
    const response = await api.get<GetAdministrator>(`/administrators/${id}`);
    console.log({ response });
    return response.data.data;
  } catch (error) {
    console.error(`Erro ao buscar administrador pelo id: ${id}:`, error);
    throw error;
  }
}
