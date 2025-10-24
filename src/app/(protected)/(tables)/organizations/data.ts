import { createClient } from "@/lib/supabase/server";

export type Organization = {
  id: string;
  name: string;
  created_at: string;
};

export type OrganizationMember = {
  id: string;
  user_id: string;
  org_id: string;
  role: "manager" | "member";
};

export async function getOrganizations(): Promise<{
  data: Organization[];
  error: string | null;
}> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("Organization")
    .select("id, name, created_at");

  if (error) {
    console.error("Erro ao buscar organizações:", error.message);
    return { data: [], error: error.message };
  }

  return { data: (data as Organization[]) || [], error: null };
}

export async function getOrganizationById(id: string): Promise<{
  data: Organization | null;
  error: string | null;
}> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("Organization")
    .select("id, name, created_at")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Erro ao buscar organização:", error.message);
    return { data: null, error: error.message };
  }
  return { data: data as Organization, error: null };
}

export async function getOrganizationMembers(orgId: string): Promise<{
  members: OrganizationMember[];
  error: string | null;
}> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("OrganizationMember")
    .select(
      "id, role, Profile ( id )"
    )
    .eq("org_id", orgId);

  if (error) {
    console.error("Erro ao buscar membros:", error.message);
    return { members: [], error: error.message };
  }

  const members: OrganizationMember[] = data.map((item) => ({
    id: item.id,
    role: item.role,
    org_id: orgId,
    user_id: item.Profile.id,
  }));

  return { members, error: null };
}