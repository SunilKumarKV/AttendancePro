export type Role = 'Admin' | 'Professor';

export interface Student {
  name: string;
  rollNo: string;
  phone: string;
  parentPhone: string;
  subject?: string;
  attendancePercentage?: number;
  status?: 'Present' | 'Absent';
}

export interface User {
  name: string;
  email: string;
  role: Role;
  phone?: string;
  college?: string;
  department?: string;
  avatar?: string;
  subject?: string;
  employeeId?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
