// ==========================================
// ENTIDADES E SUB-PROPS (REUTILIZÁVEIS)
// ==========================================

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

// ==========================================
// GET REQUEST BY ID
// ==========================================

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

// ==========================================
// POST CREATE REQUEST (NOVAS INTERFACES)
// ==========================================

// Payload de entrada para a criação de uma experiência
export interface CreateExperienceInput {
  role: string;
  cnpj: string;
  startDate: string; // Formato YYYY-MM-DD
  endDate: string;   // Formato YYYY-MM-DD
}

// Payload completo enviado no método POST (antes de montar o FormData)
export interface CreateRequestInput {
  studentId: number;
  equivalencyId: number;
  advisorId: number | null;
  experiences: CreateExperienceInput[];
  files: File[]; // Array de arquivos vindos do input tipo file
}

// Resposta da API ao criar uma requisição com sucesso
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
      updatedAt: string; // ISO Date String
      createdAt: string; // ISO Date String
    };
  };
}