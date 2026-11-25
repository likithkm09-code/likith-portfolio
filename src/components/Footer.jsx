import { navLinks, profile } from "../data/portfolio.js";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <strong>{profile.name}</strong>
          <p>Full Stack · Java · JavaScript</p>
        </div>
        <nav aria-label="Footer">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="footer__social">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} {profile.name}. Built with React.
      </p>
    </footer>
  );
}
