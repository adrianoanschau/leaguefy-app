import OrganizationList from "./organization-list";

export default function DashboardPage() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Minhas Organizações</h2>
      <OrganizationList />
    </>
  );
}
