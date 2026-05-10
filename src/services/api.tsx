/*
    Usem essa função toda vez que precisar checar por uma API, ela vai verificar se o token ainda é válido.
    Caso seja prossegue normal, caso não seja desloga você e volta pra pagina de login
*/

export async function apiFetch(url: string, options: RequestInit = {}) {
  const token = localStorage.getItem("token");

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });

  if (response.status === 401) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
    return;
  }

  return response;
}

