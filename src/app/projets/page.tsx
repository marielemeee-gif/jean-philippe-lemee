import Link from "next/link";
import { Header } from "@/components/site-client";
import { projects } from "@/data/content";

const details: Record<string, { context: string; source: string; href: string }> = {
  acsls: { context: "Une collecte au long cours de formes, gestes et accidents anonymes rencontrés dans l’espace public. L’inventaire déplace le regard : ce qui semblait insignifiant devient une proposition esthétique.", source: "Publications récentes de l’artiste", href: "https://www.instagram.com/jean_philippe_lemee/" },
  lieux: { context: "Un abécédaire photographique et textuel construit au fil de plus de 250 communes d’Ille-et-Vilaine : églises, cafés, mairies, maisons, détails et conversations.", source: "Entretien L’Architiste, 2026", href: "https://www.larchitiste.com/jean-philippe-lemee-chercheur-dart-chitecture-au-coin-de-la-rue" },
  duos: { context: "Des œuvres placées deux par deux pour produire des échos formels, historiques ou affectifs. Le projet fut présenté à la Galerie La Rotonde à Lanester en 2021.", source: "Ville de Lanester, 2021", href: "https://www.lanester.bzh/fileadmin/user_upload/01_Lanester/Documents/Reflets/OLD/2021/reflets_293.pdf" },
  tableaux: { context: "Depuis 1989, chaque tableau suit une recette : choix d’une image, dessin confié à d’autres, sélection, agrandissement, attribution des couleurs et réalisation par un peintre en lettres.", source: "CNAP — CHIC Collection", href: "https://www.cnap.fr/jean-philippe-lemee-0" },
  ncdgqad: { context: "Créée avec Gilles Mahé, l’école de dessin par correspondance rassemble 1 500 participants entre 1994 et 1997, édite trente affiches-catalogues et constitue une boîte d’archives.", source: "CNAP — Mécaniques du dessin", href: "https://www.cnap.fr/mecaniques-du-dessin" },
  architecture: { context: "L’architecture envisagée comme une expérience vécue : seuils, parcours, alentours et usages composent une lecture sensible de l’espace construit.", source: "Entretien L’Architiste, 2026", href: "https://www.larchitiste.com/jean-philippe-lemee-chercheur-dart-chitecture-au-coin-de-la-rue" },
};

export default function ProjectsPage() {
  return <main className="inner-page">
    <Header />
    <header className="page-hero section-pad"><p className="section-index">Dossiers</p><h1>Projets<br /><i>& méthodes</i></h1><p>Six entrées pour comprendre une pratique fondée sur la circulation des images, les règles du jeu et la délégation.</p></header>
    <div className="project-dossiers section-pad">
      {projects.map((project) => <article id={project.id} key={project.id}>
        <div className="dossier-index"><span>{project.number}</span><span>{project.subtitle}</span></div>
        <div className={`dossier-mark tone-${project.tone}`} aria-hidden="true">{project.mark}</div>
        <div className="dossier-copy"><h2>{project.title}</h2><p>{details[project.id].context}</p><a href={details[project.id].href} target="_blank" rel="noreferrer">{details[project.id].source} ↗</a></div>
      </article>)}
    </div>
    <div className="next-page section-pad"><p>Pour aller plus loin</p><Link href="/archives">Archives, chronologie et sources →</Link></div>
  </main>;
}
