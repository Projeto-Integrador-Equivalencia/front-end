import { api } from "./api";

export interface RegisterAdministratorData {
  name: string;
  email: string;
  cpf: string;
  password: string;
}

export interface RegisteredAdministrator {
  id: number;
  name: string;
  email: string;
  cpf: string;
  role: "administrator";
  password: string;
}

export interface RegisterAdministratorResponse {
  status: string;
  data: {
    props: RegisteredAdministrator;
  };
}

export async function registerAdministrator(
  data: RegisterAdministratorData,
): Promise<RegisterAdministratorResponse> {
  const response = await api.post<RegisterAdministratorResponse>(
    "/administrators",
    data,
  );

  console.log({ response });

  return response.data;
}
