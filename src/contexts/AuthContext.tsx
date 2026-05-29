import { useState } from "react";
import type { ReactNode } from "react";
import { loginRequest } from "../services/authService";
import type { LoginData, LoginResponse } from "../services/authService";
import { AuthContext } from "./authContextObject";

interface AuthProviderProps {
  children: ReactNode;
}

function getStoredUser(): LoginResponse["data"]["user"] | null {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    return null;
  }

  return JSON.parse(storedUser);
}

function getStoredToken(): string | null {
  return localStorage.getItem("token");
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<LoginResponse["data"]["user"] | null>(getStoredUser);
  const [token, setToken] = useState<string | null>(getStoredToken);

  const isAuthenticated = !!user && !!token;

  async function signIn(data: LoginData): Promise<void> {
    const response = await loginRequest(data);

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));

    setToken(response.data.token);
    setUser(response.data.user);
  }

  function signOut(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
