"use client";

import { OrderColumn, columns } from "./column";

import { DataTable } from "@/components/ui/data-table";

interface OrderClientProps {
  data: OrderColumn[];
}

const EventTable: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <DataTable searchKey="email" columns={columns} data={data} />
    </>
  );
};

export default EventTable;
