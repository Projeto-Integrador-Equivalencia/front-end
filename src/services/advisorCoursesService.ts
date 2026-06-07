import { api } from "./api";
import {
  advisorCourse,
  advisorCourseResponse,
  createAdvisorCourse,
  searchPairAdvisor,
} from "../interfaces/advisorCourses";

export async function advisorCourseCreate(
  param: createAdvisorCourse,
): Promise<advisorCourseResponse> {
  const response = await api.post<advisorCourseResponse>(
    "/advisor-courses",
    param,
  );
  console.log({ response });
  return response.data;
}

export async function advisorCourseDelete(id: number) {
  const response = await api.delete<advisorCourseResponse>(
    `/advisor-courses/delete/${id}`,
  );
  console.log({ response });
  return response.data;
}

export async function advisorCourseGetById(id: number): Promise<advisorCourse> {
  const response = await api.get<advisorCourse>(`/advisor-courses/${id}`);
  console.log({ response });
  return response.data;
}

export async function advisorCourseGetByAdvisorId(id: number) {
  const response = await api.get(`/advisor-courses/advisor/${id}`);
  console.log({ response });
  return response.data;
}

export async function advisorCourseGetByCourseId(id: number) {
  const response = await api.get(`/advisor-courses/course/${id}`);
  console.log({ response });
  return response.data;
}

export async function advisorCourseSearchPair(pair: searchPairAdvisor) {
  const response = await api.get(
    `/advisor-courses/search/pair/?advisorId=${pair.advisorId}&courseId=${pair.courseId}`,
  );
  console.log({ response });
  return response.data;
}
