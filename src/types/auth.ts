export type UserRole = 'manufacturer' | 'supplier' | 'distributor' | 'enterprise';

export interface User {
  id: string;
  username: string;
  role: UserRole;
  email: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}