import { api } from "./api";

function getAuthHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
  };
}

export type AdministratorRole = "administrator";

export interface Administrator {
  id?: number;
  name: string;
  email: string;
  cpf: string;
  password: string;
  role: AdministratorRole;
}

interface AdministratorEntity {
  props: Administrator;
}

//------------------------Cadastro------------------------//

export interface RegisterAdministratorData {
  name: string;
  email: string;
  cpf: string;
  password: string;
}

export interface RegisterAdministratorResponse {
  status: string;
  data: AdministratorEntity;
}

export async function registerAdministrator(
  data: RegisterAdministratorData,
  token: string,
): Promise<RegisterAdministratorResponse> {
  const response = await api.post<RegisterAdministratorResponse>(
    "/administrators",
    data,
    {
      headers: getAuthHeaders(token),
    },
  );

  console.log({ response });

  return response.data;
}

//------------------------Busca por CPF------------------------//

export interface GetAdministratorByCpfResponse {
  status: string;
  data: Administrator;
}

export async function getAdministratorByCpf(
  cpf: string,
  token: string,
): Promise<Administrator> {
  const response = await api.get<GetAdministratorByCpfResponse>(
    "/administrators/search/cpf",
    {
      headers: getAuthHeaders(token),
      params: { cpf },
    },
  );

  console.log({ response });

  return response.data.data;
}

//------------------------Busca por e-mail------------------------//

export interface GetAdministratorByEmailResponse {
  status: string;
  data: Administrator;
}

export async function getAdministratorByEmail(
  email: string,
  token: string,
): Promise<Administrator> {
  const response = await api.get<GetAdministratorByEmailResponse>(
    "/administrators/search/email",
    {
      headers: getAuthHeaders(token),
      params: { email },
    },
  );

  console.log({ response });

  return response.data.data;
}

//------------------------Busca por id------------------------//

export interface GetAdministratorByIdResponse {
  status: string;
  data: Administrator;
}

export async function getAdministratorById(
  id: number,
  token: string,
): Promise<Administrator> {
  const response = await api.get<GetAdministratorByIdResponse>(
    `/administrators/${id}`,
    {
      headers: getAuthHeaders(token),
    },
  );

  console.log({ response });

  return response.data.data;
}
