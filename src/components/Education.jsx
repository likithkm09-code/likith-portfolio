import { certifications, education, languages, onlineLearning } from "../data/portfolio.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { ExternalIcon } from "./Icons.jsx";

function CredentialList({ title, items }) {
  return (
    <Reveal className="panel">
      <h3>{title}</h3>
      <ul className="credlist">
        {items.map((c) => (
          <li key={c.title}>
            <div>
              <strong>{c.title}</strong>
              <span>{c.issuer}</span>
            </div>
            {c.link ? (
              <a href={c.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${c.title}`}>
                <ExternalIcon width={16} height={16} />
              </a>
            ) : (
              <em>[add link]</em>
            )}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Education() {
  return (
    <Section id="education" index="05" label="Education" title="Education & certifications.">
      <div className="edu">
        <Reveal className="panel panel--wide">
          <h3>Educational background</h3>
          <ul className="edulist">
            {education.map((e) => (
              <li key={e.school}>
                <span className="edulist__period">{e.period}</span>
                <div>
                  <strong>{e.degree}</strong>
                  <span>{e.school}</span>
                </div>
                <b>{e.score}</b>
              </li>
            ))}
          </ul>
        </Reveal>
        <CredentialList title="Technical certifications" items={certifications} />
        <CredentialList title="Online learning" items={onlineLearning} />
      </div>
      <Reveal as="p" className="langs">
        Languages: {languages.join(" · ")}
      </Reveal>
    </Section>
  );
}
