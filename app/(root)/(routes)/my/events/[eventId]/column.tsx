"use client";

import { ColumnDef } from "@tanstack/react-table";

export type OrderColumn = {
  id: string;
  userName: string;
  email: string;
  totalPrice: number;
  billingAddress: string;
  createdAt: string;
};

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "userName",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    accessorKey: "totalPrice",
    header: "Price",
  },
  {
    accessorKey: "billingAddress",
    header: "Billing Address",
  },
];
