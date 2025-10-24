"use client";

import { ColumnDef, Row } from "@tanstack/react-table";
import { MoreHorizontal, Edit, Trash2, Plus } from "lucide-react";
import { useCallback, useMemo, useRef, useState, useTransition } from "react";
import { toast } from "sonner";

import { FormState } from "@/_types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { EntityDrawerForm, DrawerRef } from "./entity-drawer-form";

interface EntityDataTableProps<T extends { id: string }> {
  createButtonText: string;
  data: T[];
  columns: Array<{ column: keyof T, header: string, type?: 'string'|'date' }>;
  error: string | null;
  drawerProps: {
    title: string;
    subtitle: string;
  };
  formComponent: React.ComponentType<{ defaultValues?: T | null; onSubmit: (formData: FormData) => Promise<FormState>; onSuccess: () => void; }>;
  onDelete: (id: string) => Promise<{ success: boolean; message: string }>;
  onSubmitForm: (formData: FormData) => Promise<FormState>;
}

export function EntityDataTable<T extends { id: string }>({
  createButtonText,
  data,
  columns,
  error,
  drawerProps,
  formComponent,
  onSubmitForm,
  onDelete,
}: EntityDataTableProps<T>) {
  const [registerForEdit, setRegisterForEdit] = useState<T | null>(null);
  const [registerForDelete, setRegisterForDelete] = useState<T | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isPending, startTransition] = useTransition();
  const drawerRef = useRef<DrawerRef>(null);

  const handleEditClick = (register: T) => {
    setRegisterForEdit(register);
    drawerRef.current?.open();
  };

  const handleDeleteClick = (org: T) => {
    setRegisterForDelete(org);
    setShowDeleteDialog(true);
  };

  const handleOnCloseForm = () => {
    setRegisterForEdit(null);
  };

  const confirmDelete = () => {
    if (registerForDelete) {
      startTransition(async () => {
        const result = await onDelete(registerForDelete.id);
        
        if (result.success) {
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
        setShowDeleteDialog(false);
        setRegisterForDelete(null);
      });
    }
  };

  const renderCell = useCallback((type: 'string'|'date' = 'string', column: string) => ({ row }: { row: Row<T> }) => {
    if (type === 'date') {
      return (
        <div>
          {new Date(row.getValue(column)).toLocaleDateString("pt-BR")}
        </div>
      );
    }

    return (
      <div className="font-medium">{row.getValue(column as string)}</div>
    );
  }, []);

  const renderColumns = useMemo(() => columns.map(({ column, header, type }) => ({
      accessorKey: column,
      header,
      cell: renderCell(type, column as string),
    }) as ColumnDef<T>), [columns, renderCell]);

  const createButton = (
    <Button className="hidden sm:flex">
      <Plus className="mr-2 h-4 w-4" />
      {createButtonText}
    </Button>
  );

  const formAction = (
    <EntityDrawerForm
      ref={drawerRef}
      title={drawerProps.title}
      subtitle={drawerProps.subtitle}
      defaultValues={registerForEdit}
      trigger={createButton}
      formComponent={formComponent}
      onSubmit={onSubmitForm}
      onClose={handleOnCloseForm}
    />
  );

  if (error) {
    return <p className="text-destructive">Erro: {error}</p>;
  }

  return (
    <>
      <DataTable
        data={data}
        columns={[
          ...renderColumns,
          {
            id: "actions",
            header: () => <div className="text-right">Ações</div>,
            cell: ({ row }) => {
              const org = row.original;

              return (
                <div className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Abrir menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => handleEditClick(org)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDeleteClick(org)}
                        className="text-destructive"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              );
            },
          },
        ]}
        filterColumnId="name"
        filterPlaceholder="Filtrar por nome..."
        toolbarActions={formAction}
      />
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
            <AlertDialogDescription>
              Isso excluirá permanentemente o registro.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              disabled={isPending}
            >
              {isPending ? "Excluindo..." : "Confirmar"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
