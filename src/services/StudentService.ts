import { RegisterStudentResponse, Student, registerStudentData } from "@/interfaces/student";
import { api } from "./api";

export async function getStudentById(
  id: number,
): Promise<Student> {
  try{
    const response = await api.get<{ data: Student }>(`/students/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(`Erro ao buscar solicitação de equivalência pelo ID: ${id}:`, error);
    throw error;
  }
}
export async function getStudentByCpf(
  cpf: string,
): Promise<Student> {
  try {
    const response = await api.get<{ data: Student }>("/students/search/cpf", {
      params: { cpf },
    });
    console.log({response});
    return response.data.data;
  } catch (error) {
    console.error(`Erro ao buscar estudante com o CPF ${cpf}:`, error);
    throw error;
  }
}

export async function getStudentByEmail(
  email: string,
): Promise<Student> {
  try{
  const response = await api.get<{ data: Student }>("/students/search/email", {
    params: {email},
  });
  console.log({response});
  return response.data.data;
  } catch (error) {
    console.error(`Erro ao buscar estudante com o email ${email}:`, error);
    throw error;
  }
}

export async function registerStudent(param: registerStudentData): Promise<RegisterStudentResponse> {
  try{
    const response = await api.post<RegisterStudentResponse>("/students/", param);
    console.log({response});
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar o estudante:", error);
    throw error;
  }
}
