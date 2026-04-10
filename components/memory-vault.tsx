"use client"

import { useCallback, useState } from "react"
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
} from 'react-flow-renderer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Music } from "lucide-react"

const initialNodes = [
  {
    id: '1',
    type: 'default',
    data: { label: 'First Concert - 6 months ago', type: 'concert', date: '2023-10-15' },
    position: { x: 250, y: 25 },
  },
  {
    id: '2',
    type: 'default',
    data: { label: 'VIP Meet & Greet', type: 'meetup', date: '2023-11-20' },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'default',
    data: { label: 'Festival Weekend', type: 'festival', date: '2023-12-10' },
    position: { x: 400, y: 125 },
  },
  {
    id: '4',
    type: 'default',
    data: { label: 'Online Stream', type: 'stream', date: '2024-01-05' },
    position: { x: 250, y: 225 },
  },
  {
    id: '5',
    type: 'default',
    data: { label: 'Album Release Party', type: 'party', date: '2024-02-14' },
    position: { x: 150, y: 325 },
  },
  {
    id: '6',
    type: 'default',
    data: { label: 'Charity Event', type: 'charity', date: '2024-03-22' },
    position: { x: 350, y: 325 },
  },
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e4-5', source: '4', target: '5' },
  { id: 'e4-6', source: '4', target: '6' },
]

const nodeTypes = {
  default: ({ data }: any) => (
    <div className="px-4 py-2 shadow-md rounded-md bg-card border-2 border-primary/20 min-w-[200px]">
      <div className="flex items-center gap-2 mb-2">
        {data.type === 'concert' && <Music className="h-4 w-4 text-primary" />}
        {data.type === 'meetup' && <Calendar className="h-4 w-4 text-primary" />}
        {data.type === 'festival' && <MapPin className="h-4 w-4 text-primary" />}
        <Badge variant="outline" className="text-xs">{data.type}</Badge>
      </div>
      <div className="text-sm font-medium">{data.label}</div>
      <div className="text-xs text-muted-foreground">{data.date}</div>
    </div>
  ),
}

export function MemoryVault() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Memory Vault</CardTitle>
        <p className="text-sm text-muted-foreground">
          Interactive timeline of your fan journey with EchoVault
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-[600px] w-full border rounded-lg">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
          >
            <Controls />
            <MiniMap />
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div>
      </CardContent>
    </Card>
  )
}