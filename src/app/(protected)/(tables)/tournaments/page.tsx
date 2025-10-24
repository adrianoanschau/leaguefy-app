
import { PageShell } from "@/components/layout/page-shell";
import { EntityDataTable } from "@/components/shared/entity-data-table";

import { createOrUpdateTournament, deleteTournament } from "./actions";
import { TournamentForm } from "./components/form";
import { getTournaments } from "./data";

export default async function TournamentsPage() {
  const { data, error } = await getTournaments();

  return (
    <PageShell title="Torneios">
      <EntityDataTable
        data={data}
        error={error}
        columns={[
          { column: 'name', header: 'Nome' },
          { column: 'created_at', header: 'Data de Criação', type: 'date' },
        ]}
        createButtonText="Criar Novo Torneio"
        drawerProps={{
          title: 'Novo Torneio',
          subtitle: 'Preencha os dados para criar seu novo torneio.'
        }}
        formComponent={TournamentForm}
        onSubmitForm={createOrUpdateTournament}
        onDelete={deleteTournament}
      />
    </PageShell>
  );
}
