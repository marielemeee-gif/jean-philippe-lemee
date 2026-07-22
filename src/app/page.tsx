import Link from "next/link";
import { Header } from "@/components/site-client";

const destinations = [
  { number: "01", title: "Œuvres & projets", text: "Découvrir ACSLS, l’Abécédaire des lieux, Deux par deux, les Tableaux Faits Main, NCDGQAD et Art-chitecture.", href: "/projets", action: "Voir les 6 projets" },
  { number: "02", title: "Biographie", text: "Suivre le parcours de Jean-Philippe Lemée, de sa formation aux expositions et projets les plus récents.", href: "/archives#biographie", action: "Lire le parcours" },
  { number: "03", title: "Sources", text: "Accéder directement aux notices institutionnelles, catalogues, archives, entretiens et collections publiques.", href: "/archives#corpus", action: "Consulter les 21 sources" },
];

export default function Home() {
  return <main id="top">
    <Header />
    <section className="masthead shell">
      <div className="masthead-index"><span>Artiste & historien de l’art</span><span>Rennes · 1957—</span></div>
      <h1>Jean-Philippe <em>Lemée</em></h1>
      <p className="masthead-lead">Artiste et historien de l’art. Des œuvres qui commencent par une règle du jeu et se terminent dans le regard des autres.</p>
      <div className="masthead-actions"><Link className="primary-action" href="/projets">Explorer les œuvres et projets <i>→</i></Link><Link href="/archives#corpus">Accéder aux sources <i>↗</i></Link></div>
      <div className="masthead-mark" aria-hidden="true"><span>J</span><span>P</span><span>L</span></div>
    </section>

    <section className="statement shell">
      <p className="eyebrow">Une pratique de la relation</p>
      <blockquote>« L’artiste n’est plus le seul auteur. Il organise les conditions pour que l’œuvre advienne. »</blockquote>
      <div><p>Depuis 1989, Jean-Philippe Lemée compose des recettes : choisir une image, la faire redessiner, sélectionner une interprétation, définir ses couleurs puis confier sa réalisation à un peintre en lettres.</p><p>Cette méthode traverse la peinture, le dessin, l’espace public et l’architecture. Elle transforme l’auteur en passeur et le spectateur en participant.</p></div>
    </section>

    <section className="paths shell">
      <header><p className="eyebrow">Explorer le site</p><h2>Que cherchez-<br />vous&nbsp;?</h2><p className="path-help">Choisissez une entrée. Chaque contenu est rangé à un seul endroit pour éviter les doublons.</p></header>
      <div className="path-list">{destinations.map(path => <Link href={path.href} key={path.number}><span>{path.number}</span><div><h3>{path.title}</h3><p>{path.text}</p><b>{path.action} <i>→</i></b></div></Link>)}</div>
    </section>

    <aside className="source-callout shell"><div><span>Répertoire documentaire</span><strong>21</strong><small>ressources en ligne</small></div><p>Toutes les références utilisées par le site sont regroupées, nommées et reliées à leur publication d’origine.</p><Link href="/archives#corpus">Voir toutes les sources <i>→</i></Link></aside>
    <footer className="site-footer shell"><span>Jean-Philippe Lemée</span><span>Œuvres · méthodes · sources</span><a href="#top">Haut de page ↑</a></footer>
  </main>;
}
