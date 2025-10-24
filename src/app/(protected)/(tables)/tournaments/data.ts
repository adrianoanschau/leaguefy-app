import { createClient } from "@/lib/supabase/server";

export type Tournament = {
  id: string;
  name: string;
  created_at: string;
};

export async function getTournaments(): Promise<{
  data: Tournament[];
  error: string | null;
}> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("Tournament")
    .select("id, name, created_at");

  if (error) {
    console.error("Erro ao buscar torneios:", error.message);
    return { data: [], error: error.message };
  }

  return { data: (data as Tournament[]) || [], error: null };
}