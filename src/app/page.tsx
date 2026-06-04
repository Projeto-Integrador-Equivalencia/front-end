import { redirect } from "next/navigation";

export default function Home() {
  // Assim que alguém acessar o site, ele é jogado para o /login
  redirect("/login");
}
