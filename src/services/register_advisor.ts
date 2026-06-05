import axios from "axios";
import { api } from "./api";

export type CourseShift = "Matutino" | "Vespertino" | "Noturno" | "Integral";

export interface Course {
  id: number;
  name: string;
  semesterAmount: number;
  shift: CourseShift;
  code: string;
  createdByAdminId: number;
}

interface CourseEntity {
  props: Course;
}

export interface GetCoursesResponse {
  status: string;
  data: CourseEntity[];
}

export interface RegisterAdvisorData {
  name: string;
  email: string;
  cpf: string;
  password: string;
  courseId: number;
}

export interface RegisteredAdvisor {
  id: number;
  name: string;
  email: string;
  cpf: string;
  role: "advisor";
  password: string;
}

export interface RegisterAdvisorResponse {
  status: string;
  data: {
    props: RegisteredAdvisor;
  };
}

export interface AdvisorCourse {
  id: number;
  advisorId: number;
  courseId: number;
  expirationDate: string;
}

export interface RegisterAdvisorCourseResponse {
  status: string;
  data: {
    props: AdvisorCourse;
  };
}

export async function getCourses(token: string): Promise<Course[]> {
  const response = await api.get<GetCoursesResponse>("/courses", {
    headers: getAuthHeaders(token),
  });

  console.log({ response });

  return response.data.data.map((course) => course.props);
}

export async function registerAdvisor(
  data: RegisterAdvisorData,
  token: string,
): Promise<RegisterAdvisorResponse> {
  const advisorResponse = await api.post<RegisterAdvisorResponse>(
    "/advisors",
    {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      password: data.password,
    },
    {
      headers: getAuthHeaders(token),
    },
  );

  console.log({ advisorResponse });

  const advisorId = advisorResponse.data.data.props.id;

  if (!advisorId) {
    throw new Error("ID do orientador não retornado pela API");
  }

  const expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 1);

  const advisorCourseResponse = await api.post<RegisterAdvisorCourseResponse>(
    "/advisor-courses",
    {
      advisorId,
      courseId: data.courseId,
      expirationDate: expirationDate.toISOString(),
    },
    {
      headers: getAuthHeaders(token),
    },
  );

  console.log({ advisorCourseResponse });

  return advisorResponse.data;
}

function getAuthHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
  };
}
