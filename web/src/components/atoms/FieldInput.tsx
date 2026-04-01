import type { InputHTMLAttributes } from "react";
import { cx } from "../../utils/cx";
import { InputBase } from "./html";

export function FieldInput({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <InputBase className={cx("ui-input", className)} {...props} />;
}
