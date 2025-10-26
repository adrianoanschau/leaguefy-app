"use client";

import { redirect } from "next/navigation";

import { EntityDataTable } from "@/components/shared/entity-data-table";

import { createOrUpdateOrganization, deleteOrganization } from "../actions";
import { Organization } from "../data";

import { OrganizationForm } from "./form";

interface OrganizationsTableProps {
  data: Organization[];
  error: string | null;
}

export default async function OrganizationsTable(
    { data, error }: OrganizationsTableProps,
) {
  return (
    <EntityDataTable
        data={data}
        error={error}
        columns={[
            { column: 'name', header: 'Nome' },
            { column: 'created_at', header: 'Data de Criação', type: 'date' },
        ]}
        createButtonText="Criar Nova Organização"
        drawerProps={{
            title: 'Nova Organização',
            subtitle: 'Preencha os dados para criar sua nova organização.'
        }}
        formComponent={OrganizationForm}
        onRowClick={(row) => redirect(`/organizations/${row.id}`)}
        onSubmitForm={createOrUpdateOrganization}
        onDelete={deleteOrganization}
    />
  );
}
