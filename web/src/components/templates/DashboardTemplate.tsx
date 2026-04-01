import type { ReactNode } from "react";
import { Main } from "../atoms/html";

interface DashboardTemplateProps {
  children: ReactNode;
}

export function DashboardTemplate({ children }: DashboardTemplateProps) {
  return <Main className="dashboard-template">{children}</Main>;
}
