import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/site-client";
import { artworks, exhibitionHighlights, sources, timeline } from "@/data/content";

export default function ArchivesPage() {
  return <main className="inner-page archives-page">
    <Header />
    <header className="page-hero section-pad"><p className="section-index">Documentation</p><h1>Archives<br /><i>& sources</i></h1><p>Un corpus ouvert : reproductions, chronologie, expositions et liens vers les fonds qui documentent le travail.</p></header>
    <section className="archive-images section-pad" id="oeuvres"><div className="archive-heading"><p className="section-index">01 — Iconographie</p><p>Images servies depuis Documents d’artistes Bretagne. © Droits réservés.</p></div><div className="archive-thumb-grid">{artworks.map((artwork, index) => <figure key={`${artwork.title}-${index}`}><a href={artwork.href} target="_blank" rel="noreferrer"><Image src={artwork.image} alt={`${artwork.title}, ${artwork.year}`} width={675} height={675} unoptimized /></a><figcaption>{artwork.title}<span>{artwork.year}</span></figcaption></figure>)}</div></section>
    <section className="timeline section-pad" id="parcours"><div className="section-heading"><p className="section-index">02 — Parcours</p><h2>Repères</h2></div><div className="timeline-list">{timeline.map(([year,text]) => <div className="timeline-row" key={year}><strong>{year}</strong><p>{text}</p></div>)}</div></section>
    <section className="exhibitions section-pad"><div className="section-heading light"><p className="section-index">03 — Expositions choisies</p><h2>Dans les lieux<br />et les collections</h2></div><div className="exhibition-grid">{exhibitionHighlights.map(([year,title]) => <article key={`${year}-${title}`}><span>{year}</span><p>{title}</p></article>)}</div></section>
    <section className="sources section-pad" id="sources"><div><p className="section-index">04 — Corpus en ligne</p><h2>Sources<br />retrouvées</h2></div><div className="source-list">{sources.map(([label,url],index) => <a href={url} target="_blank" rel="noreferrer" key={url}><span>{String(index+1).padStart(2,"0")}</span>{label}<b>↗</b></a>)}<p>Inventaire de travail établi à partir de sources institutionnelles, fonds d’archives, catalogues, presse et pages publiques de l’artiste. Les droits restent attachés à chaque source.</p></div></section>
    <div className="next-page section-pad"><p>Retour à la lecture</p><Link href="/projets">Projets & méthodes →</Link></div>
  </main>;
}
