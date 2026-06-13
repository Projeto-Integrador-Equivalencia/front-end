export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: string;
  data: {
    user: LoginUser;
    token: string;
  };
}

export interface LoginUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface recuperarSenha{
  email: string;
}

export interface message{
  message: string;
}
