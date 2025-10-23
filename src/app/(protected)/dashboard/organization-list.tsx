"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetOrganizationsQuery } from "@/gql/generated";
import { GetOrganizationsQuery } from "@/gql/graphql";

export default function OrganizationList() {
  const { data, isLoading, error } = useGetOrganizationsQuery<
    GetOrganizationsQuery,
    { message?: string }
  >();

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-3 gap-4">
        <Skeleton className="h-32" />
        <Skeleton className="h-32" />
        <Skeleton className="h-32" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center border rounded-lg bg-destructive/10 text-destructive-foreground">
        <p>
          <strong>Erro ao buscar suas organizações:</strong> {error.message}
        </p>
        <p className="text-sm mt-2">
          Verifique sua política de RLS (Row Level Security) no Supabase.
        </p>
      </div>
    );
  }

  const organizations = data?.organizationCollection?.edges || [];

  if (organizations.length === 0) {
    return (
      <div className="p-8 text-center border-2 border-dashed rounded-lg">
        <h3 className="text-lg font-semibold">
          Nenhuma organização encontrada
        </h3>
        <p className="text-muted-foreground mt-2">
          Que tal criar a sua primeira?
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {organizations.map((edge) => (
        <Card
          key={edge.node.id}
          className="hover:shadow-md transition-shadow cursor-pointer"
        >
          <CardHeader>
            <CardTitle>{edge.node.name}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
