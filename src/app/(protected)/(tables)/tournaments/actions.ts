"use server";

import { revalidatePath } from "next/cache";

import { FormState } from "@/_types";
import { createClient } from "@/lib/supabase/server";

import { tournamentSchema, updateTournamentSchema } from "./schema";

export async function createOrUpdateTournament(
  formData: FormData
): Promise<FormState> {
  if (formData.has('id')) {
    return await updateTournament(formData);
  }

  return await createTournament(formData);
}

async function createTournament(
  formData: FormData
): Promise<FormState> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { success: false, message: "Não autorizado." };
  }

  const validatedFields = tournamentSchema.safeParse({
    name: formData.get("name"),
  });

  if (!validatedFields.success) {
    console.log({ validatedFields });
    return {
      success: false,
      message: '',
      // message:
      //   validatedFields.error.name.errors[0]?.message || "Erro de validação.",
    };
  }

  const { name } = validatedFields.data;

  const { error } = await supabase.from("Tournament").insert({
    name,
  });

  if (error) {
    console.error("Erro Supabase:", error);
    return { success: false, message: `Erro ao criar: ${error.message}` };
  }

  revalidatePath("/tournaments");

  return { success: true, message: "Torneio criado com sucesso!" };
}

async function updateTournament(
  formData: FormData
): Promise<FormState> {
  const supabase = await createClient();

  const validatedFields = updateTournamentSchema.safeParse({
    id: formData.get("id"),
    name: formData.get("name"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: '',
      // message: validatedFields.error.errors[0]?.message || "Erro de validação.",
    };
  }

  const { id, name } = validatedFields.data;

  const { error } = await supabase
    .from("Tournament")
    .update({ name })
    .eq("id", id);

  if (error) {
    console.error("Erro Supabase Update:", error);
    return { success: false, message: `Erro ao atualizar: ${error.message}` };
  }

  revalidatePath("/tournaments");
  return { success: true, message: "Torneio atualizado com sucesso!" };
}

export async function deleteTournament(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("Tournament")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Erro ao deletar:", error);
    return { success: false, message: error.message };
  }

  revalidatePath("/tournaments");
  return { success: true, message: "Torneio excluído." };
}