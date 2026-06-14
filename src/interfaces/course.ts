export interface CourseEntity {
  props: Course;
}

export type CourseShift = "Matutino" | "Vespertino" | "Noturno" | "Integral";

export interface Course {
  id: number;
  name: string;
  semesterAmount: number;
  shift: CourseShift;
  code: string;
  createdByAdminId: number;
  createdByAdminName?: string;
  createdAt?: string;
  updatedAt?: string;
}

//------------------------Cadastro------------------------//

export interface RegisterCourseData {
  name: string;
  code: string;
  semesterAmount: number;
  shift: CourseShift;
  createdByAdminId: number;
}

export interface RegisterCourseResponse {
  status: string;
  data: {
    props: RegisterCourseData;
  };
}

//------------------------Busca Geral------------------------//

export interface GetCoursesResponse {
  status: string;
  data: CourseEntity[];
}

//------------------------Busca por código------------------------//

export interface GetCourseByCodeResponse {
  status: string;
  data: Course;
}

//------------------------Busca por id------------------------//

export interface GetCourseByIdResponse {
  status: string;
  message: Course;
}