export interface EquivalencyData {
  
  status: string,
  data: [
    {
      props: {
        id: number,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        courseId: number
      }
    }
  ]
}

export interface EquivalencyListResponse {
  status: string;
  data: {
    props: EquivalencyData;
  }[];
}

export interface EquivalencySearchResponse {
  status: string;
  data: EquivalencyData;
}

export interface CreateEquivalency {
  name: string;
  description: string;
  courseId: number;
}

export interface EquivalencyCreateResponse {
  status: string;
  data?: any; 
}

export interface UpdateEquivalency {
  name?: string;
  description?: string;
  courseId?: number;
}

export interface EquivalencyUpdateResponse {
  status: string;
  data?: any;
}
