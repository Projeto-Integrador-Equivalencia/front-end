import { Student } from "@/interfaces/student";
import { api } from "./api";

//Buscar dados do usuário pelo id, com as informações do AuthContext
// GET /students/{id}
export async function getStudentById(
  id: number,
  token: string,
): Promise<Student> {
  const response = await api.get<{ data: Student }>(`/students/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.data;
}

//Busca dados do usuário pelo cpf
// GET /students/search/cpf?cpf={cpf}
export async function getStudentByCpf(
  cpf: string,
  token: string,
): Promise<Student> {
  const response = await api.get<{ data: Student }>(`/students/search/cpf`, {
    params: { cpf: cpf },
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.data;
}

// GET /students/search/email?email={email}
export async function getStudentByEmail(
  email: string,
  token: string,
): Promise<Student> {
  const response = await api.get<{ data: Student }>(`/students/search/email`, {
    params: { email: email },
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.data;
}

// POST /students/
export async function registerStudent(data: any) {
  const response = await fetch("http://localhost:3000/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const text = await response.text();

  console.log(text);

  if (!response.ok) {
    throw new Error("Erro ao cadastrar");
  }

  return JSON.parse(text);
}
