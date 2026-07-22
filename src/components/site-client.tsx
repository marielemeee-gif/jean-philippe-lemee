"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Œuvres & projets", href: "/projets", note: "6 projets expliqués" },
  { label: "Biographie", href: "/archives#biographie", note: "Parcours et expositions" },
  { label: "Sources", href: "/archives#corpus", note: "21 références vérifiées" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    const close = () => setOpen(false);
    const syncHash = () => { setHash(window.location.hash); close(); };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const isActive = (href: string) => {
    const [route, anchor] = href.split("#");
    if (pathname !== route) return false;
    if (!anchor) return true;
    return hash === `#${anchor}` || (!hash && anchor === "corpus");
  };

  return (
    <header className="site-header">
      <Link className="brand" href="/"><span>JPL</span><b>Jean-Philippe<br />Lemée</b></Link>
      <button
        className="menu-button"
        type="button"
        onClick={() => setOpen(!open)}
        aria-controls="navigation-principale"
        aria-expanded={open}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <span>{open ? "Fermer" : "Menu"}</span><i /><i />
      </button>
      <nav id="navigation-principale" className={open ? "open" : ""} aria-label="Navigation principale">
        <Link className={pathname === "/" ? "active" : ""} href="/" onClick={() => setOpen(false)}><span>Accueil</span><small>Présentation</small></Link>
        {navigation.map(item => <Link className={isActive(item.href) ? "active" : ""} href={item.href} key={item.label} onClick={() => setOpen(false)}><span>{item.label}</span><small>{item.note}</small></Link>)}
      </nav>
      <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Retour en haut">↑</button>
    </header>
  );
}
