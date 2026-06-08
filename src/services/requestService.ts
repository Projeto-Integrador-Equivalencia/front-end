import {
  getRequestInfo,
  CreateRequestInput,
  CreateRequestResponse,
} from "@/interfaces/requests";
import { api } from "@/services/api";

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
}

export async function getRequestById(
  id: number | string,
  token: string,
): Promise<getRequestInfo> {
  const response = await api.get<getRequestInfo>(`/requests/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

import { RequestListItem } from "@/interfaces/requests";

export async function requestGetByStudentId(
  id: number | string,
  token: string,
): Promise<RequestListItem[]> {
  const response = await api.get<{ data: RequestListItem[] }>(
    `/requests/student/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data.data;
}

export async function deleteRequestById(
  id: number | string,
  token: string,
): Promise<void> {
  const response = await api.delete<void>(`/requests/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function assignAdvisorToRequest(
  id: number | string,
  token: string,
): Promise<void> {
  const response = await api.patch<void>(
    `/requests/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
}
