export interface advisorCourse {
  id: number;
  advisorId: number;
  courseId: number;
  expirationDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface advisorCourseResponse {
  status: string;
  data: {
    advisorCourse: advisorCourse;
  };
}

export interface createAdvisorCourse {
  advisorId: number;
  courseId: number;
  expirationDate: string;
}

export interface searchPairAdvisor {
  advisorId: number;
  courseId: number;
}
