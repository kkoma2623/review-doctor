import type { HTMLAttributes } from "react";
import { cx } from "../../utils/cx";
import { Span } from "./html";

type PillTone = "neutral" | "positive" | "danger" | "info" | "highlight";

interface PillProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: PillTone;
}

export function Pill({ tone = "neutral", className, ...props }: PillProps) {
  return <Span className={cx("ui-pill", `ui-pill--${tone}`, className)} {...props} />;
}
