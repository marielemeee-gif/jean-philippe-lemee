"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/data/content";

const filters = [
  ["tous", "Tout voir"],
  ["regarder", "Regarder"],
  ["fabriquer", "Fabriquer"],
  ["transmettre", "Transmettre"],
] as const;

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number][0]>("tous");
  const visible = filter === "tous" ? projects : projects.filter((item) => item.category === filter);

  return (
    <>
      <div className="filters" aria-label="Filtrer les projets">
        {filters.map(([value, label]) => (
          <button
            className={filter === value ? "active" : ""}
            key={value}
            onClick={() => setFilter(value)}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <article className={`project-card tone-${project.tone}`} id={project.id} key={project.id}>
            <div className="card-top"><span>{project.number}</span><span>{project.subtitle}</span></div>
            <div className="project-mark" aria-hidden="true">{project.mark}</div>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </>
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
      <a className="brand" href="#accueil" aria-label="Retour à l’accueil"><span>JP</span>Lemée</a>
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
        <a href="#oeuvres">Œuvres</a>
        <a href="#projets">Projets</a>
        <a href="#methode">Méthode</a>
        <a href="#parcours">Parcours</a>
        <a href="#sources">Archives</a>
      </nav>
    </header>
  );
}
