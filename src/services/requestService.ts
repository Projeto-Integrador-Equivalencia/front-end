import {
  getRequestInfo,
  CreateRequestInput,
  CreateRequestResponse,
  RequestListItem,
} from "@/interfaces/requests";
import { api } from "@/services/api";

export async function createRequest(
  param: CreateRequestInput,
): Promise<CreateRequestResponse> {
  try {
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
    const response = await api.post<CreateRequestResponse>("/requests/", formData, 
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });
    
    console.log({ response });
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar uma solicitação de equivalência:", error);
    throw error;
  }
}

export async function getRequestById(
  id: number | string,
): Promise<getRequestInfo> {
  try {
    const response = await api.get<getRequestInfo>(`/requests/${id}`);
    console.log({ response });
    return response.data;
  } catch (error) {
    console.error(
      `Erro ao buscar solicitação de equivalência pelo ID: ${id}:`,
      error,
    );
    throw error;
  }
}

export async function requestGetByStudentId(
  id: number | string,
): Promise<RequestListItem[]> {
  try {
    const response = await api.get<{ data: RequestListItem[] }>(
      `/requests/student/${id}`,
    );
    console.log({ response });
    return response.data.data;
  } catch (error) {
    console.error(
      `Erro ao buscar solicitação de equivalência pelo ID do estudante: ${id}:`,
      error,
    );
    throw error;
  }
}

export async function deleteRequestById(id: number | string): Promise<void> {
  try {
    const response = await api.delete<void>(`/requests/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      `Erro ao deletar solicitação de equivalência de ID: ${id}:`,
      error,
    );
    throw error;
  }
}

export async function assignAdvisorToRequest(
  id: number | string,
): Promise<void> {
  try {
    const response = await api.patch<void>(`/requests/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      "Erro ao juntar advisor com a solicitação de equivalência:",
      error,
    );
    throw error;
  }
}
//------------------------Atualização de dados da Solicitação------------------------//

export type RequestStatus = "Pendente" | "Aprovado" | "Reprovado";

export async function updateRequestStatus(
  id: number | string,
  status: RequestStatus,
): Promise<void> {
  await api.patch(`/requests/${id}/status`, { status });
}

export async function updateRequestObservation(
  id: number | string,
  observation: string,
): Promise<void> {
  await api.patch(`/requests/${id}/observation`, { observation });
}
