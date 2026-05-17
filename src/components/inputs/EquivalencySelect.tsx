"use client";

import { useRouter } from "next/navigation";

export default function EquivalencySelect() {
  const router = useRouter();

  const routes: Record<string, string> = {
    CTPS: "/student/equivalency/ctps_equivalency",

    Militar: "/student/equivalency/military_equivalency",

    "Autônomo Inscrito":
      "/student/equivalency/self_employed_registered_equivalency",

    "Autônomo não Inscrito":
      "/student/equivalency/self_employed_unregistered_equivalency",

    Empregador:
      "/student/equivalency/owner_equivalency",
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selected = e.target.value;

    if (routes[selected]) {
      router.push(routes[selected]);
    }
  };

  return (
    <select
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-white text-sm text-zinc-800 outline-none"
    >
      <option value="CTPS">CTPS</option>

      <option value="Militar">Militar</option>

      <option value="Autônomo Inscrito">
        Autônomo Inscrito
      </option>

      <option value="Autônomo não Inscrito">
        Autônomo não Inscrito
      </option>

      <option value="Empregador">
        Empregador
      </option>
    </select>
  );
}