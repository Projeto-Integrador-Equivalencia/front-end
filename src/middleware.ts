import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 1. Recupera o token e a role direto dos cookies enviados pelo navegador
//   const token = request.cookies.get("token")?.value;
//   const userRole = request.cookies.get("role")?.value;

//   const { pathname } = request.nextUrl;

//   console.log({pathname,token,userRole})

//   // 2. SE NÃO ESTIVER LOGADO: 
//   // Bloqueia o acesso a qualquer página privada e manda para o login
//   if (!token && pathname !== "/login") {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   // 3. SE JÁ ESTIVER LOGADO:
//   // Impede o usuário de acessar a página de login novamente e o joga para o seu respectivo painel
//   if (token && pathname === "/login") {
//     if (userRole === "administrator") {
//       return NextResponse.redirect(new URL("/administrator/dashboard", request.url));
//     }
//     if (userRole === "advisor") {
//       return NextResponse.redirect(new URL("/advisor/requestList", request.url));
//     }
//     return NextResponse.redirect(new URL("/student/dashboard", request.url));
//   }

//   // Rota do Estudante (student): Apenas estudantes e administradores entram
//   if (pathname.startsWith("/student") && userRole !== "student" && userRole !== "administrator") {
//     return NextResponse.redirect(new URL("/sem-acesso", request.url));
//   }

//   // Rota do Orientador (advisor): Apenas orientadores e administradores entram
//   if (pathname.startsWith("/advisor") && userRole !== "advisor" && userRole !== "administrator") {
//     return NextResponse.redirect(new URL("/sem-acesso", request.url));
//   }

//   // Rota do Administrador (administrator):
//   if (pathname.startsWith("/administrator") && userRole !== "administrator") {
//     return NextResponse.redirect(new URL("/sem-acesso", request.url));
//   }

//   // Se passou por todas as regras, permite que a página carregue normalmente
//   return NextResponse.next();
// }

// // 4. CONFIGURAÇÃO DE MONITORAMENTO:
// // Define quais rotas o Next.js deve interceptar com este middleware
// export const config = {
//   matcher: [
//     "/login",
//     "/administrator/:path*",
//   "/advisor/:path*",
//   "/student/:path*",
// ],
};