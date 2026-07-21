import Link from "next/link";
import { Header } from "@/components/site-client";
import { projects } from "@/data/content";

const details: Record<string,{summary:string;source:string;url:string}> = {
  acsls:{summary:"Un inventaire quotidien de formes, gestes et accidents anonymes rencontrés dans l’espace public. Le projet ne fabrique pas un nouvel objet : il déplace le regard et attribue un auteur fictif à ce qui était invisible.",source:"Entretien — L’Architiste",url:"https://www.larchitiste.com/jean-philippe-lemee-chercheur-dart-chitecture-au-coin-de-la-rue"},
  lieux:{summary:"Une géographie personnelle des communes d’Ille-et-Vilaine. Places, cafés, églises, mairies, détails et conversations deviennent les entrées d’un abécédaire du proche.",source:"Journal de recherche — Instagram",url:"https://www.instagram.com/jean_philippe_lemee/"},
  duos:{summary:"Des œuvres sont associées deux par deux pour produire des échos formels, historiques ou affectifs. Le dispositif laisse l’écart entre les images construire une nouvelle lecture.",source:"Deux par deux — Ville de Lanester",url:"https://www.lanester.bzh/fileadmin/user_upload/01_Lanester/Documents/Reflets/OLD/2021/reflets_293.pdf"},
  tableaux:{summary:"Depuis 1989, chaque tableau suit une recette : une image choisie est redessinée par d’autres, sélectionnée, agrandie, mise en couleurs puis réalisée par un peintre en lettres.",source:"Présentation — DDAB Bretagne",url:"https://ddabretagne.org/fr/artistes/jean-philippe-lemee/presentation"},
  ncdgqad:{summary:"Avec Gilles Mahé, une école de dessin par correspondance réunit 1 500 participants de 1994 à 1997. Les trente affiches-catalogues produites deviennent une œuvre et une archive collectives.",source:"Mécaniques du dessin — CNAP",url:"https://www.cnap.fr/mecaniques-du-dessin"},
  architecture:{summary:"Une lecture de l’architecture comme expérience vécue. Seuils, parcours, alentours et usages composent une histoire sensible de l’espace construit.",source:"Collection d’Ille-et-Vilaine",url:"https://artcontemporain.ille-et-vilaine.fr/assets/040_jean-philippe-lemee.pdf"},
};

const groups = [
  { id:"regarder", title:"Regarder", ids:["acsls","lieux"] },
  { id:"fabriquer", title:"Fabriquer", ids:["duos","tableaux"] },
  { id:"transmettre", title:"Transmettre", ids:["ncdgqad","architecture"] },
];

export default function ProjectsPage(){return <main id="top" className="document-page"><Header/>
  <header className="page-intro shell"><p className="eyebrow">Les projets</p><h1>Six protocoles,<br /><em>trois gestes</em></h1><p>Un parcours organisé par intention plutôt que par date. Chaque dossier mène à une source de référence ; la bibliographie exhaustive reste réunie dans les archives.</p></header>
  <nav className="chapter-nav shell" aria-label="Chapitres">{groups.map(group=><a href={`#${group.id}`} key={group.id}><span>{group.id === "regarder" ? "01" : group.id === "fabriquer" ? "02" : "03"}</span>{group.title}</a>)}</nav>
  {groups.map((group,groupIndex)=><section className="project-chapter shell" id={group.id} key={group.id}><header><span>0{groupIndex+1}</span><h2>{group.title}</h2></header><div className="project-pair">{group.ids.map(id=>{const project=projects.find(item=>item.id===id)!;const detail=details[id];return <article id={id} key={id}><div className="project-meta"><span>{project.subtitle}</span><span>{project.number} / 06</span></div><h3>{project.title}</h3><p>{detail.summary}</p><a href={detail.url} target="_blank" rel="noreferrer">Lire la source principale <span>{detail.source}</span><i>↗</i></a></article>})}</div></section>)}
  <nav className="page-next shell"><Link href="/">← Accueil</Link><Link href="/archives">Sources & parcours →</Link></nav>
</main>}
