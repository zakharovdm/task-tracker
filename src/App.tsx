import {useEffect, useMemo, useState} from 'react';
import {Header} from './components/Header';
import {Hero} from './components/Hero';
import {TaskControls} from './components/TaskControls';
import {TaskForm} from './components/TaskForm';
import {TaskList} from './components/TaskList';
import {TaskStats} from './components/TaskStats';
import {initialTasks} from './data';
import type {Filter, Status, Task, TaskDraft} from './types';

const STORAGE_KEY = 'taskflow-tasks';

function getSavedTasks(): Task[] {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    return savedTasks ? (JSON.parse(savedTasks) as Task[]) : initialTasks;
  } catch {
    return initialTasks;
  }
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(getSavedTasks);
  const [filter, setFilter] = useState<Filter>('all');
  const [query, setQuery] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)), [tasks]);

  const visibleTasks = useMemo(
    () =>
      tasks.filter((task) => {
        const matchesFilter = filter === 'all' || task.status === filter;
        return matchesFilter && `${task.title} ${task.description}`.toLowerCase().includes(query.toLowerCase());
      }),
    [filter, query, tasks],
  );

  function addTask(draft: TaskDraft) {
    setTasks((current) => [{id: crypto.randomUUID(), ...draft, status: 'todo', createdAt: new Date().toISOString().slice(0, 10)}, ...current]);
    setIsFormOpen(false);
  }
  function updateStatus(id: string, status: Status) {
    setTasks((current) => current.map((task) => (task.id === id ? {...task, status} : task)));
  }

  return (
    <main className="app-shell">
      <Header />
      <Hero onCreateTask={() => setIsFormOpen(true)} />
      <TaskStats total={tasks.length} active={tasks.filter((task) => task.status === 'inProgress').length} done={tasks.filter((task) => task.status === 'done').length} />
      <section className="workspace">
        <TaskControls filter={filter} query={query} onFilterChange={setFilter} onQueryChange={setQuery} />
        <TaskList tasks={visibleTasks} onStatusChange={updateStatus} />
      </section>
      {isFormOpen && <TaskForm onClose={() => setIsFormOpen(false)} onSubmit={addTask} />}
    </main>
  );
}
