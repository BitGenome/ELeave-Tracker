import { AreaChart, ArrowRight, CalendarCheck, UserRound } from "lucide-react";
import { HtmlHTMLAttributes, ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "renderer/components/ui/card";
import { ROUTES } from "renderer/constants/routes";
import { cn } from "renderer/lib/utils";

const dashboard = [
  {
    name: "File leave",
    icon: <CalendarCheck className="text-primary" />,
    link: ROUTES.FILE_LEAVE,
  },
  {
    name: "Employees",
    icon: <UserRound className="text-primary" />,
    link: ROUTES.EMPLOYEES,
  },
  {
    name: "Leave Report",
    icon: <AreaChart className="text-primary" />,
    link: ROUTES.LEAVE_REPORTS,
  },
];
type DashboardCardProps = HtmlHTMLAttributes<HTMLDivElement> & {
  name: string;
  icon: ReactNode;
  link: string;
};
const DashboardCard = ({
  className,
  name,
  icon,
  link,
  ...props
}: DashboardCardProps) => {
  return (
    <Link to={link}>
      <Card
        {...props}
        className={cn(
          `w-56 shadow-sm hover:shadow-md cursor-pointer p-2 rounded-2xl`,
          className,
        )}
      >
        <CardHeader className="p-2"></CardHeader>
        <CardContent className="flex justify-between items-start p-2">
          <div className="flex items-center justify-center">
            <span className="mr-2 rounded-full bg-primary/20 h-12 w-12 flex justify-center items-center">
              {icon}
            </span>
            <div className="flex flex-col">
              <h3 className="scroll-m-20 text-lg font-bold">{name}</h3>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end p-2">
          <span>
            <ArrowRight className="text-primary h-5 w-5" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export function MainScreen() {
  return (
    <section>
      <div className="flex justify-center items-center h-dvh w-dvw gap-5 flex-wrap">
        {dashboard.map((dashboardData) => (
          <DashboardCard {...dashboardData} />
        ))}
      </div>
    </section>
  );
}
