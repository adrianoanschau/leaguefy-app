"use client";

import { forwardRef, ReactElement, Ref, useImperativeHandle, useState } from "react";

import { FormState } from "@/_types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface EntityDrawerFormProps<T extends { id: string }> {
  title: string;
  subtitle: string;
  defaultValues?: T | null;
  trigger: React.ReactNode;
  formComponent: React.ComponentType<{ defaultValues?: T | null; onSubmit: (formData: FormData) => Promise<FormState>; onSuccess: () => void; }>;
  onSubmit: (formData: FormData) => Promise<FormState>;
  onClose: () => void;
}

export type DrawerRef = {
  open: () => void;
}

function EntityDrawerFormComponent<T extends { id: string }>({
  title,
  subtitle,
  defaultValues,
  trigger,
  formComponent: FormComponent,
  onSubmit,
  onClose,
}: EntityDrawerFormProps<T>, ref: Ref<DrawerRef>) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
  }));

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      onClose();
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        {trigger}
      </SheetTrigger>

      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            {subtitle}
          </SheetDescription>
        </SheetHeader>

        <div className="py-8">
          <FormComponent defaultValues={defaultValues} onSubmit={onSubmit} onSuccess={() => setIsOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export const EntityDrawerForm = forwardRef(EntityDrawerFormComponent) as
  <T extends { id: string }>(p: EntityDrawerFormProps<T> & { ref?: Ref<DrawerRef> }) => ReactElement;
