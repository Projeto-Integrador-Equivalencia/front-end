export async function login(email: string, password: string) {
  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Erro ao fazer login");
  }

  const result = await response.json();

  return result.data;
}

export function logout(){
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

/*
  Coloquem a função de Logout em cada pagina que o usuario estiver logado:

  function handleLogout() {
    logout();
    router.push("/login");
  }

  E no botão usa esse onClick:
  *Depois seria interessante criarmos um componente para botão de Logout

  return (
    <button onClick={handleLogout}>
      Sair
    </button>
  );
*/