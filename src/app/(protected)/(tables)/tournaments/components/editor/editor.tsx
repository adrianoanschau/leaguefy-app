"use client";

import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background, MiniMap, Controls, BackgroundVariant, Node, Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback, useMemo, useState } from 'react';

import { StageNode } from './stage-node';
import { TriggerConfigSheet } from './trigger-config';
import { TriggerNode } from './trigger-node';

enum NodeType {
  Trigger = 'trigger',
  Stage = 'stage',
}

const nodeTypes = {
  'trigger': TriggerNode,
  'stage': StageNode,
};

const initialNodes: Node[] = [
  {
    id: NodeType.Trigger,
    type: NodeType.Trigger,
    position: { x: -40, y: -40 },
    data: {},
  },
];
const initialEdges: Edge[] = [];

export function TournamentEditor() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  function newStageNode(position: Node['position'], side: 'left' | 'right') {
    return {
      id: `${NodeType.Stage}-${Date.now()}`,
      type: NodeType.Stage,
      position: { x: position.x + (200 * (side === 'left' ? -1 : 1)), y: position.y },
      data: {},
    };
  }

  const handleConfigClick = useCallback(() => {
    setIsSheetOpen(true);
  }, []);

  const handleAddClick = useCallback((node: Pick<Node, 'id' | 'position'>, side: 'left' | 'right' = 'right') => {
    const newNode = newStageNode(node.position, side);
    const source = side === 'left' ? newNode.id : node.id;
    const target = side === 'left' ? node.id : newNode.id;

    setNodes((prevNodes) => [
      ...prevNodes,
      newNode
    ]);
    
    setEdges((prevEdges) => [
      ...prevEdges,
      {
        id: `${node.id}-${newNode.id}`,
        source,
        target,
      }]);
  }, []);

  const handleTrashClick = useCallback((id: string) => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
    setEdges((prevEdges) => prevEdges.filter((edge) => edge.source !== id && edge.target !== id));
  }, []);

  const nodesWithData = useMemo(() => nodes.map(node => {
    const isConnected = edges.some(edge => edge.source === node.id);

    if (node.id === NodeType.Trigger) {
      return {
        ...node,
        data: {
          ...node.data,
          onConfigClick: handleConfigClick,
          onAddClick: handleAddClick,
          isConnected,
        }
      };
    }

    return {
      ...node,
      data: {
        ...node.data,
        onConfigClick: handleConfigClick,
        onAddClick: handleAddClick,
        onTrashClick: handleTrashClick,
        isConnected,
      }
    };
  }), [nodes, edges, handleConfigClick, handleAddClick, handleTrashClick]);

  const handleDefineTrigger = useCallback((config: { triggerType: any; configData?: any }) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) => {
        if (node.id === NodeType.Trigger) {
          return {
            ...node,
            data: {
              ...node.data,
              triggerType: config.triggerType,
              config: config.configData,
            },
          };
        }

        return node;
      }),
    );
  }, [setNodes]);

  const triggerNodeData = nodes.find(n => n.id === NodeType.Trigger)?.data;

  return (
    <div className="w-full h-[calc(100svh_-_12rem)]">
      <ReactFlow
        nodes={nodesWithData}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Lines} gap={12} size={1} />
      </ReactFlow>

      <TriggerConfigSheet
        isOpen={isSheetOpen}
        onOpenChange={setIsSheetOpen}
        initialData={triggerNodeData}
        onSave={handleDefineTrigger}
      />
    </div>
  );
}