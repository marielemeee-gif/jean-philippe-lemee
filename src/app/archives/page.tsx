import Link from "next/link";
import { Header } from "@/components/site-client";
import { sources } from "@/data/content";

const sourceType = (index:number) => index < 3 ? "Dossier artiste" : index < 11 ? "Institution & collection" : index < 18 ? "Archive & publication" : "Notice & réseau";

export default function ArchivesPage() {
  return <main id="top" className="document-page"><Header />
    <header className="page-intro archive-intro shell"><p className="eyebrow">Documentation</p><h1>Toutes les<br /><em>sources</em></h1><p>Le répertoire public utilisé pour construire le site : dossiers institutionnels, catalogues, archives, presse, entretiens et fonds de collection.</p></header>
    <section className="corpus shell" id="corpus"><header className="archive-heading"><div><span>01</span><h2>Répertoire des sources</h2></div><p>{sources.length} liens directs · classement par nature de document</p></header><div className="source-table">{sources.map(([label,url],index) => <a href={url} target="_blank" rel="noreferrer" key={url}><span>{String(index+1).padStart(2,"0")}</span><small>{sourceType(index)}</small><b>{label}</b><em>{new URL(url).hostname.replace("www.","")}</em><i>↗</i></a>)}</div></section>
    <aside className="document-note shell"><strong>Méthode</strong><p>Les sources institutionnelles sont prioritaires. Les agrégateurs de marché sont conservés à titre de signalement, sans servir seuls à établir un fait.</p></aside>
    <nav className="page-next shell"><Link href="/parcours">← Parcours complet</Link><Link href="/projets">Œuvres & projets →</Link></nav>
  </main>;
}
