"use server";

import { revalidatePath } from "next/cache";

import { FormState } from "@/_types";
import { createClient } from "@/lib/supabase/server";

import { organizationSchema, updateOrganizationSchema } from "./schema";

export async function createOrUpdateOrganization(
  formData: FormData
): Promise<FormState> {
  if (formData.has('id')) {
    return await updateOrganization(formData);
  }

  return await createOrganization(formData);
}

async function createOrganization(
  formData: FormData
): Promise<FormState> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { success: false, message: "Não autorizado." };
  }

  const validatedFields = organizationSchema.safeParse({
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

  const { error } = await supabase.from("Organization").insert({
    name,
  });

  if (error) {
    console.error("Erro Supabase:", error);
    return { success: false, message: `Erro ao criar: ${error.message}` };
  }

  revalidatePath("/organizations");

  return { success: true, message: "Organização criada com sucesso!" };
}

async function updateOrganization(
  formData: FormData
): Promise<FormState> {
  const supabase = await createClient();

  const validatedFields = updateOrganizationSchema.safeParse({
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
    .from("Organization")
    .update({ name })
    .eq("id", id);

  if (error) {
    console.error("Erro Supabase Update:", error);
    return { success: false, message: `Erro ao atualizar: ${error.message}` };
  }

  revalidatePath("/organizations");
  return { success: true, message: "Organização atualizada com sucesso!" };
}

export async function deleteOrganization(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("Organization")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Erro ao deletar:", error);
    return { success: false, message: error.message };
  }

  revalidatePath("/organizations");
  return { success: true, message: "Organização excluída." };
}