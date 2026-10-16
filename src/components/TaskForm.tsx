import {useState, type FormEvent} from 'react';
import {Plus} from 'lucide-react';
import type {Priority, TaskDraft} from '../types';

export function TaskForm({onClose, onSubmit}: {onClose: () => void; onSubmit: (draft: TaskDraft) => void}) {
  const [draft, setDraft] = useState<TaskDraft>({title: '', description: '', priority: 'medium'});
  function submit(event: FormEvent) {
    event.preventDefault();
    if (draft.title.trim()) onSubmit({...draft, title: draft.title.trim(), description: draft.description.trim()});
  }
  
  return (
    <div className="modal-backdrop" role="presentation">
      <form className="modal" onSubmit={submit}>
        <button className="close" type="button" onClick={onClose} aria-label="Закрыть">
          ×
        </button>
        <p className="eyebrow">НОВАЯ ЗАДАЧА</p>
        <h2>Что нужно сделать?</h2>
        <label>
          Название задачи
          <input autoFocus required value={draft.title} onChange={(event) => setDraft({...draft, title: event.target.value})} placeholder="Например, подготовить презентацию" />
        </label>
        <label>
          Описание <span>необязательно</span>
          <textarea value={draft.description} onChange={(event) => setDraft({...draft, description: event.target.value})} placeholder="Добавьте важные детали" rows={3} />
        </label>
        <label>
          Приоритет
          <select value={draft.priority} onChange={(event) => setDraft({...draft, priority: event.target.value as Priority})}>
            <option value="high">Высокий</option>
            <option value="medium">Средний</option>
            <option value="low">Низкий</option>
          </select>
        </label>
        <div className="form-actions">
          <button className="cancel-button" type="button" onClick={onClose}>
            Отмена
          </button>
          <button className="submit-button" type="submit">
            Создать задачу <Plus size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}
