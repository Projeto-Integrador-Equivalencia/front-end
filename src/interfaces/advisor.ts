    export interface Advisor {
        id: number;
        name: string;
        email: string;
        cpf: string;
    }

    export interface CreateAdvisorData {
        name: string;
        email: string;
        password: string;
        cpf: string;
    }

    export interface AdvisorProps {
  name: string;
  email: string;
  password?: string; 
  cpf: string;
  id: number;
}

export interface AdvisorDataContainer {
  props: AdvisorProps;
}

export interface ApiResponseAdvisor {
  status: string;
  data: AdvisorDataContainer;
}