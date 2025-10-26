import { PageShell } from "@/components/layout/page-shell";

import TournamentsTable from "./components/table";
import { getTournaments } from "./data";

export default async function TournamentsPage() {
  const { data, error } = await getTournaments();

  return (
    <PageShell title="Torneios">
      <TournamentsTable
        data={data}
        error={error}
      />
    </PageShell>
  );
}
