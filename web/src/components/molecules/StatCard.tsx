import { Surface } from "../atoms/Surface";
import { H3, P } from "../atoms/html";

interface StatCardProps {
  label: string;
  value: string;
  note: string;
}

export function StatCard({ label, value, note }: StatCardProps) {
  return (
    <Surface tone="panel" className="stat-card">
      <P className="stat-card__label">{label}</P>
      <H3 className="stat-card__value">{value}</H3>
      <P className="stat-card__note">{note}</P>
    </Surface>
  );
}
