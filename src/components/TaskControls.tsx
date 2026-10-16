import {Search} from 'lucide-react';
import type {Filter} from '../types';

const filters: [Filter, string][] = [
  ['all', 'Все'],
  ['todo', 'К выполнению'],
  ['inProgress', 'В работе'],
  ['done', 'Готово'],
];

export function TaskControls({filter, query, onFilterChange, onQueryChange}: {filter: Filter; query: string; onFilterChange: (value: Filter) => void; onQueryChange: (value: string) => void}) {
  return (
    <div className="controls">
      <div className="filters" role="group" aria-label="Фильтры задач">
        {filters.map(([value, label]) => (
          <button key={value} onClick={() => onFilterChange(value)} className={filter === value ? 'selected' : ''}>
            {label}
          </button>
        ))}
      </div>
      <label className="search">
        <Search size={18} />
        <input value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Поиск задач" aria-label="Поиск задач" />
      </label>
    </div>
  );
}
