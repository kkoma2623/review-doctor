import type { ReactNode } from "react";
import { Div, Label, P } from "../atoms/html";

interface FormFieldProps {
  label: string;
  hint?: string;
  children: ReactNode;
}

export function FormField({ label, hint, children }: FormFieldProps) {
  return (
    <Div className="ui-field">
      <Label className="ui-field__label">{label}</Label>
      {children}
      {hint ? <P className="ui-field__hint">{hint}</P> : null}
    </Div>
  );
}
