"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { FormState } from "@/_types";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { tournamentSchema, updateTournamentSchema } from "../schema";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Salvando..." : "Salvar Torneio"}
    </Button>
  );
}

type TournamentFormProps = {
  defaultValues?: z.infer<typeof updateTournamentSchema> | null;
  onSubmit: (formData: FormData) => Promise<FormState>;
  onSuccess: () => void;
};

export function TournamentForm({ defaultValues, onSubmit, onSuccess }: TournamentFormProps) {
  const initialState: FormState = { success: false, message: "" };

  const [formState, dispatch] = useActionState((_: FormState, formData: FormData) => onSubmit(formData), initialState);

  const form = useForm<z.infer<typeof tournamentSchema>>({
    resolver: zodResolver(tournamentSchema),
    defaultValues: defaultValues || { name: "" },
  });

  useEffect(() => {
    form.reset(defaultValues || { name: "" });
  }, [defaultValues, form]);

  useEffect(() => {
    if (formState.success) {
      toast.success(formState.message);
      onSuccess();
      form.reset();
    } else if (formState.message) {
      toast.error(formState.message);
    }
  }, [formState, onSuccess, form]);

  return (
    <form action={dispatch}>
      <Form {...form}>
        <div className="space-y-4">
          {defaultValues && (
            <input type="hidden" name="id" value={defaultValues.id} />
          )}

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do Torneio</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Copa dos Amigos" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <SubmitButton />
        </div>
      </Form>
    </form>
  );
}
