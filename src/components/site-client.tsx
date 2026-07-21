"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Retour à l’accueil"><span>JPL</span><b>Jean-Philippe Lemée</b></Link>
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
        <Link href="/">Accueil</Link>
        <Link href="/projets">Projets</Link>
        <Link href="/archives">Sources & parcours</Link>
      </nav>
      <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Retour en haut">↑</button>
    </header>
  );
}
