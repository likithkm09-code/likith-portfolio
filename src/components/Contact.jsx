import { useState } from "react";
import { profile } from "../data/portfolio.js";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./Icons.jsx";

// Set VITE_FORM_ENDPOINT in a .env file to a Formspree (or similar) endpoint, e.g.
// VITE_FORM_ENDPOINT=https://formspree.io/f/your-id
// Without it, the form falls back to opening the visitor's email app.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [message, setMessage] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      setMessage("Opening your email app…");
      return;
    }

    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
      setMessage("Thanks! Your message has been sent.");
    } catch {
      setStatus("error");
      setMessage(`Something went wrong. Please email me at ${profile.email}.`);
    }
  }

  return (
    <Section id="contact" index="06" label="Contact" title="Let's Build Something Together." alt>
      <div className="contact">
        <Reveal className="contact__info">
          <p>
            Open to developer, full-stack and AI/ML opportunities. Send a note and I'll get back to you.
          </p>
          <ul>
            <li>
              <MailIcon /> <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <PhoneIcon /> <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            </li>
            <li>
              <LinkedinIcon />{" "}
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                linkedin.com/in/likithkm
              </a>
            </li>
            <li>
              <GithubIcon />{" "}
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal as="form" delay={100} className="form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          <p className={`form__status form__status--${status}`} role="status" aria-live="polite">
            {message}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
