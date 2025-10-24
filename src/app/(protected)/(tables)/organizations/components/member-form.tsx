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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { memberSchema, updateMemberSchema } from "../schema";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Salvando..." : "Salvar Organização"}
    </Button>
  );
}

type MemberFormProps = {
  defaultValues?: z.infer<typeof updateMemberSchema> | null;
  onSubmit: (formData: FormData) => Promise<FormState>;
  onSuccess: () => void;
};

export function MemberForm({ defaultValues, onSubmit, onSuccess }: MemberFormProps) {
  const initialState: FormState = { success: false, message: "" };

  const [formState, dispatch] = useActionState((_: FormState, formData: FormData) => onSubmit(formData), initialState);

  const form = useForm<z.infer<typeof memberSchema>>({
    resolver: zodResolver(memberSchema),
    defaultValues: defaultValues || { org_id: "", user_id: "", role: "member" },
  });

  useEffect(() => {
    form.reset(defaultValues || { org_id: "", user_id: "", role: "member" });
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
          {defaultValues && defaultValues.id && (
            <input type="hidden" name="id" value={defaultValues.id} />
          )}
          {defaultValues && defaultValues.org_id && (
            <input type="hidden" name="org_id" value={defaultValues.org_id} />
          )}

          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email do Membro</FormLabel>
                <FormControl>
                  <Input placeholder="membro@email.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Função</FormLabel>
                {/* (Use um <Select> do Shadcn aqui para 'manager' ou 'member') */}
              </FormItem>
            )}
          />

          <SubmitButton />
        </div>
      </Form>
    </form>
  );
}
