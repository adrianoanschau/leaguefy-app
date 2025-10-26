"use client";

import { Handle, Node, NodeProps, Position, XYPosition } from '@xyflow/react';
import { CogIcon, SheetIcon, Trash2Icon as TrashIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { AddHandle } from './add-handle';

type TriggerType = 'undefined' | 'manual' | 'scheduled' | 'completion';

type StageNodeProps = {
  triggerType?: TriggerType;
  isConnected?: boolean;
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

  return (
    <div className="group py-2">
      <div className="border-5 border-white">
        <div className="hidden group-hover:block">
          <button
            className={cn(
              "absolute top-0 right-0 mr-4 cursor-pointer text-gray-400 hover:text-black",
            )}
            onClick={data.onConfigClick}>
            <CogIcon className="h-3 w-3" />
          </button>
          <button
            className={cn(
              "absolute top-0 right-0 cursor-pointer text-gray-400 hover:text-red-500",
            )}
            onClick={() => data.onTrashClick(id)}>
            <TrashIcon className="h-3 w-3" />
          </button>
        </div>

        <div className={cn(
            "border-2 border-primary rounded-md bg-white",
          )} style={{ width: 160, height: 80 }}>

          <button
            className="border-none w-full h-full cursor-pointer flex justify-center items-center">
            <SheetIcon className="h-6 w-6 text-primary" />
          </button>
          
          <div className="text-center text-xs p-2 italic text-muted-foreground">
            Fase
          </div>

          <AddHandle position={Position.Left}
             className={cn(
              'hidden group-hover:block'
            )}
            onClick={() => data.onAddClick({
              id,
              position: {
                x: positionAbsoluteX,
                y: positionAbsoluteY,
              },
            }, 'left')} />
          <Handle
            type="target"
            position={Position.Left}
            className="opacity-0"
          />

          <AddHandle position={Position.Right}
             className={cn(
              data.isConnected ? 'opacity-0 hidden' : 'opacity-100',
              data.isConnected && 'group-hover:opacity-100',
              'group-hover:block'
            )}
            onClick={() => data.onAddClick({
              id,
              position: {
                x: positionAbsoluteX,
                y: positionAbsoluteY,
              },
            }, 'right')} />
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