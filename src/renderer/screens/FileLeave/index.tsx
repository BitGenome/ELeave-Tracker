import { Plus } from "lucide-react";
import Calendar from "renderer/components/organism/Calendar";
import { Button } from "renderer/components/ui/button";

export const FileLeave = () => {
  return (
    <div className="h-[calc(100vh-5rem)] w-[calc(100vw-5rem)]">
      <div className="border-b p-5 h-20 ">
        <div className="flex justify-between">
          <h2 className="scroll-m-20 pb-2 text-xl font-bold  first:mt-0">
            Employee leave
          </h2>
          <Button>
            <Plus className="mr-2" />
            File leave
          </Button>
        </div>
      </div>
      <div className="h-full p-5">
        <Calendar />
      </div>
    </div>
  );
};
