import {Sparkles} from 'lucide-react';

export function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#top">
        <span>
          <Sparkles size={18} />
        </span>
        taskflow
      </a>
      <div className="topbar-note">
        <span className="pulse" />
        Ваш фокус на сегодня
      </div>
      <button className="avatar" aria-label="Профиль">
        АД
      </button>
    </header>
  );
}
