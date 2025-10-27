"use client";

import { Handle, Node, NodeProps, Position, XYPosition } from '@xyflow/react';
import { CogIcon, SheetIcon, Trash2Icon as TrashIcon, PlusIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type TriggerType = 'undefined' | 'manual' | 'scheduled' | 'completion';

type StageNodeProps = {
  triggerType?: TriggerType;
  isLeftConnected?: boolean;
  isRightConnected?: boolean;
  onTrashClick: (id: string) => void;
  onConfigClick: () => void;
  onAddClick: (node: Pick<Node, 'position' | 'id'>, side?: 'left' | 'right') => void;
};

type StageNodeData = {
  id: string;
  position: XYPosition;
  data: StageNodeProps;
};

export function StageNode({ id, data, positionAbsoluteX, positionAbsoluteY }: NodeProps<StageNodeData>) {
  const nodeProps = { id, position: { x: positionAbsoluteX, y: positionAbsoluteY } };

  return (
    <div className="group relative">
      
      <div className={cn(
        "rounded-lg bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 dark:border-gray-700",
        "overflow-hidden",
      )} style={{ width: 160, height: 120 }}>
        <div className="h-8 px-3 flex items-center justify-end bg-gray-50 dark:bg-slate-700 border-b border-gray-200 dark:border-gray-600">
          <div className="flex space-x-1 opacity-50 group-hover:opacity-100 transition-opacity">
            <button
              onClick={(e) => { e.stopPropagation(); data.onConfigClick(id); }}
              className="p-1 rounded hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
              title="Configurar Fase"
            >
              <CogIcon className="h-4 w-4" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); data.onTrashClick(id); }}
              className="p-1 rounded hover:bg-red-100 dark:hover:bg-red-900 text-gray-500 dark:text-gray-300 hover:text-red-500"
              title="Remover Fase"
            >
              <TrashIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="p-4 flex flex-col items-center justify-center space-y-2 min-h-[60px]">
          <SheetIcon className="h-6 w-6 text-primary" />
          <div className="text-center text-sm font-medium text-gray-700 dark:text-gray-200">
            {data.label || 'Fase'}
          </div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        className="!absolute !top-1/2 !-translate-y-1/2 !-left-[1px] !opacity-0 !w-1 !h-1"
        isConnectable={true}
      />
      <Handle
        type="source"
        position={Position.Right}
        className="!absolute !top-1/2 !-translate-y-1/2 !-right-[1px] !opacity-0 !w-1 !h-1"
        isConnectable={true}
      />

      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-6 h-6 p-0",
          "group-hover:opacity-100 transition-opacity duration-150 cursor-pointer",
          "bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-slate-600",
          data.isLeftConnected ? 'opacity-0' : 'opacity-100',
        )}
        onClick={(e) => { e.stopPropagation(); data.onAddClick(nodeProps, 'left'); }}
        title="Adicionar Fase à Esquerda"
      >
        <PlusIcon className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full w-6 h-6 p-0",
          "group-hover:opacity-100 transition-opacity duration-150 cursor-pointer",
          "bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-slate-600",
          data.isRightConnected ? 'opacity-0' : 'opacity-100',
        )}
        onClick={(e) => { e.stopPropagation(); data.onAddClick(nodeProps, 'right'); }}
        title="Adicionar Fase à Direita"
      >
        <PlusIcon className="h-4 w-4" />
      </Button>

    </div>
  );
}