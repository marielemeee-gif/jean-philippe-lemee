import Image from "next/image";
import { Header, ProjectGrid } from "@/components/site-client";
import { projects, sources, timeline } from "@/data/content";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero" id="accueil">
        <div className="eyebrow"><span>Artiste</span><span>Historien de l’art</span><span>Rennes</span></div>
        <h1><span>Jean-Philippe</span><strong>Lemée</strong></h1>
        <div className="hero-bottom">
          <p>Regarder autrement.<br />Faire circuler les images.<br />Transformer le public en complice.</p>
          <a className="round-link" href="#projets" aria-label="Découvrir les projets">↓</a>
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

      <section className="works section-pad" id="oeuvres">
        <div className="section-heading">
          <p className="section-index">01 — Œuvres</p>
          <h2>Quelques<br />images</h2>
        </div>
        <div className="works-grid">
          <figure className="work-large">
            <Image src="https://ddabretagne.org/media/pages/artistes/jean-philippe-lemee/oeuvres/2017/39c79b1474-1647358020/sav1-1200x900-q80.jpg" alt="Œuvre de Jean-Philippe Lemée présentée dans la sélection 2017" width={1200} height={900} unoptimized />
            <figcaption><span>Sélection 2017</span><a href="https://ddabretagne.org/fr/artistes/jean-philippe-lemee/oeuvres/2017" target="_blank" rel="noreferrer">DDAB Bretagne · © droits réservés ↗</a></figcaption>
          </figure>
          <figure>
            <Image src="https://ddabretagne.org/media/pages/artistes/jean-philippe-lemee/oeuvres/2009/croisades/26017a88ca-1647358069/croisade2-675x675-q80.jpg" alt="Œuvre de la série Croisades de Jean-Philippe Lemée" width={675} height={675} unoptimized />
            <figcaption><span>Croisades, 2009</span><a href="https://ddabretagne.org/fr/artistes/jean-philippe-lemee/oeuvres/2009" target="_blank" rel="noreferrer">DDAB Bretagne ↗</a></figcaption>
          </figure>
          <figure>
            <Image src="https://ddabretagne.org/media/pages/artistes/jean-philippe-lemee/oeuvres/2008/archanges-bleus/0e943868eb-1647358078/archangebleu3-675x675-q80.jpg" alt="Œuvre de la série Archanges bleus de Jean-Philippe Lemée" width={675} height={675} unoptimized />
            <figcaption><span>Archanges bleus, 2008</span><a href="https://ddabretagne.org/fr/artistes/jean-philippe-lemee/oeuvres/2008" target="_blank" rel="noreferrer">DDAB Bretagne ↗</a></figcaption>
          </figure>
        </div>
      </section>

      <section className="projects section-pad" id="projets">
        <div className="section-heading"><p className="section-index">02 — Projets</p><h2>Une œuvre<br /><i>en mouvement</i></h2></div>
        <ProjectGrid projects={projects} />
      </section>

      <section className="method section-pad" id="methode">
        <div className="section-heading light"><p className="section-index">02 — La recette</p><h2>Peindre sans<br />peindre seul</h2></div>
        <ol className="recipe">
          <li><span>01</span><strong>Choisir</strong><p>Une œuvre ancienne, une image populaire, un jeu ou un détail du quotidien.</p></li>
          <li><span>02</span><strong>Faire circuler</strong><p>Confier l’image à des inconnus, des élèves ou des amis pour un dessin rapide.</p></li>
          <li><span>03</span><strong>Composer</strong><p>Sélectionner, agrandir, combiner les dessins et déterminer un code coloré.</p></li>
          <li><span>04</span><strong>Déléguer</strong><p>Transmettre la réalisation au peintre en lettres et rendre visibles toutes les mains.</p></li>
        </ol>
        <blockquote>« L’artiste devient metteur en scène, coordinateur de contributions et d’expériences. »<cite>— d’après Jean-Marc Huitorel</cite></blockquote>
      </section>

      <section className="places section-pad">
        <div className="place-map" aria-hidden="true"><span>250+</span><small>communes visitées</small></div>
        <div className="places-copy">
          <p className="section-index">03 — Le voyage chez soi</p>
          <h2>Au coin<br />de la rue</h2>
          <p>Arpenter Rennes et les villages d’Ille-et-Vilaine comme on visiterait Rome ou New York. Commencer par la place de l’église. Tourner autour. Entrer si la porte est ouverte. Observer la mairie, le café, les maisons — puis ce petit détail que personne ne regarde.</p>
          <a href="https://www.larchitiste.com/jean-philippe-lemee-chercheur-dart-chitecture-au-coin-de-la-rue" target="_blank" rel="noreferrer">Lire l’entretien dans L’Architiste ↗</a>
        </div>
      </section>

      <section className="timeline section-pad" id="parcours">
        <div className="section-heading"><p className="section-index">04 — Parcours</p><h2>Repères</h2></div>
        <div className="timeline-list">
          {timeline.map(([year, text]) => <div className="timeline-row" key={year}><strong>{year}</strong><p>{text}</p></div>)}
        </div>
      </section>

      <section className="sources section-pad" id="sources">
        <div><p className="section-index">05 — Documentation</p><h2>Sources<br />& archives</h2></div>
        <div className="source-list">
          {sources.map(([label, url], index) => <a href={url} target="_blank" rel="noreferrer" key={url}><span>0{index + 1}</span>{label}<b>↗</b></a>)}
          <p>Les reproductions d’œuvres seront ajoutées après validation des droits et crédits photographiques. Les contenus biographiques seront relus avec l’artiste avant publication définitive.</p>
        </div>
      </section>

      <footer><p>Jean-Philippe Lemée</p><p>Vit et travaille à Rennes</p><a href="#accueil">Retour en haut ↑</a></footer>
    </main>
  );
}
