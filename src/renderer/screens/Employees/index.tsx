import { Plus } from "lucide-react";
import { Button } from "renderer/components/ui/button";

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

      <div>employee</div>
    </div>
  );
};
