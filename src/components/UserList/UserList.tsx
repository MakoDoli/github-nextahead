"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ListofUsers from "./ListofUsers";

const queryClient = new QueryClient();

export default function UserList({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
