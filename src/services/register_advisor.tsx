interface RegisterAdvisorData {
  name: string;
  email: string;
  cpf: string;
  password: string;
  courseId: number;
}

function getHeaders(token: string) {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function registerAdvisor(data: RegisterAdvisorData, token: string) {
  const advisorResponse = await fetch("http://localhost:3000/advisors", {
    method: "POST",
    headers: getHeaders(token),
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
      headers: getHeaders(token),
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
