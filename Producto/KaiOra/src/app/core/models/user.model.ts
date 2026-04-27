export interface User {
  uid: string;
  email: string;
  displayName: string;
  role: 'profesor' | 'estudiante';
  photoURL?: string;
  createdAt: Date;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}