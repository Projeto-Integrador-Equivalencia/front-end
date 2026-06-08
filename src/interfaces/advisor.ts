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