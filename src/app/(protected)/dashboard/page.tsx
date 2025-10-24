import { PageShell } from "@/components/layout/page-shell";

import OrganizationList from "./organization-list";

export default function DashboardPage() {
  return (
    <PageShell title="Dashboard">
      <h2 className="text-xl font-semibold mb-4">Minhas Organizações</h2>
      <OrganizationList />
    </PageShell>
  );
}
