import { projects } from "../data/portfolio.js";
import Section from "./Section.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      label="Projects"
      title="Selected work."
      intro="From computer vision on a Raspberry Pi to full-stack platforms with role-based access."
    >
      <div className="projects">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
