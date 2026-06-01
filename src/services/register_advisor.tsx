export async function getCourses() {
  const response = await fetch("http://localhost:3000/courses");

  const text = await response.text();

  console.log(text);

  if (!response.ok) {
    throw new Error("Erro ao buscar cursos");
  }

  return JSON.parse(text);
}

export async function registerAdvisor(data: any) {
  const advisorResponse = await fetch("http://localhost:3000/advisors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      password: data.password,
    }),
  });

  const advisorText = await advisorResponse.text();

  console.log(advisorText);

  if (!advisorResponse.ok) {
    throw new Error("Erro ao cadastrar orientador");
  }

  const advisorResult = JSON.parse(advisorText);

  const advisorId = advisorResult?.data?.props?.id || advisorResult?.data?.id;

  const expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 1);

  const advisorCourseResponse = await fetch(
    "http://localhost:3000/advisor-courses",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        advisorId,
        courseId: data.courseId,
        expirationDate: expirationDate.toISOString(),
      }),
    },
  );

  const advisorCourseText = await advisorCourseResponse.text();

  console.log(advisorCourseText);

  if (!advisorCourseResponse.ok) {
    throw new Error("Erro ao vincular orientador ao curso");
  }

  return advisorResult;
}
