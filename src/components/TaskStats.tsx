import type {ReactNode} from 'react';
import {CheckCircle2, ClipboardList, ListFilter} from 'lucide-react';

export function TaskStats({total, active, done}: {total: number; active: number; done: number}) {
  return (
    <section className="stats" aria-label="Статистика задач">
      <Stat icon={<ClipboardList size={20} />} value={total} label="Всего задач" />
      <Stat icon={<ListFilter size={20} />} value={active} label="В работе" accent="amber" />
      <Stat icon={<CheckCircle2 size={20} />} value={done} label="Завершено" accent="green" />
    </section>
  );
}
function Stat({icon, value, label, accent = 'violet'}: {icon: ReactNode; value: number; label: string; accent?: string}) {
  return (
    <article className={`stat-card ${accent}`}>
      <span className="stat-icon">{icon}</span>
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}
