"use client";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { loginRequest } from "../services/authService";
import type {
  LoginData,
  LoginResponse,
  LoginUser,
} from "../services/authService";
import { AuthContext } from "./authContextObject";
import Cookies from "js-cookie";

interface AuthProviderProps {
  children: ReactNode;
}

function getStoredUser(): LoginUser | null {
  const storedUser = Cookies.get("user");

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch {
    return null; // Evita quebras se o cookie estiver corrompido
  }
}

function getStoredToken(): string | null {
  return Cookies.get("token") || null;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<LoginUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = getStoredUser();
    const storedToken = getStoredToken();

    if (storedUser) setUser(storedUser);
    if (storedToken) setToken(storedToken);

    setLoading(false);
  }, []);

  const isAuthenticated = !!user && !!token;

  async function signIn(param: LoginData): Promise<void> {
    const loginResponse = await loginRequest(param);

    const tokenData = loginResponse.data.token;
    const userData = loginResponse.data.user;
    const roleData = loginResponse.data.user.role;

    // Salva nos Cookies perfeitamente para o Middleware ler
    Cookies.set("token", tokenData, { expires: 1, path: "/" });
    Cookies.set("user", JSON.stringify(userData), { expires: 1, path: "/" });
    Cookies.set("role", roleData, { expires: 1, path: "/" });

    console.log({ loginResponse });

    setToken(tokenData);
    setUser(userData);
  }

  function signOut(): void {
    Cookies.remove("token", {path: "/"});
    Cookies.remove("user", {path: "/"});
    Cookies.remove("role", { path: "/" });

    setToken(null);
    setUser(null);
  }

  if (loading) {
    return null;
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
