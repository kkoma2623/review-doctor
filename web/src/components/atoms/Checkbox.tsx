import type { InputHTMLAttributes } from "react";
import { cx } from "../../utils/cx";
import { InputBase } from "./html";

export function Checkbox({
  className,
  type = "checkbox",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <InputBase type={type} className={cx("ui-checkbox", className)} {...props} />;
}
