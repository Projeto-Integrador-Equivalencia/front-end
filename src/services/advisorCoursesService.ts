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
  try{
    const response = await api.post<advisorCourseResponse>(
      "/advisor-courses",
      param,
    );
    console.log({ response });
    return response.data;
  } catch (error) {
    console.error("Erro ao criar vinculo de curso com advisor/orientador", error);
    throw error;
  }
}

export async function advisorCourseDelete(id: number) {
  try{
    const response = await api.delete<advisorCourseResponse>(
      `/advisor-courses/delete/${id}`,
    );
    console.log({ response });
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar um vinculo de curso com advisor/orientador", error);
    throw error;
  }
}

export async function advisorCourseGetById(id: number): Promise<advisorCourse> {
  try{
    const response = await api.get<advisorCourse>(`/advisor-courses/${id}`);
    console.log({ response });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar id ${id} do vinculo de curso com advisor/orientador:`, error);
    throw error;
  }
}

export async function advisorCourseGetByAdvisorId(id: number) {
  try{
    const response = await api.get(`/advisor-courses/advisor/${id}`);
    console.log({ response });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar vinculo de curso com advisor/orientador pelo ID: ${id} do advisor/orientador:`, error);
    throw error;
  }
}

export async function advisorCourseGetByCourseId(id: number) {
  try{
    const response = await api.get(`/advisor-courses/course/${id}`);
    console.log({ response });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar vinculo de curso com advisor/orientador pelo ID: ${id} do curso:`, error);
    throw error;
  }
}

export async function advisorCourseSearchPair(pair: searchPairAdvisor) {
  try{
    const response = await api.get(
      `/advisor-courses/search/pair/?advisorId=${pair.advisorId}&courseId=${pair.courseId}`,
    );
    console.log({ response });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar vinculo de curso com advisor/orientador pelo ID do curso: ${pair.courseId} e pelo id do Advisor ${pair.advisorId}`, error);
    throw error;
  }
}
