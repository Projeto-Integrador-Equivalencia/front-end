export async function registerCourse(data: any) {
  const response = await fetch("http://localhost:3000/courses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const text = await response.text();

  console.log(text);

  if (!response.ok) {
    throw new Error("Erro ao cadastrar");
  }

  return JSON.parse(text);
}
