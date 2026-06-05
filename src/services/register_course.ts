import { api } from "./api";

export type CourseShift = "Matutino" | "Vespertino" | "Noturno" | "Integral";

export interface RegisterCourseData {
  name: string;
  code: string;
  semesterAmount: number;
  shift: CourseShift;
  createdByAdminId: number;
}

export interface RegisteredCourse {
  name: string;
  code: string;
  semesterAmount: number;
  shift: CourseShift;
  createdByAdminId: number;
}

export interface RegisterCourseResponse {
  status: string;
  data: {
    props: RegisteredCourse;
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
