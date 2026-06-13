import { Course, GetCourseByCodeResponse, GetCourseByIdResponse, GetCoursesResponse, RegisterCourseData, RegisterCourseResponse } from "@/interfaces/course";
import { api } from "./api";

//------------------------Cadastro------------------------//

export async function registerCourse(
  data: RegisterCourseData,
): Promise<RegisterCourseResponse> {
  try{
    const response = await api.post<RegisterCourseResponse>("/courses", data);
    console.log({ response });
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar curso:", error);
    throw error;
  }
};

//------------------------Busca------------------------//

export async function getCourses(): Promise<Course[]> {
  try{
    const response = await api.get<GetCoursesResponse>("/courses");
    console.log({ response });
    return response.data.data.map((course) => course.props);
  } catch (error) {
    console.error("Erro ao buscar todos os cursos:", error);
    throw error;
  }
};

//------------------------Busca por código------------------------//

export async function getCourseByCode(
  code: string,
): Promise<Course> {
  try{
    const response = await api.get<GetCourseByCodeResponse>(`/courses/search/${code}`);
    console.log({ response });
    return response.data.data;
  } catch (error) {
    console.error(`Erro ao buscar curso pelo codigo ${code}:`, error);
    throw error;
  }
};

//------------------------Busca por id------------------------//

export async function getCourseById(
  id: number,
): Promise<Course> {
  try{
    const response = await api.get<GetCourseByIdResponse>(`/courses/${id}`);
    console.log({ response });
    return response.data.message;
  } catch (error) {
    console.error(`Erro ao buscar curso pelo ID ${id}:`, error);
    throw error;
  }
};