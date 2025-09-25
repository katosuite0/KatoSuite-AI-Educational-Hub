export interface User {
  id: string;
  email: string;
  name: string;
  role: 'educator' | 'admin' | 'parent';
}

export interface LessonPlan {
  id: string;
  title: string;
  description: string;
  ageGroup: string;
  duration: number;
  framework: 'HDLH' | 'Flight' | 'Custom';
  createdAt: string;
  updatedAt: string;
}

export interface Child {
  id: string;
  name: string;
  birthDate: string;
  parentIds: string[];
  profileImage?: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}