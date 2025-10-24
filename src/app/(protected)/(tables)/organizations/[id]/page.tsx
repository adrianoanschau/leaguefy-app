import { notFound } from "next/navigation";

import { PageShell } from "@/components/layout/page-shell";
import { EntityDataTable } from "@/components/shared/entity-data-table";

import {
  createOrUpdateMember,
  deleteMember,
} from "../actions";
import { MemberForm } from "../components/member-form";
import { getOrganizationById, getOrganizationMembers } from "../data";

interface OrgDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function OrganizationDetailPage({ params }: OrgDetailPageProps) {
  const orgId = (await params).id;
  const { data: organization, error: orgError } = await getOrganizationById(orgId);

  if (orgError || !organization) {
    notFound();
  }

  const { members, error: membersError } = await getOrganizationMembers(orgId);

  return (
    <PageShell title={organization.name}>
      <section>
        <h2 className="text-xl font-semibold mb-4">Configurações</h2>
        <p>Formulário de edição da organização (nome, etc.) virá aqui.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">Membros</h2>
        
        <EntityDataTable
          data={members}
          error={membersError}
          columns={[
            { column: "role", header: "Função" },
          ]}
          createButtonText="Convidar Membro"
          drawerProps={{
            title: "Convidar Membro",
            subtitle: "Selecione um usuário e sua função.",
          }}
          formComponent={MemberForm}
          onSubmitForm={createOrUpdateMember}
          onDelete={deleteMember}
        />
      </section>
    </PageShell>
  );
}