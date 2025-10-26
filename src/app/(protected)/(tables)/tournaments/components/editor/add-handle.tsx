"use client";

import { Position } from '@xyflow/react';
import { PlusIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

type AddHandleProps = {
  position?: Position.Left | Position.Right;
  className?: string;
  onClick?: () => void;
}

export function AddHandle({ position = Position.Right, className, onClick }: AddHandleProps) {
  return (
    <button
      className={cn(
        "absolute border border-gray-500 rounded-xs bg-white cursor-pointer h-4 w-4",
        className,
        {
          "top-1/2 -translate-y-1/2 right-0 -mr-4": position === Position.Right,
          "top-1/2 -translate-y-1/2 left-0 -ml-4": position === Position.Left,
        }
      )} onClick={onClick}>
      <PlusIcon className="h-full w-full text-gray-500" />
    </button>
  );
}