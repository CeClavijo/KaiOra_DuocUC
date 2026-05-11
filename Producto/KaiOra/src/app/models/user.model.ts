export interface UserBase {
  uid: string;
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Admin extends UserBase {
  role: 'admin';
}

export interface Teacher extends UserBase {
  role: 'profesor';
  especialidad?: string;
  cursos?: string[]; // IDs de cursos
  fichasTecnicas?: string[];
}

export interface Student extends UserBase {
  role: 'alumno';
  curso?: string; // ID del curso
}

export type AppUser = Admin | Teacher | Student;

