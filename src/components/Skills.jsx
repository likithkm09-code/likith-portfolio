import { skills } from "../data/portfolio.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      label="Skills"
      title="The tools I build with."
      intro="A working toolkit across languages, web, data and applied AI."
      alt
    >
      <div className="skills">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 70} className="skillcard">
            <h3>{group.group}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
