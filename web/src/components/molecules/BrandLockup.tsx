import { AppLink } from "../atoms/AppLink";
import { Div, P, Strong } from "../atoms/html";

interface BrandLockupProps {
  subtitle?: string;
  to?: string;
  inverse?: boolean;
}

export function BrandLockup({
  subtitle = "AI Review Intelligence",
  to = "/",
  inverse = false,
}: BrandLockupProps) {
  return (
    <AppLink
      to={to}
      tone="inline"
      className={inverse ? "brand-lockup brand-lockup--inverse" : "brand-lockup"}
    >
      <Div className="brand-lockup__icon">RD</Div>
      <Div className="brand-lockup__copy">
        <Strong className="brand-lockup__title">Review Doctor</Strong>
        <P className="brand-lockup__subtitle">{subtitle}</P>
      </Div>
    </AppLink>
  );
}
