'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

export function Providers(props: React.PropsWithChildren<{}>) {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
}
