"use client";

import { Handle, Node, NodeProps, Position, XYPosition } from '@xyflow/react';
import { SheetIcon, PlayIcon, CalendarIcon, LinkIcon, PlusIcon, CogIcon } from 'lucide-react'; // Ícones

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type TriggerType = 'undefined' | 'manual' | 'scheduled' | 'completion';

type TriggerNodeProps = {
  triggerType?: TriggerType;
  isConnected?: boolean;
  onAddClick: (node: Pick<Node, 'position' | 'id'>) => void;
  onConfigClick: () => void;
};

type TriggerNodeData = {
  id: string;
  position: XYPosition;
  data: TriggerNodeProps;
};

const triggerIcons = {
  undefined: PlusIcon,
  manual: PlayIcon,
  scheduled: CalendarIcon,
  completion: LinkIcon,
};

export function TriggerNode({ id, data, positionAbsoluteX, positionAbsoluteY }: NodeProps<TriggerNodeData>) {
  const nodeProps = { id, position: { x: positionAbsoluteX, y: positionAbsoluteY } };
  const Icon = triggerIcons[data.triggerType ?? 'undefined'] || SheetIcon;

  const triggerDefined = !!data.triggerType && data.triggerType !== 'undefined';

  const labelText = {
    undefined: '',
    manual: 'Início Manual',
    scheduled: 'Agendado',
    completion: 'Ao Concluir Outro',
  }[data.triggerType ?? 'undefined'];

  return (
    <div className="group py-2">
      <div className={cn({
          "shadow-md hover:shadow-lg border-solid bg-white": triggerDefined,
          "border-dashed": !triggerDefined,
        }, "border border-gray-200 dark:border-gray-700 transition-shadow duration-200 rounded-lg")}
        style={{ width: 80, height: 80 }}>

        <button
          className="border-none w-full h-full cursor-pointer flex justify-center items-center"
          onClick={data.onConfigClick}>
          <Icon className="h-6 w-6 text-primary group-hover:hidden" />
          <CogIcon className="h-6 w-6 text-primary hidden group-hover:block" />
        </button>

        <div className="text-center text-xs p-2 italic text-muted-foreground">
          {labelText}
        </div>

        <Button
          variant="outline"
          size="icon"
          className={cn(
            "absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full w-6 h-6 p-0 transition-opacity duration-150",
            "bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-slate-600 cursor-pointer",
            data.isConnected || !triggerDefined ? 'opacity-0' : 'opacity-100',
            triggerDefined && 'group-hover:opacity-100',
          )}
          onClick={(e) => { e.stopPropagation(); data.onAddClick(nodeProps); }}
          title="Adicionar Fase à Direita"
        >
          <PlusIcon className="h-4 w-4" />
        </Button>

        <Handle
          type="source"
          position={Position.Right}
          className="opacity-0"
        />
      </div>
    </div>
  );
}