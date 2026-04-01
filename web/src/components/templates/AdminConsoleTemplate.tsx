import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { adminMenuItems } from "../../data/mockData";
import { AppLink } from "../atoms/AppLink";
import { Aside, Div, H1, Main, Nav, P } from "../atoms/html";
import { BrandLockup } from "../molecules/BrandLockup";

interface AdminConsoleTemplateProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function AdminConsoleTemplate({
  title,
  description,
  children,
}: AdminConsoleTemplateProps) {
  const location = useLocation();

  return (
    <Main className="console-template">
      <Aside className="console-sidebar">
        <BrandLockup subtitle="Admin Console" inverse />
        <Nav className="console-sidebar__nav">
          {adminMenuItems.map((item) => (
            <AppLink
              key={item.path}
              to={item.path}
              tone="nav"
              className={location.pathname === item.path ? "is-active" : undefined}
            >
              {item.label}
            </AppLink>
          ))}
        </Nav>
      </Aside>

      <Div className="console-main">
        <Div className="console-topbar">
          <Div>
            <H1>{title}</H1>
            <P>{description}</P>
          </Div>
          <AppLink to="/" tone="dark" size="sm">
            서비스 홈
          </AppLink>
        </Div>
        <Div className="console-content">{children}</Div>
      </Div>
    </Main>
  );
}
