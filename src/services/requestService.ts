import {
  getRequestInfo,
  CreateRequestInput,
  CreateRequestResponse,
} from "@/interfaces/requests";
import { api } from "@/services/api";
import { headers } from "next/headers";

export async function createRequest(
  param: CreateRequestInput,
  token: string,
): Promise<CreateRequestResponse> {
  const formData = new FormData();
  formData.append("studentId", param.studentId.toString());
  formData.append("equivalencyId", param.equivalencyId.toString());

  if (param.advisorId !== undefined && param.advisorId !== null) {
    formData.append("advisorId", param.advisorId.toString());
  }

  formData.append("experiences", JSON.stringify(param.experiences));

  if (param.files && param.files.length > 0) {
    param.files.forEach((file) => {
      formData.append("files", file);
    });
  }

  const response = await api.post<CreateRequestResponse>(
    "/requests/",
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;

  //const response = await api.post<CreateRequestResponse>("/requests/",param);
  //console.log("Resposta bruta do Axios:", response);
  //console.log("Dados que serão retornados (.data):", response.data);
}

export async function getRequestById(
  id: number | string,
): Promise<getRequestInfo> {
  const response = await api.get<getRequestInfo>(`/requests/${id}`);
  console.log("Resposta bruta do Axios:", response);
  console.log("Dados que serão retornados (.data):", response.data);
  return response.data;
}

export async function deleteRequestById(id: number | string): Promise<void> {
  const response = await api.delete<void>(`/requests/${id}`);
  return response.data;
}

export async function assignAdvisorToRequest(
  id: number | string,
): Promise<void> {
  const response = await api.patch<void>(`/requests/${id}`);
  return response.data;
}

//export async function getRequestByStudentId(id: number | string): Promise<GetRequestsListByStudentIdResponse>{
//  const response = await api.get<GetRequestsListByStudentIdResponse>(`/requests/student/${id}`);
//  console.log("Resposta bruta do Axios:", response);
//  console.log("Dados que serão retornados (.data):", response.data);
//  return response.data;
//
//}
