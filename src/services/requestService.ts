import { getRequestInfo, CreateRequestInput, CreateRequestResponse, assignSuccess, GetRequestsListByStudentIdResponse } from '@/interfaces/requests';
import { api } from '@/services/api'; 

export async function createRequest(param: CreateRequestInput): Promise<CreateRequestResponse> {
  const response = await api.post<CreateRequestResponse>("/requests/",param);
  console.log("Resposta bruta do Axios:", response);
  console.log("Dados que serão retornados (.data):", response.data);
  return response.data;
}

export async function getRequestById(id: number | string): Promise<getRequestInfo> {
  const response = await api.get<getRequestInfo>(`/requests/${id}`);
  console.log("Resposta bruta do Axios:", response);
  console.log("Dados que serão retornados (.data):", response.data);
  return response.data;
}

export async function deleteRequestById(id: number | string): Promise<void> {
  const response = await api.delete<void>(`/requests/${id}`);
  return response.data;
}

export async function assignAdvisorToRequest(id: number | string): Promise<assignSuccess>{
  const response = await api.patch<assignSuccess>(`/requests/${id}`);
  return response.data;
}

export async function getRequestByStudentId(id: number | string): Promise<GetRequestsListByStudentIdResponse>{
  const response = await api.get<GetRequestsListByStudentIdResponse>(`/requests/student/${id}`);
  console.log("Resposta bruta do Axios:", response);
  console.log("Dados que serão retornados (.data):", response.data);
  return response.data;
  
}