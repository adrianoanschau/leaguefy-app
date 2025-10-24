import * as z from "zod";

export const organizationSchema = z.object({
  name: z.string().min(3, {
    message: "O nome deve ter pelo menos 3 caracteres.",
  }),
});

export const updateOrganizationSchema = organizationSchema.extend({
  id: z.uuid(), 
});

export const memberSchema = z.object({
  org_id: z.uuid(),
  user_id: z.uuid({ message: "ID de usuário inválido." }),
  role: z.enum(['manager', 'member']),
});

export const updateMemberSchema = memberSchema.extend({
  id: z.uuid(),
});