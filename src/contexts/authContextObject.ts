import { createContext } from "react";
import type { LoginData, LoginResponse, LoginUser } from "../services/authService";

interface AuthContextData {
  user: LoginUser | null;
  token: string | null;
  isAuthenticated: boolean;
  signIn: (data: LoginData) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData);
