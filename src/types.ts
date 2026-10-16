export type Priority = 'high' | 'medium' | 'low';
export type Status = 'todo' | 'inProgress' | 'done';
export type Filter = 'all' | Status;

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
  createdAt: string;
}

export interface TaskDraft {
  title: string;
  description: string;
  priority: Priority;
}
