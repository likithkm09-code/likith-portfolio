import { about } from "../data/portfolio.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <Section id="about" index="01" label="About" title="Practical software, built with care.">
      <div className="about">
        <Reveal as="p" className="about__lead">
          {about.paragraph}
        </Reveal>
        <ul className="about__pillars">
          {about.pillars.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 80} className="pillar">
              <span className="pillar__n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
