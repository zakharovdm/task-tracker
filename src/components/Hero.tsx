import {Plus} from 'lucide-react';

export function Hero({onCreateTask}: {onCreateTask: () => void}) {
  return (
    <section className="hero" id="top">
      <div>
        <p className="eyebrow">МОЙ ОРГАНАЙЗЕР</p>
        <h1>
          Дела, которые
          <br />
          <em>двигают вперёд.</em>
        </h1>
        <p className="intro">Планируйте, держите фокус и спокойно доводите задачи до результата.</p>
      </div>
      <button className="add-button" onClick={onCreateTask}>
        <Plus size={20} />
        Новая задача
      </button>
    </section>
  );
}
