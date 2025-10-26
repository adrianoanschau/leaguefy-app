import { notFound } from "next/navigation";

import { PageShell } from "@/components/layout/page-shell";

import { TournamentEditor } from "../components/editor/editor";
import { getTournamentById } from "../data";

interface TournamentDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TournamentDetailPage({ params }: TournamentDetailPageProps) {
  const tournamentId = (await params).id;
  const { data: tournament, error: orgError } = await getTournamentById(tournamentId);

  if (orgError || !tournament) {
    notFound();
  }

  return (
    <PageShell title={tournament.name}>
      <TournamentEditor />
    </PageShell>
  );
}