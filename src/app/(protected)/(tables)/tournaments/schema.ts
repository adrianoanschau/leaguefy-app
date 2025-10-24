import * as z from "zod";

export const tournamentSchema = z.object({
  name: z.string().min(3, {
    message: "O nome deve ter pelo menos 3 caracteres.",
  }),
});

export const updateTournamentSchema = tournamentSchema.extend({
  id: z.string(), 
});