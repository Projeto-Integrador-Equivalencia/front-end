export async function registerAdministrator(data: any) {
  const response = await fetch("http://localhost:3000/administrators", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const text = await response.text();

  console.log(text);

  if (!response.ok) {
    throw new Error("Erro ao cadastrar administrador");
  }

  return JSON.parse(text);
}
