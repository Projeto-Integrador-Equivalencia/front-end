import { api } from "./api";

export interface RegisterStudentData {
  name: string;
  email: string;
  tel: string;
  cpf: string;
  rg: string;
  ra: string;
  courseId: number;
  password: string;
}

export interface RegisteredStudent {
  id: number;
  name: string;
  email: string;
  tel: string;
  cpf: string;
  rg: string;
  ra: string;
  courseId: number;
  role: "student";
  password: string;
}

export interface RegisterStudentResponse {
  status: string;
  data: {
    props: RegisteredStudent;
  };
}

export async function registerStudent(
  data: RegisterStudentData,
): Promise<RegisterStudentResponse> {
  const response = await api.post<RegisterStudentResponse>("/students", data);

  console.log({ response });

  return response.data;
}
