"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Project } from "@/data/content";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="project-index">
      {projects.map((project) => (
        <Link href={`/projets#${project.id}`} key={project.id}>
          <span>{project.number}</span>
          <div>
            <small>{project.subtitle}</small>
            <h3>{project.title}</h3>
          </div>
          <i>→</i>
        </Link>
      ))}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Retour à l’accueil"><span>JP</span>Lemée</Link>
      <button
        className="menu-button"
        type="button"
        onClick={() => setOpen(!open)}
        aria-controls="navigation-principale"
        aria-expanded={open}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <i /><i />
      </button>
      <nav id="navigation-principale" className={open ? "open" : ""} aria-label="Navigation principale">
        <Link href="/#sources">Sources</Link>
        <Link href="/projets">Projets</Link>
        <Link href="/archives#parcours">Parcours</Link>
        <Link href="/archives">Archives</Link>
      </nav>
      <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Retour en haut">↑</button>
    </header>
  );
}
