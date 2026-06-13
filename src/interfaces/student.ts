export interface Student {
    id: number;
    name: string;
    ra: string;
    rg: string;
    tel: string;
    email: string;
    cpf: string;
    courseId: number;
}

export interface registerStudentData{
  rg: string;
  name: string;
  ra: string;
  password: string;
  email: string;
  tel: string;
  cpf: string;
  courseId: number;
}

export interface StudentUser {
  id: number;
  name: string;
  email: string;
  cpf: string;
  rg: string;
  ra: string;
  tel: string;
  courseId: number;
  role: "student" | string; 
  password?: string;        
}

export interface RegisterStudentResponse {
  status: string;
  data: {
    props: StudentUser;
  };
}