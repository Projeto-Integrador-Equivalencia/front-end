import { createContext } from "react";
import type { LoginData, LoginResponse } from "../services/authService";

interface AuthContextData {
  user: LoginResponse["data"]["user"] | null;
  token: string | null;
  isAuthenticated: boolean;
  signIn: (data: LoginData) => Promise<void>;
  signOut: () => void;
  loading: boolean;
}

export const AuthContext = createContext({} as AuthContextData);
