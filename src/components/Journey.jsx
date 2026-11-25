import { journey } from "../data/portfolio.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Journey() {
  return (
    <Section
      id="journey"
      index="04"
      label="Journey"
      title="Development journey."
      intro="Academic and personal projects, and the skills they built, in order."
      alt
    >
      <ol className="timeline">
        {journey.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 60} className="timeline__item">
            <span className="timeline__period">{step.period}</span>
            <div className="timeline__body">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
