import type { Task } from './types';

export const initialTasks: Task[] = [
  { id: '1', title: 'Подготовить дизайн-концепт', description: 'Собрать референсы и утвердить визуальное направление.', priority: 'high', status: 'inProgress', createdAt: '2026-10-14' },
  { id: '2', title: 'Провести исследование аудитории', description: 'Определить основные сценарии и боли пользователей.', priority: 'medium', status: 'todo', createdAt: '2026-10-15' },
  { id: '3', title: 'Собрать UI-kit', description: 'Описать цвета, типографику и базовые компоненты.', priority: 'low', status: 'done', createdAt: '2026-10-12' }
];
