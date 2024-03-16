import { CalendarCheck, FileText, Menu, User } from "lucide-react";
import { ReactElement } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "renderer/components/ui/tooltip";
import { ROUTES } from "renderer/constants/routes";

type LeftIconProps = {
  link: string;
  name: string;
  icon: (isActive?: boolean) => ReactElement;
};

export const LeftMenuIcons: LeftIconProps[] = [
  {
    link: ROUTES.DASHBOARD,
    name: "Dashboard",
    icon: (isActive = false) => (
      <Tooltip>
        <TooltipTrigger>
          <span
            className={`cursor-pointer ${
              isActive ? "bg-primary" : "bg-muted-foreground"
            } rounded-full h-8 w-8 flex items-center justify-center hover:bg-primary`}
          >
            <Menu className="text-white h-4 w-4" />
          </span>
        </TooltipTrigger>
        <TooltipContent side="right" align="center" sideOffset={10}>
          <p>File an employee leave</p>
        </TooltipContent>
      </Tooltip>
    ),
  },
  {
    link: ROUTES.FILE_LEAVE,
    name: "File Leave",
    icon: (isActive = false) => (
      <Tooltip>
        <TooltipTrigger>
          <span
            className={`cursor-pointer ${
              isActive ? "bg-primary" : "bg-muted-foreground"
            } rounded-full h-8 w-8 flex items-center justify-center hover:bg-primary`}
          >
            <CalendarCheck className="text-white h-4 w-4" />
          </span>
        </TooltipTrigger>
        <TooltipContent side="right" align="center" sideOffset={10}>
          <p>File an employee leave</p>
        </TooltipContent>
      </Tooltip>
    ),
  },
  {
    link: ROUTES.EMPLOYEES,
    name: "Employees",
    icon: (isActive = false) => (
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className={`cursor-pointer ${
              isActive ? "bg-primary" : "bg-muted-foreground"
            } rounded-full h-8 w-8 flex items-center justify-center hover:bg-primary`}
          >
            <User className="text-white h-4 w-4" />
          </span>
        </TooltipTrigger>
        <TooltipContent side="right" align="center" sideOffset={10}>
          <p>Employees</p>
        </TooltipContent>
      </Tooltip>
    ),
  },
  {
    link: ROUTES.LEAVE_REPORTS,
    name: "Reports",
    icon: (isActive = false) => (
      <Tooltip>
        <TooltipTrigger>
          <span
            className={`cursor-pointer ${
              isActive ? "bg-primary" : "bg-muted-foreground"
            } rounded-full h-8 w-8 flex items-center justify-center hover:bg-primary`}
          >
            <FileText className="text-white h-4 w-4" />
          </span>
        </TooltipTrigger>
        <TooltipContent side="right" align="center" sideOffset={10}>
          <p>Leave Reports</p>
        </TooltipContent>
      </Tooltip>
    ),
  },
];
