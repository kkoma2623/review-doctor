import type { HTMLAttributes } from "react";
import { cx } from "../../utils/cx";
import { Div } from "./html";

type NoticeTone = "info" | "success" | "error";

interface NoticeProps extends HTMLAttributes<HTMLDivElement> {
  tone?: NoticeTone;
}

export function Notice({ tone = "info", className, ...props }: NoticeProps) {
  return <Div className={cx("ui-notice", `ui-notice--${tone}`, className)} {...props} />;
}
