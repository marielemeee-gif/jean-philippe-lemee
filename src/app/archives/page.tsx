import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/site-client";
import { artworks, exhibitionHighlights, sources, timeline } from "@/data/content";

const selectedImages = [artworks[0], artworks[2], artworks[3]];

export default function ArchivesPage() {
  return <main id="top" className="document-page">
    <Header />
    <header className="document-hero shell"><div><span className="kicker">Documentation</span><h1>Archives<br />& sources</h1></div><p>Un récapitulatif raisonné des ressources retrouvées sur Jean-Philippe Lemée. Chaque entrée renvoie directement au document ou à l’organisme producteur.</p></header>

    <section className="corpus shell" id="corpus"><div className="section-head"><div className="section-label"><span>01</span><p>Corpus en ligne</p></div><p>{sources.length} ressources vérifiées · ouverture dans la source d’origine.</p></div><div className="source-table">{sources.map(([label,url],index) => <a href={url} target="_blank" rel="noreferrer" key={url}><span>{String(index+1).padStart(2,"0")}</span><b>{label}</b><small>{new URL(url).hostname.replace("www.","")}</small><i>↗</i></a>)}</div></section>

    <section className="evidence shell"><div className="section-head"><div className="section-label"><span>02</span><p>Repères visuels</p></div><p>Trois aperçus seulement, liés aux dossiers DDAB et affichés à leur taille utile.</p></div><div className="evidence-grid">{selectedImages.map((artwork,index) => <figure key={`${artwork.title}-${index}`}><a href={artwork.href} target="_blank" rel="noreferrer"><Image src={artwork.image} alt={`${artwork.title}, ${artwork.year}`} width={675} height={675} unoptimized /></a><figcaption><b>{artwork.title}</b><span>{artwork.year} · DDAB Bretagne ↗</span></figcaption></figure>)}</div></section>

    <section className="chronology shell" id="parcours"><div className="section-head"><div className="section-label"><span>03</span><p>Chronologie</p></div><p>Repères biographiques et artistiques.</p></div><div className="chronology-list">{timeline.map(([year,text]) => <div key={year}><time>{year}</time><p>{text}</p></div>)}</div></section>

    <section className="shows shell"><div className="section-head"><div className="section-label"><span>04</span><p>Expositions choisies</p></div><p>Sélection issue de la bio-bibliographie DDAB.</p></div><div className="shows-list">{exhibitionHighlights.map(([year,title]) => <div key={`${year}-${title}`}><time>{year}</time><p>{title}</p></div>)}</div></section>
    <nav className="page-next shell"><Link href="/">← Accueil</Link><Link href="/projets">Projets & méthodes →</Link></nav>
  </main>;
}
