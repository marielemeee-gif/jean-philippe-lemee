export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  category: "regarder" | "transmettre" | "fabriquer";
  tone: "yellow" | "blue" | "red" | "cream";
  mark: string;
};

export const projects: Project[] = [
  {
    id: "acsls",
    number: "01",
    title: "L’Art Contemporain Sans Le Savoir",
    subtitle: "ACSLS · projet en cours",
    description:
      "Un inventaire quotidien de gestes, accidents et formes anonymes rencontrés au coin des rues. L’artiste déplace le regard et leur attribue, avec humour, le statut d’œuvre.",
    category: "regarder",
    tone: "yellow",
    mark: "●",
  },
  {
    id: "lieux",
    number: "02",
    title: "L’Abécédaire des lieux",
    subtitle: "Voyager chez soi",
    description:
      "Une géographie personnelle et méthodique : places, églises, cafés, monuments, détails et conversations composent le portrait sensible des communes d’Ille-et-Vilaine.",
    category: "regarder",
    tone: "blue",
    mark: "A—Z",
  },
  {
    id: "duos",
    number: "03",
    title: "Deux par deux",
    subtitle: "Œuvres en conversation",
    description:
      "Des rapprochements d’images et de tableaux qui font apparaître filiations, écarts et coïncidences. Une exposition présentée à la Galerie La Rotonde en 2021.",
    category: "fabriquer",
    tone: "red",
    mark: "↔",
  },
  {
    id: "tableaux",
    number: "04",
    title: "Tableaux Faits Main",
    subtitle: "Une peinture par procuration",
    description:
      "Choisir une image, la confier à d’autres mains, sélectionner, agrandir, attribuer les couleurs puis déléguer la réalisation : depuis 1989, chaque série suit une recette.",
    category: "fabriquer",
    tone: "cream",
    mark: "✦",
  },
  {
    id: "ncdgqad",
    number: "05",
    title: "NCDGQAD",
    subtitle: "Nous Cherchons Des Gens Qui Aiment Dessiner",
    description:
      "Avec Gilles Mahé, une école de dessin par correspondance ouverte de 1994 à 1997 : 1 500 participants, 30 affiches-catalogues et une œuvre collective devenue archive.",
    category: "transmettre",
    tone: "yellow",
    mark: "✎",
  },
  {
    id: "architecture",
    number: "06",
    title: "Art-chitecture",
    subtitle: "Apprendre à vivre l’espace",
    description:
      "L’architecture n’est pas un décor figé mais une succession d’expériences. Portes, halls, nefs, parcours et alentours deviennent des scénarios capables de nous transformer.",
    category: "transmettre",
    tone: "blue",
    mark: "⌂",
  },
];

export const timeline = [
  ["1957", "Naît à Rennes."],
  ["1981–2019", "Enseigne l’histoire de l’art et de l’architecture à l’École américaine de Rennes."],
  ["1986", "Doctorat en histoire de l’art contemporain, Université Rennes 2."],
  ["1989", "Début des Tableaux Faits Main et de la méthode des « recettes »."],
  ["1994–1997", "NCDGQAD avec Gilles Mahé rassemble environ 1 500 participants."],
  ["1999", "Prix régional à la création artistique — Arts plastiques, Région Bretagne."],
  ["2021", "Deux par deux, Galerie La Rotonde, Lanester."],
  ["Aujourd’hui", "ACSLS, Abécédaire des lieux et exploration de plus de 250 communes d’Ille-et-Vilaine."],
] as const;

export const sources = [
  ["Documents d’artistes Bretagne", "https://ddabretagne.org/fr/artistes/jean-philippe-lemee/presentation"],
  ["DDAB — Bio & bibliographie complète", "https://ddabretagne.org/fr/artistes/jean-philippe-lemee/bio-biblio"],
  ["Réseau documents d’artistes", "https://reseau-dda.org/fr/artists/jean-philippe-lemee"],
  ["INHA — AGORHA", "https://agorha.inha.fr/ark:/54721/4674f0ea-a652-42c2-87e9-ec88bfe35d12"],
  ["CNAP — CHIC Collection", "https://www.cnap.fr/jean-philippe-lemee-0"],
  ["CNAP — Jean-Philippe Lemée", "https://www.cnap.fr/jean-philippe-lemee-1"],
  ["Frac Bretagne", "https://www.fracbretagne.fr/fr/collection/"],
  ["Collection départementale d’Ille-et-Vilaine", "https://artcontemporain.ille-et-vilaine.fr/assets/040_jean-philippe-lemee.pdf"],
  ["L’Architiste, entretien du 14 juillet 2026", "https://www.larchitiste.com/jean-philippe-lemee-chercheur-dart-chitecture-au-coin-de-la-rue"],
  ["Paris Art — expositions", "https://www.paris-art.com/createurs/jean-philippe-lemee/"],
  ["Artsper — notice artiste", "https://www.artsper.com/fr/artistes-contemporains/france/7393/jean-philippe-lemee"],
  ["Instagram", "https://www.instagram.com/jean_philippe_lemee/"],
] as const;

export const artworks = [
  { title: "Sélection 2017", year: "2017", image: "https://ddabretagne.org/media/pages/artistes/jean-philippe-lemee/oeuvres/2017/39c79b1474-1647358020/sav1-1200x900-q80.jpg", href: "https://ddabretagne.org/fr/artistes/jean-philippe-lemee/oeuvres/2017", format: "wide" },
  { title: "Sélection 2017", year: "2017", image: "https://ddabretagne.org/media/pages/artistes/jean-philippe-lemee/oeuvres/2017/c2d2864315-1647358020/sav4-1200x900-q80.jpg", href: "https://ddabretagne.org/fr/artistes/jean-philippe-lemee/oeuvres/2017", format: "square" },
  { title: "Portraits", year: "2010", image: "https://ddabretagne.org/media/pages/artistes/jean-philippe-lemee/oeuvres/2010/6ac87fc7ab-1647358025/alain1.jpg", href: "https://ddabretagne.org/fr/artistes/jean-philippe-lemee/oeuvres/2010", format: "portrait" },
  { title: "Croisades", year: "2009", image: "https://ddabretagne.org/media/pages/artistes/jean-philippe-lemee/oeuvres/2009/croisades/26017a88ca-1647358069/croisade2-675x675-q80.jpg", href: "https://ddabretagne.org/fr/artistes/jean-philippe-lemee/oeuvres/2009", format: "square" },
  { title: "Les Musiciens", year: "2009", image: "https://ddabretagne.org/media/pages/artistes/jean-philippe-lemee/oeuvres/2009/les-musiciens/8bcad0a4eb-1647358072/mus9-675x675-q80.jpg", href: "https://ddabretagne.org/fr/artistes/jean-philippe-lemee/oeuvres/2009", format: "square" },
  { title: "Les Costumes", year: "2009", image: "https://ddabretagne.org/media/pages/artistes/jean-philippe-lemee/oeuvres/2009/les-costumes/deed730f23-1647358073/cost4-675x675-q80.jpg", href: "https://ddabretagne.org/fr/artistes/jean-philippe-lemee/oeuvres/2009", format: "portrait" },
  { title: "Archanges roses", year: "2008", image: "https://ddabretagne.org/media/pages/artistes/jean-philippe-lemee/oeuvres/2008/archanges-roses/ed7851b32f-1647358076/archangerose3-675x675-q80.jpg", href: "https://ddabretagne.org/fr/artistes/jean-philippe-lemee/oeuvres/2008", format: "portrait" },
  { title: "Archanges bleus", year: "2008", image: "https://ddabretagne.org/media/pages/artistes/jean-philippe-lemee/oeuvres/2008/archanges-bleus/0e943868eb-1647358078/archangebleu3-675x675-q80.jpg", href: "https://ddabretagne.org/fr/artistes/jean-philippe-lemee/oeuvres/2008", format: "square" },
  { title: "Métamorphoses d’après Dalí", year: "2008", image: "https://ddabretagne.org/media/pages/artistes/jean-philippe-lemee/oeuvres/2008/metamorphoses-d-apres-dali/dcb75cd3d0-1647358083/dali1-675x675-q80.jpg", href: "https://ddabretagne.org/fr/artistes/jean-philippe-lemee/oeuvres/2008", format: "wide" },
] as const;

export const exhibitionHighlights = [
  ["2021", "VRAC du FRAC — Galerie La Rotonde, Lanester"],
  ["2018", "Collectionner, le désir inachevé — Musée des Beaux-Arts d’Angers"],
  ["2009–2010", "CHIC Collection — Centre hospitalier de Cornouaille / Frac Bretagne"],
  ["2008", "Archanges, Coups de Brosse et Métamorphoses — Galerie Oniris, Rennes"],
  ["2005", "Roy, Pablo, Eugène et les Autres — Chapelle des Calvairiennes, Mayenne"],
  ["2004", "L’Art est sur le Côté — Musée des Beaux-Arts de Rouen"],
  ["2000", "94 nouveaux Tableaux pour l’An 2000 ! — Le Trapèze, Amiens"],
  ["1996", "NCDGQAD — Galerie du TNB / Frac Bretagne, Rennes"],
] as const;
