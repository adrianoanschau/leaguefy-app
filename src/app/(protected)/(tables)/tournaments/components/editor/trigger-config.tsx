"use client";

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

// import { DatePicker } from "@/components/ui/date-picker"; // Você precisa criar/adaptar este
// import { Input } from "@/components/ui/input"; // Para buscar outro torneio/fase

type TriggerType = 'manual' | 'scheduled' | 'completion';

interface TriggerConfigSheetProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  initialData?: { triggerType?: TriggerType; config?: any }; // Dados atuais do nó
  onSave: (config: { triggerType: TriggerType; configData?: any }) => void; // Função para salvar
}

export function TriggerConfigSheet({
  isOpen,
  onOpenChange,
  initialData,
  onSave,
}: TriggerConfigSheetProps) {
  const [selectedType, setSelectedType] = useState<TriggerType>(initialData?.triggerType || 'manual');
  // const [selectedDate, setSelectedDate] = useState<Date | undefined>(initialData?.config?.start_datetime ? new Date(initialData.config.start_datetime) : undefined);
  // const [selectedSource, setSelectedSource] = useState<string>(initialData?.config?.source_id || '');

  const handleSave = () => {
    const configData = {};
    if (selectedType === 'scheduled') {
      // configData = { start_datetime: selectedDate?.toISOString() };
    } else if (selectedType === 'completion') {
      // configData = { source_id: selectedSource, source_type: 'phase' }; // Exemplo
    }
    onSave({ triggerType: selectedType, configData });
    onOpenChange(false); // Fecha o drawer
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Configurar Trigger do Torneio</SheetTitle>
          <SheetDescription>
            Escolha como o torneio deve ser iniciado automaticamente ou manualmente.
          </SheetDescription>
        </SheetHeader>
        <div className="px-4 py-8 space-y-6">
          <RadioGroup
            value={selectedType}
            onValueChange={(value: TriggerType) => setSelectedType(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="manual" id="manual" />
              <Label htmlFor="manual">Início Manual</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="scheduled" id="scheduled" />
              <Label htmlFor="scheduled">Agendado</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="completion" id="completion" />
              <Label htmlFor="completion">Ao Concluir Outro</Label>
            </div>
          </RadioGroup>

          {/* Inputs Condicionais */}
          {selectedType === 'scheduled' && (
            <div className="space-y-2">
              <Label>Data e Hora de Início</Label>
              <p className='text-sm text-muted-foreground'>Componente DatePicker aqui...</p>
              {/* <DatePicker date={selectedDate} setDate={setSelectedDate} /> */}
            </div>
          )}
          {selectedType === 'completion' && (
            <div className="space-y-2">
              <Label>Evento de Origem</Label>
              <p className='text-sm text-muted-foreground'>Componente de busca de Fase/Torneio aqui...</p>
              {/* <Input value={selectedSource} onChange={(e) => setSelectedSource(e.target.value)} placeholder="ID da Fase/Torneio"/> */}
            </div>
          )}

          <Button onClick={handleSave}>Salvar Configuração</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
