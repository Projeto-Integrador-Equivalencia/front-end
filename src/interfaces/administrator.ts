export interface Administrator {
  id?: number;
  name: string;
  email: string;
  cpf: string;
  password: string;
  role: string;
}

export interface RegisterAdministratorData {
  name: string;
  email: string;
  cpf: string;
  password: string;
}

interface AdministratorEntity {
  props: Administrator;
}

export interface GetAdministrator {
  status: string;
  data: Administrator;
}

export interface RegisterAdministratorResponse {
  status: string;
  data: AdministratorEntity;
}
