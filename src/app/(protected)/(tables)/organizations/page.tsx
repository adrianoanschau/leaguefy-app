import { PageShell } from "@/components/layout/page-shell";

import OrganizationsTable from "./components/table";
import { getOrganizations } from "./data";

export default async function OrganizationsPage() {
  const { data, error } = await getOrganizations();

  return (
    <PageShell title="Organizações">
      <OrganizationsTable
        data={data}
        error={error}
      />
    </PageShell>
  );
}
