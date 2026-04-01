import type { ReactNode } from "react";
import { authFeatureBullets } from "../../data/mockData";
import { AppLink } from "../atoms/AppLink";
import { Pill } from "../atoms/Pill";
import { Surface } from "../atoms/Surface";
import { Div, H1, Li, Main, P, Ul } from "../atoms/html";
import { BrandLockup } from "../molecules/BrandLockup";

interface AuthSplitTemplateProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function AuthSplitTemplate({
  eyebrow,
  title,
  description,
  children,
  footer,
}: AuthSplitTemplateProps) {
  return (
    <Main className="auth-template">
      <Div className="auth-template__panel auth-template__panel--feature">
        <Div className="auth-feature-panel">
          <BrandLockup subtitle="Store Intelligence Platform" />
          <Pill tone="highlight">{eyebrow}</Pill>
          <H1>{title}</H1>
          <P>{description}</P>
          <Ul className="auth-feature-panel__list">
            {authFeatureBullets.map((item) => (
              <Li key={item}>{item}</Li>
            ))}
          </Ul>
          <AppLink to="/" tone="secondary">
            홈으로 돌아가기
          </AppLink>
        </Div>
      </Div>

      <Div className="auth-template__panel auth-template__panel--form">
        <Surface tone="panel" className="auth-panel-card">
          {children}
          {footer ? <Div className="auth-panel-card__footer">{footer}</Div> : null}
        </Surface>
      </Div>
    </Main>
  );
}
