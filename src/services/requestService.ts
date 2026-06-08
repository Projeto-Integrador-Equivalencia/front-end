import { getRequestInfo, Request } from "@/interfaces/requests";
import { api } from "../services/api";

interface RequestEntity {
  props: Request;
}

export interface GetRequestResponse {
  status: string;
  data: RequestEntity[];
}

export async function requestGetByStudentId(
  id: number,
  token?: string,
): Promise<Request[]> {
  const response = await api.get<GetRequestResponse>(
    `/requests/student/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  console.log({ response });
  return response.data.data.map((req) => req.props);
}
