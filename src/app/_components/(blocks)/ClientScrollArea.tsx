// _components/ClientScrollArea.tsx
'use client';

import { ScrollArea } from "~/components/ui/scroll-area";

export function ClientScrollArea({ children }: { children: React.ReactNode }) {
  return <ScrollArea>{children}</ScrollArea>;
}