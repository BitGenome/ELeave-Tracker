import { Plus } from "lucide-react";
import { Payment, columns } from "renderer/components/columns";
import { Button } from "renderer/components/ui/button";
import { DataTable } from "renderer/components/ui/data-table";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];

export const Employees = () => {
  return (
    <div className="w-[calc(100vw-4rem)]">
      <div className="border-b p-5 h-20 ">
        <div className="flex justify-between">
          <h2 className="scroll-m-20 pb-2 text-xl font-bold  first:mt-0">
            Employee list
          </h2>
          <Button>
            <Plus className="mr-2" />
            New employee
          </Button>
        </div>
      </div>
      <div className="p-5 w-full">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};
