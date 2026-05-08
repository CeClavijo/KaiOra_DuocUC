export interface User {
  uid: string;
  email: string;
  role: 'admin' | 'profesor' | 'alumno';
  password: string;
  name: string;
}

