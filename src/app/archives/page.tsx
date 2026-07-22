import Link from "next/link";
import { Header } from "@/components/site-client";
import { exhibitionHighlights, sources, timeline } from "@/data/content";

const sourceType = (index:number) => index < 3 ? "Dossier artiste" : index < 11 ? "Institution & collection" : index < 18 ? "Archive & publication" : "Notice & réseau";

export default function ArchivesPage() {
  return <main id="top" className="document-page"><Header />
    <header className="page-intro archive-intro shell"><p className="eyebrow">Documentation</p><h1>Sources<br /><em>& parcours</em></h1><p>La seule page de référence du site : une bibliographie accessible, suivie des principaux repères biographiques et d’exposition.</p></header>
    <section className="corpus shell" id="corpus"><header className="archive-heading"><div><span>01</span><h2>Répertoire des sources</h2></div><p>{sources.length} liens directs · classement par nature de document</p></header><div className="source-table">{sources.map(([label,url],index) => <a href={url} target="_blank" rel="noreferrer" key={url}><span>{String(index+1).padStart(2,"0")}</span><small>{sourceType(index)}</small><b>{label}</b><em>{new URL(url).hostname.replace("www.","")}</em><i>↗</i></a>)}</div></section>
    <section className="archive-split shell" id="biographie"><div className="archive-column"><header><span>02</span><h2>Biographie</h2></header><div className="fact-list">{timeline.map(([year,text]) => <div key={year}><time>{year}</time><p>{text}</p></div>)}</div></div><div className="archive-column"><header><span>03</span><h2>Expositions choisies</h2></header><div className="fact-list">{exhibitionHighlights.map(([year,title]) => <div key={`${year}-${title}`}><time>{year}</time><p>{title}</p></div>)}</div></div></section>
    <nav className="page-next shell"><Link href="/">← Accueil</Link><Link href="/projets">Découvrir les projets →</Link></nav>
  </main>;
}
