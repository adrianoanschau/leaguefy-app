"use server";

import { revalidatePath } from "next/cache";

import { FormState } from "@/_types";
import { createClient } from "@/lib/supabase/server";

import { memberSchema, organizationSchema, updateMemberSchema, updateOrganizationSchema } from "./schema";

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

export async function createOrUpdateMember(
  formData: FormData
): Promise<FormState> {
  if (formData.has('id')) {
    return await updateMember(formData);
  }

  return await createMember(formData);
}

export async function createMember(formData: FormData): Promise<FormState> {
  const supabase = await createClient();

  const validatedFields = memberSchema.safeParse({
    org_id: formData.get("org_id"),
    user_id: formData.get("user_id"),
    role: formData.get("role"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: '',
      // message: validatedFields.error.errors[0]?.message || "Erro de validação.",
    };
  }

  const { org_id, user_id, role } = validatedFields.data;

  const { error } = await supabase
    .from("OrganizationMember")
    .insert({
      org_id,
      user_id,
      role,
    });

  if (error) {
    console.error("Erro Supabase:", error);
    return { success: false, message: `Erro ao criar: ${error.message}` };
  }

  revalidatePath("/organizations/[id]", "page");
  return { success: true, message: "Membro adicionado." };
}

export async function updateMember(formData: FormData): Promise<FormState> {
  const supabase = await createClient();

  const validatedFields = updateMemberSchema.safeParse({
    id: formData.get("id"),
    org_id: formData.get("org_id"),
    user_id: formData.get("user_id"),
    role: formData.get("role"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: '',
      // message: validatedFields.error.errors[0]?.message || "Erro de validação.",
    };
  }

  const { id, role } = validatedFields.data;

  const { error } = await supabase
    .from("OrganizationMember")
    .update({ role })
    .eq("id", id);

  if (error) {
    console.error("Erro Supabase:", error);
    return { success: false, message: `Erro ao atualizar: ${error.message}` };
  }

  revalidatePath("/organizations/[id]", "page");
  return { success: true, message: "Membro atualizado." };
}

export async function deleteMember(id: string): Promise<{
  success: boolean;
  message: string;
}> {
  const supabase = await createClient();

  const { error } = await supabase
    .from("OrganizationMember")
    .delete()
    .eq("id", id);

  if (error) {
    return { success: false, message: `Erro ao remover: ${error.message}` };
  }

  revalidatePath("/organizations/[id]", "page");
  return { success: true, message: "Membro removido." };
}