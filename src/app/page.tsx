import Link from "next/link";
import { Header, ProjectGrid } from "@/components/site-client";
import { projects, sources } from "@/data/content";

const featuredSources = sources.slice(0, 8);

export default function Home() {
  return <main id="top">
    <Header />
    <section className="home-hero shell">
      <div className="hero-meta"><span>Artiste · Historien de l’art</span><span>Rennes · depuis 1957</span></div>
      <h1>Jean-Philippe<br /><em>Lemée</em></h1>
      <div className="hero-summary"><p>Un site-document pour parcourir une œuvre fondée sur la circulation des images, la délégation et le rôle actif du regardeur.</p><Link href="/archives">Consulter le corpus <span>21 sources →</span></Link></div>
    </section>

    <section className="overview shell">
      <div className="section-label"><span>01</span><p>La pratique</p></div>
      <div className="overview-copy"><p>Depuis 1989, Jean-Philippe Lemée produit des « Tableaux Faits Main » à partir de recettes : une image est confiée à d’autres mains, redessinée, sélectionnée, agrandie puis réalisée par un peintre en lettres.</p><p>Son travail rapproche histoire de l’art, culture ordinaire, jeux, architecture et formes trouvées. L’artiste n’est plus seul auteur : il organise les conditions de l’œuvre.</p></div>
    </section>

    <section className="source-preview shell" id="sources">
      <div className="section-head"><div className="section-label"><span>02</span><p>Sources principales</p></div><p>Le point d’entrée du site : fonds institutionnels, archives, catalogues et publications.</p></div>
      <div className="source-cards">{featuredSources.map(([label,url],index) => <a href={url} target="_blank" rel="noreferrer" key={url}><span className="source-number">{String(index+1).padStart(2,"0")}</span><div><b>{label}</b><small>{new URL(url).hostname.replace("www.","")}</small></div><span className="source-arrow">↗</span></a>)}</div>
      <Link className="inline-link" href="/archives#corpus">Voir les 21 sources et le récapitulatif →</Link>
    </section>

    <section className="project-preview shell" id="projets">
      <div className="section-head"><div className="section-label"><span>03</span><p>Six entrées</p></div><p>Des projets reliés à leurs documents de référence.</p></div>
      <ProjectGrid projects={projects} />
    </section>

    <section className="route-links shell"><Link href="/projets"><span>Dossiers</span><strong>Projets & méthodes</strong><i>→</i></Link><Link href="/archives"><span>Documentation</span><strong>Archives & parcours</strong><i>→</i></Link></section>
    <footer className="site-footer shell"><span>Jean-Philippe Lemée</span><span>Site documentaire · 2026</span><a href="#top">Haut de page ↑</a></footer>
  </main>;
}
