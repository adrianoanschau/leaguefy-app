"use client";

import { redirect } from "next/navigation";

import { EntityDataTable } from "@/components/shared/entity-data-table";

import { createOrUpdateTournament, deleteTournament } from "../actions";
import { Tournament } from "../data";

import { TournamentForm } from "./form";

interface TournamentsTableProps {
  data: Tournament[];
  error: string | null;
}

export default async function TournamentsTable(
    { data, error }: TournamentsTableProps,
) {
  return (
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
        onRowClick={(row) => redirect(`/tournaments/${row.id}`)}
        onSubmitForm={createOrUpdateTournament}
        onDelete={deleteTournament}
    />
  );
}
