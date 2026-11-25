import Reveal from "./Reveal.jsx";
import ProjectArt from "./ProjectArt.jsx";
import { ExternalIcon, GithubIcon } from "./Icons.jsx";

export default function ProjectCard({ project, index }) {
  const { title, description, points, stack, github, demo, art, image } = project;

  return (
    <Reveal as="article" delay={(index % 2) * 90} className="project">
      <div className="project__media">
        {image ? (
          <img src={image} alt={`${title} screenshot`} loading="lazy" decoding="async" />
        ) : (
          <ProjectArt type={art} />
        )}
        <span className="project__num">{String(index + 1).padStart(2, "0")}</span>
      </div>

      <div className="project__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="project__points">
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <ul className="tags" aria-label="Technologies used">
          {stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="project__actions">
          {demo ? (
            <a className="btn btn--small btn--primary" href={demo} target="_blank" rel="noopener noreferrer">
              Live Demo <ExternalIcon width={16} height={16} />
            </a>
          ) : (
            <span className="btn btn--small btn--disabled" aria-disabled="true" title="Demo link coming soon">
              Live Demo · soon
            </span>
          )}
          <a className="btn btn--small btn--ghost" href={github} target="_blank" rel="noopener noreferrer">
            <GithubIcon width={16} height={16} /> GitHub
          </a>
        </div>
      </div>
    </Reveal>
  );
}
