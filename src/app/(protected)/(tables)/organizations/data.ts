import { createClient } from "@/lib/supabase/server";

export type Organization = {
  id: string;
  name: string;
  created_at: string;
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