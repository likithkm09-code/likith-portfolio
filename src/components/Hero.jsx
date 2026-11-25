import { profile } from "../data/portfolio.js";
import { ArrowIcon, DownloadIcon, GithubIcon, LinkedinIcon } from "./Icons.jsx";

function CodeCard() {
  return (
    <div className="codecard" role="img" aria-label="Code snippet describing Likith as a developer">
      <div className="codecard__bar">
        <span /> <span /> <span />
        <em>developer.js</em>
      </div>
      <pre>
        <code>
          <span className="c-k">const</span> <span className="c-v">likith</span> <span className="c-p">=</span>{" "}
          <span className="c-p">{"{"}</span>
          {"\n  "}role<span className="c-p">:</span> <span className="c-s">"Full Stack Developer"</span>
          <span className="c-p">,</span>
          {"\n  "}stack<span className="c-p">:</span> <span className="c-p">[</span>
          <span className="c-s">"Java"</span>
          <span className="c-p">,</span> <span className="c-s">"JavaScript"</span>
          <span className="c-p">,</span>
          {"\n          "}
          <span className="c-s">"Node.js"</span>
          <span className="c-p">,</span> <span className="c-s">"React"</span>
          <span className="c-p">],</span>
          {"\n  "}focus<span className="c-p">:</span> <span className="c-s">"real-world software"</span>
          <span className="c-p">,</span>
          {"\n  "}learning<span className="c-p">:</span> <span className="c-k">true</span>
          <span className="c-p">,</span>
          {"\n"}
          <span className="c-p">{"}"}</span>
          <span className="c-p">;</span>
          {"\n\n"}
          <span className="c-m">{"// ship it"}</span>
          <span className="caret" aria-hidden="true" />
        </code>
      </pre>
      <div className="codecard__status">
        <span className="dot" /> open to opportunities
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__roles">
            {profile.roles.map((r, i) => (
              <span key={r}>
                {r}
                {i < profile.roles.length - 1 && <i aria-hidden="true">/</i>}
              </span>
            ))}
          </p>
          <h1 id="hero-title">
            Building Digital <span className="accent">Experiences</span> Through Code.
          </h1>
          <p className="hero__sub">{profile.subheading}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              Explore My Work <ArrowIcon />
            </a>
            <a className="btn btn--ghost" href={profile.resume} download>
              Download Resume <DownloadIcon />
            </a>
          </div>

          <div className="hero__social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <GithubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <LinkedinIcon />
            </a>
            <span className="hero__line" aria-hidden="true" />
            <span className="hero__name">{profile.name}</span>
          </div>
        </div>

        <div className="hero__visual">
          <CodeCard />
          <div className="hero__badge hero__badge--a">Java</div>
          <div className="hero__badge hero__badge--b">Node.js</div>
          <div className="hero__badge hero__badge--c">OpenCV</div>
        </div>
      </div>
    </section>
  );
}
