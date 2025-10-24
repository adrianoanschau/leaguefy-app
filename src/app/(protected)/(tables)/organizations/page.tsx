
import { PageShell } from "@/components/layout/page-shell";
import { EntityDataTable } from "@/components/shared/entity-data-table";

import { createOrUpdateOrganization, deleteOrganization } from "./actions";
import { OrganizationForm } from "./components/form";
import { getOrganizations } from "./data";

export default async function OrganizationsPage() {
  const { data, error } = await getOrganizations();

  return (
    <PageShell title="Organizações">
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
        onSubmitForm={createOrUpdateOrganization}
        onDelete={deleteOrganization}
      />
    </PageShell>
  );
}
