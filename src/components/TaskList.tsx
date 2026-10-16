import {CheckCircle2, Search} from 'lucide-react';
import type {Priority, Status, Task} from '../types';

const statusMeta: Record<Status, {label: string; className: string}> = {
  todo: {label: 'К выполнению', className: 'todo'},
  inProgress: {label: 'В работе', className: 'progress'},
  done: {label: 'Готово', className: 'done'},
};
const priorityLabel: Record<Priority, string> = {high: 'Высокий', medium: 'Средний', low: 'Низкий'};

export function TaskList({tasks, onStatusChange}: {tasks: Task[]; onStatusChange: (id: string, status: Status) => void}) {
  return tasks.length ? (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onStatusChange={onStatusChange} />
      ))}
    </div>
  ) : (
    <div className="empty">
      <Search size={28} />
      <p>Ничего не найдено</p>
      <span>Попробуйте изменить фильтр или поисковый запрос.</span>
    </div>
  );
}

function TaskCard({task, onStatusChange}: {task: Task; onStatusChange: (id: string, status: Status) => void}) {
  const meta = statusMeta[task.status];
  return (
    <article className={`task-card ${task.status}`}>
      <button className="check" onClick={() => onStatusChange(task.id, task.status === 'done' ? 'todo' : 'done')} aria-label="Изменить статус">
        {task.status === 'done' && <CheckCircle2 size={20} />}
      </button>
      <div className="task-content">
        <div className="task-topline">
          <span className={`priority ${task.priority}`}>● {priorityLabel[task.priority]}</span>
          <span className={`status ${meta.className}`}>{meta.label}</span>
        </div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span className="date">Создано {new Intl.DateTimeFormat('ru-RU', {day: 'numeric', month: 'long'}).format(new Date(task.createdAt))}</span>
      </div>
      <select value={task.status} onChange={(event) => onStatusChange(task.id, event.target.value as Status)} aria-label={`Изменить статус задачи ${task.title}`}>
        <option value="todo">К выполнению</option>
        <option value="inProgress">В работе</option>
        <option value="done">Готово</option>
      </select>
    </article>
  );
}
