import Image from "next/image";
import Link from "next/link";
import { Header, ProjectGrid } from "@/components/site-client";
import { artworks, projects } from "@/data/content";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero" id="accueil">
        <div className="eyebrow"><span>Artiste</span><span>Historien de l’art</span><span>Rennes</span></div>
        <h1><span>Jean-Philippe</span><strong>Lemée</strong></h1>
        <div className="hero-bottom">
          <p>Regarder autrement.<br />Faire circuler les images.<br />Transformer le public en complice.</p>
          <a className="round-link" href="#oeuvres" aria-label="Découvrir les œuvres">↓</a>
        </div>
        <div className="hero-shape shape-one" /><div className="hero-shape shape-two" />
      </section>

      <section className="intro section-pad">
        <p className="section-index">00 — En bref</p>
        <div className="intro-copy">
          <p>Depuis la fin des années 1980, Jean-Philippe Lemée construit une œuvre où la peinture devient un <em>jeu de société</em>.</p>
          <p className="muted">Il collecte, propose des règles, distribue les rôles et fait passer les images de main en main. Artiste, enseignant et historien de l’art, il ne cesse d’interroger une question simple : <strong>qui fait l’œuvre ?</strong></p>
        </div>
      </section>

      <section className="works works-compact section-pad" id="oeuvres">
        <div className="section-heading">
          <p className="section-index">01 — Sélection</p>
          <h2>Voir<br /><i>les œuvres</i></h2>
        </div>
        <div className="compact-art-grid">
          {artworks.slice(0, 6).map((artwork, index) => (
            <figure key={`${artwork.title}-${index}`}>
              <a href={artwork.href} target="_blank" rel="noreferrer">
                <Image src={artwork.image} alt={`${artwork.title}, œuvre de Jean-Philippe Lemée, ${artwork.year}`} width={675} height={675} unoptimized />
              </a>
              <figcaption><span>{artwork.title}</span><span>{artwork.year}</span></figcaption>
            </figure>
          ))}
        </div>
        <Link className="text-link" href="/archives#oeuvres">Voir l’iconographie et les crédits →</Link>
      </section>

      <section className="projects section-pad" id="projets">
        <div className="section-heading"><p className="section-index">02 — Projets</p><h2>Une œuvre<br /><i>en mouvement</i></h2></div>
        <ProjectGrid projects={projects} />
        <Link className="text-link" href="/projets">Explorer tous les projets →</Link>
      </section>

      <section className="statement section-pad">
        <p className="section-index">03 — Une position</p>
        <p className="statement-lead">Ni peintre solitaire, ni simple collectionneur d’images : <strong>un metteur en scène de tableaux.</strong></p>
        <div className="statement-columns">
          <p>Depuis 1989, chaque toile naît d’une recette. L’image est regardée, redessinée, transmise, agrandie, colorée puis réalisée par un peintre en lettres.</p>
          <p>Références savantes et culture ordinaire se rencontrent sans hiérarchie : Fra Angelico, Courbet ou Warhol côtoient le football, les jeux et les dessins anonymes.</p>
        </div>
      </section>

      <section className="portal-grid section-pad">
        <Link href="/projets"><span>01</span><h2>Projets<br />& méthodes</h2><p>ACSLS, Abécédaire des lieux, Deux par deux, NCDGQAD, Tableaux Faits Main et art-chitecture.</p><b>Entrer →</b></Link>
        <Link href="/archives"><span>02</span><h2>Archives<br />& sources</h2><p>Œuvres, repères, expositions, bibliographie et corpus documentaire complet.</p><b>Consulter →</b></Link>
      </section>

      <footer><p>Jean-Philippe Lemée</p><p>Vit et travaille à Rennes</p><a href="#accueil">Retour en haut ↑</a></footer>
    </main>
  );
}
