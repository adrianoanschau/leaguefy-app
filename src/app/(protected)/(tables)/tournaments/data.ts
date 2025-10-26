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

export async function getTournamentById(id: string): Promise<{
  data: Tournament | null;
  error: string | null;
}> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("Tournament")
    .select("id, name, created_at")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Erro ao buscar torneio:", error.message);
    return { data: null, error: error.message };
  }
  return { data: data as Tournament, error: null };
}