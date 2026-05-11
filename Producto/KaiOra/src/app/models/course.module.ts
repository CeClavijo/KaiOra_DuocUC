import { Teacher, Student } from './user.model';

// Versión simplificada de Student para usar en Course
export interface StudentInCourse {
  uid: string;
  name: string;
  email: string;
}

export interface Course {
  id: string; // TRS203 (auto-generado)
  nombre: string;
  profesor: Teacher;
  estudiantes: StudentInCourse[]; // Lista de alumnos simplificada
  createdAt: Date;
  updatedAt: Date;
}
