import Link from "next/link";
import { Header } from "@/components/site-client";

const paths = [
  { number: "01", title: "Regarder", text: "Déplacer l’attention vers les formes ordinaires, les lieux proches et ce qui existe déjà.", href: "/projets#regarder" },
  { number: "02", title: "Fabriquer", text: "Écrire des protocoles, déléguer le geste et mettre les images en conversation.", href: "/projets#fabriquer" },
  { number: "03", title: "Transmettre", text: "Faire de l’histoire de l’art, du dessin et de l’architecture des expériences collectives.", href: "/projets#transmettre" },
];

export default function Home() {
  return <main id="top">
    <Header />
    <section className="masthead shell">
      <div className="masthead-index"><span>Artiste & historien de l’art</span><span>Rennes · 1957—</span></div>
      <h1>Jean-Philippe <em>Lemée</em></h1>
      <p className="masthead-lead">Des œuvres qui commencent par une règle du jeu et se terminent dans le regard des autres.</p>
      <div className="masthead-actions"><Link href="/projets">Découvrir les projets <i>→</i></Link><Link href="/archives">Consulter les sources <i>↗</i></Link></div>
      <div className="masthead-mark" aria-hidden="true"><span>J</span><span>P</span><span>L</span></div>
    </section>

    <section className="statement shell">
      <p className="eyebrow">Une pratique de la relation</p>
      <blockquote>« L’artiste n’est plus le seul auteur. Il organise les conditions pour que l’œuvre advienne. »</blockquote>
      <div><p>Depuis 1989, Jean-Philippe Lemée compose des recettes : choisir une image, la faire redessiner, sélectionner une interprétation, définir ses couleurs puis confier sa réalisation à un peintre en lettres.</p><p>Cette méthode traverse la peinture, le dessin, l’espace public et l’architecture. Elle transforme l’auteur en passeur et le spectateur en participant.</p></div>
    </section>

    <section className="paths shell">
      <header><p className="eyebrow">Parcours de lecture</p><h2>Trois manières<br />d’entrer dans l’œuvre</h2></header>
      <div className="path-list">{paths.map(path => <Link href={path.href} key={path.number}><span>{path.number}</span><div><h3>{path.title}</h3><p>{path.text}</p></div><i>↗</i></Link>)}</div>
    </section>

    <aside className="source-callout shell"><div><span>Documentation</span><strong>21</strong><small>ressources en ligne</small></div><p>Notices institutionnelles, catalogues, archives, entretiens et fonds publics sont réunis dans une bibliographie unique.</p><Link href="/archives#corpus">Ouvrir le répertoire <i>→</i></Link></aside>
    <footer className="site-footer shell"><span>Jean-Philippe Lemée</span><span>Œuvres · méthodes · sources</span><a href="#top">Haut de page ↑</a></footer>
  </main>;
}
