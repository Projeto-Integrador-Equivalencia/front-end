"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import CardWhite from "@/components/cards/CardWhite";
import { PageHeader } from "@/components/headers/PageHeader";
import { DecorativeDots } from "@/components/ui/DecorativeDots";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Option, Select } from "@/components/ui/Select";
import {
  getRequestById,
  RequestStatus,
  updateRequestObservation,
  updateRequestStatus,
} from "@/services/requestService";
import { getRequestInfo } from "@/interfaces/requests";
import { api } from "@/services/api";
import { useAuth } from "@/hooks/userAuth";

const statusOptions: RequestStatus[] = ["Pendente", "Aprovado", "Reprovado"];

export default function EditarSolicitacaoPage() {
  const { id } = useParams<{ id: string }>();
  const { token } = useAuth();
  const router = useRouter();

  const [solicitation, setSolicitation] = useState<
    getRequestInfo["data"] | null
  >(null);
  const [observation, setObservation] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const requestProps = solicitation?.request?.props;

  const statusList = useMemo(() => {
    const currentStatus = requestProps?.status as RequestStatus | undefined;

    if (!currentStatus) return statusOptions;

    return [
      currentStatus,
      ...statusOptions.filter((status) => status !== currentStatus),
    ];
  }, [requestProps?.status]);

  useEffect(() => {
    if (!id || !token) return;

    async function buscarDetalhes() {
      setLoading(true);
      setError("");

      try {
        const response = await getRequestById(String(id));

        const dados = response.data;

        setSolicitation(dados);
        setObservation(dados?.request?.props?.observation ?? "");
      } catch (err) {
        console.error("Erro ao carregar detalhes:", err);
        setError("Erro ao carregar os detalhes da solicitação.");
      } finally {
        setLoading(false);
      }
    }
    buscarDetalhes();
  }, [id, token]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!id || !requestProps) return;

    const form = event.currentTarget;

    const selectedStatus = form.querySelector<HTMLSelectElement>(
      "#request-status",
    )?.value as RequestStatus;

    const currentStatus = requestProps.status;
    const currentObservation = requestProps.observation ?? "";
    const nextObservation = observation.trim();

    const statusChanged = selectedStatus !== currentStatus;
    const observationChanged = nextObservation !== currentObservation;

    if (!statusChanged && !observationChanged) {
      setFeedback("Nenhuma alteração para salvar.");
      setError("");
      return;
    }

    setSaving(true);
    setError("");
    setFeedback("");

    try {
      if (statusChanged) {
        await updateRequestStatus(String(id), selectedStatus);
      }

      if (observationChanged) {
        await updateRequestObservation(String(id), nextObservation);
      }

      setFeedback("Solicitação atualizada com sucesso.");

      setTimeout(() => {
        router.push(`/advisor/request/${id}`);
      }, 1000);
    } catch (err: any) {
      console.error("Erro ao atualizar solicitação:", err);

      setError(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Erro ao atualizar a solicitação.",
      );
    } finally {
      setSaving(false);
    }
  }
  return (
    <div className="bg-c02 min-h-screen">
      <PageHeader
        description="Atualize o status da solicitação e informe uma observação, se necessário"
        title="Editar Solicitação."
      />

      <div className="pb-16 pt-16 flex flex-col items-center justify-center size-full max-w-5xl mx-auto px-4 gap-4">
        <div className="w-full flex justify-start">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors font-medium text-sm select-none cursor-pointer"
          >
            <span>Voltar para detalhes</span>
          </button>
        </div>

        <CardWhite className="w-3xl aspect-auto">
          {loading && (
            <p className="py-20 text-center font-semibold text-zinc-500">
              Carregando solicitação...
            </p>
          )}

          {error && (
            <p className="py-20 text-center font-semibold text-red-500">
              {error}
            </p>
          )}

          {!loading && !error && requestProps && (
            <form onSubmit={handleSubmit} className="w-fit max-w-3xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Atualizar Solicitação
              </h2>
              <div className="flex flex-col gap-1">
                <label className="font-semibold">Status:</label>
                <Select id="request-status">
                  {statusList.map((status) => (
                    <Option key={status} value={status}>
                      {status}
                    </Option>
                  ))}
                </Select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold">Observação</label>

                <textarea
                  id="request-observation"
                  name="observation"
                  value={observation}
                  onChange={(event) => setObservation(event.target.value)}
                  placeholder="Informe uma observação, se desejar."
                  rows={6}
                  className="font-semibold focus:outline-none focus:ring-2 rounded-md p-2 w-full bg-(--c01) border border-gray-300 focus:ring-blue-600 "
                />
              </div>

              {feedback && (
                <p className="text-sm font-semibold text-green-600">
                  {feedback}
                </p>
              )}

              <div className="mt-6 flex justify-end">
                <Button
                  type="submit"
                  label={saving ? "Salvando..." : "Salvar alterações"}
                />
              </div>
            </form>
          )}
        </CardWhite>

        <DecorativeDots variant="bottom" />
      </div>
    </div>
  );
}
