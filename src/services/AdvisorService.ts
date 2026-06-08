
    import { Advisor, CreateAdvisorData } from "@/interfaces/advisor";
    import { api } from "./api";
    



    //Buscar dados do usuário pelo id, com as informações do AuthContext
    // GET /advisor/{id}
    export async function getAdvisorById(id: number, token: string): Promise<Advisor> {
        const response = await api.get<{ data: Advisor }>(`/advisors/${id}`, {
            headers: { Authorization: `Bearer ${token}`}
        });
        return response.data.data;
    }

    //Busca dados do usuário pelo cpf
    // GET /advisor/search/cpf?cpf={cpf}
    export async function getAdvisorByCpf(cpf: string, token: string): Promise<Advisor> {
    const response = await api.get<{ data: Advisor }>(`/advisors/search/cpf`, {
        params: { cpf: cpf }, 
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data.data;
    }

    
    // GET /advisor/search/email?email={email}
    export async function getAdvisorByEmail(email: string, token: string): Promise<Advisor> {
    const response = await api.get<{ data: Advisor }>(`/advisors/search/email`, {
        params: { email: email },
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data.data;
    }

    export async function createAdvisor(data: CreateAdvisorData, token?: string): Promise<Advisor> {
  // Nota: Se a rota de criar não exigir token (ex: um cadastro público), 
  // você pode remover o header de Authorization aqui.
  const response = await api.post<Advisor>(`/students/`, data, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined
  });
  return response.data;
}