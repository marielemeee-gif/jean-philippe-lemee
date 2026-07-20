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
  ["INHA — AGORHA", "https://agorha.inha.fr/ark:/54721/4674f0ea-a652-42c2-87e9-ec88bfe35d12"],
  ["Frac Bretagne", "https://www.fracbretagne.fr/fr/collection/"],
  ["L’Architiste, entretien du 14 juillet 2026", "https://www.larchitiste.com/jean-philippe-lemee-chercheur-dart-chitecture-au-coin-de-la-rue"],
  ["Instagram", "https://www.instagram.com/jean_philippe_lemee/"],
] as const;
