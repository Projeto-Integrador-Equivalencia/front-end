import { api } from "./api";

function getAuthHeaders(token?: string) {
  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
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

interface CourseEntity {
  props: Course;
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

export async function registerCourse(
  data: RegisterCourseData,
  token: string,
): Promise<RegisterCourseResponse> {
  const response = await api.post<RegisterCourseResponse>("/courses", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log({ response });

  return response.data;
}

//------------------------Busca------------------------//

export interface GetCoursesResponse {
  status: string;
  data: CourseEntity[];
}

export async function getCourses(token?: string): Promise<Course[]> {
  const response = await api.get<GetCoursesResponse>("/courses", {
    headers: getAuthHeaders(token),
  });

  console.log({ response });

  return response.data.data.map((course) => course.props);
}

//------------------------Busca por código------------------------//

export interface GetCourseByCodeResponse {
  status: string;
  data: Course;
}

export async function getCourseByCode(
  code: string,
  token: string,
): Promise<Course> {
  const response = await api.get<GetCourseByCodeResponse>(
    "/courses/search/code",
    {
      headers: getAuthHeaders(token),
      params: { code },
    },
  );

  console.log({ response });

  return response.data.data;
}

//------------------------Busca por id------------------------//

export interface GetCourseByIdResponse {
  status: string;
  message: Course;
}

export async function getCourseById(
  id: number,
  token: string,
): Promise<Course> {
  const response = await api.get<GetCourseByIdResponse>(`/courses/${id}`, {
    headers: getAuthHeaders(token),
  });

  console.log({ response });

  return response.data.message;
}
