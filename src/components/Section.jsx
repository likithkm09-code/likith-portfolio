import Reveal from "./Reveal.jsx";

export default function Section({ id, index, label, title, intro, alt = false, children }) {
  return (
    <section id={id} className={`section${alt ? " section--alt" : ""}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">
            <span>{index}</span> / {label}
          </p>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className="section__intro">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
