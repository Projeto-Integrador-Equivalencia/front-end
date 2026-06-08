export interface Documento {
  id: number;
  requestId: number;
  path: string;
  createdAt: string;
  updatedAt: string;
}

export interface ExperienciaProfissional {
  id: number;
  role: string;
  cnpj: string;
  startDate: string;
  endDate: string;
  requestId: number;
  createdAt: string;
  updatedAt: string;
}

export interface LogProps {
  id: string;
  requestId: number;
  author: string;
  authorRole: string;
  action: string;
  createdAt: string;
}

export interface RequestListItem {
  props: {
    id: number;
    protocol: string;
    status: string;
    observation: string;
    studentId: number;
    advisorId: number | null;
    equivalencyId: number;
    createdAt: string;
    updatedAt: string;
    Documents: Documento[];
    Professional_Experience: ExperienciaProfissional[];
  };
}

export interface getRequestInfo {
  status: string;
  data: {
    request: {
      props: {
        id: number;
        protocol: string;
        status: string;
        observation: string;
        studentId: number;
        advisorId: number | null;
        equivalencyId: number;
        createdAt: string;
        updatedAt: string;
        Documents: Documento[];
        Professional_Experience: ExperienciaProfissional[];
      };
    };
    logs: {
      props: LogProps;
    }[];
  };
}

export interface CreateExperienceInput {
  role: string;
  cnpj: string;
  startDate: string;
  endDate: string;
}

export interface CreateRequestInput {
  studentId: number;
  equivalencyId: number;
  advisorId: number | null;
  experiences: CreateExperienceInput[];
  files: File[];
}

export interface CreateRequestResponse {
  status: string;
  data: {
    props: {
      id: number;
      studentId: number;
      equivalencyId: number;
      Professional_Experience: ExperienciaProfissional[];
      protocol: string;
      status: string;
      observation: string;
      Documents: Documento[];
      updatedAt: string;
      createdAt: string;
    };
  };
}
