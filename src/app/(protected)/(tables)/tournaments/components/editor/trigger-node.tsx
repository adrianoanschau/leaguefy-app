"use client";

import { Handle, Node, NodeProps, Position, XYPosition } from '@xyflow/react';
import { SheetIcon, PlayIcon, CalendarIcon, LinkIcon, PlusIcon, CogIcon } from 'lucide-react'; // Ícones

import { cn } from '@/lib/utils';

import { AddHandle } from './add-handle';

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
      <div className="border-5 border-white">

        <div className="hidden group-hover:block">
          <button
            className={cn(
              "absolute top-0 right-0 cursor-pointer text-gray-400 hover:text-black",
              !triggerDefined ? 'hidden' : ''
            )}
            onClick={data.onConfigClick}>
            <CogIcon className="h-3 w-3" />
          </button>
        </div>

        <div className={cn(
            "border-2 border-primary rounded-md",
            !triggerDefined ? 'border-dashed' : 'border-solid bg-white',
          )} style={{ width: 80, height: 80 }}>

          <button
            className="border-none w-full h-full cursor-pointer flex justify-center items-center"
            onClick={triggerDefined ? undefined : data.onConfigClick}>
            <Icon className="h-6 w-6 text-primary" />
          </button>

          <div className="text-center text-xs p-2 italic text-muted-foreground">
            {labelText}
          </div>
          
          <AddHandle className={cn(
              data.isConnected || !triggerDefined ? 'opacity-0' : 'opacity-100',
              triggerDefined && 'group-hover:opacity-100',
              'group-hover:block',
            )}
            onClick={() => data.onAddClick({
              id,
              position: {
                x: positionAbsoluteX,
                y: positionAbsoluteY,
              },
            })} />

          <Handle
            type="source"
            position={Position.Right}
            className="opacity-0"
          />
        </div>
      </div>
    </div>
  );
}