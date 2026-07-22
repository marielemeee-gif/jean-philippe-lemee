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
  ["1957", "Naît en France. Le lieu de naissance diffère selon les sources : Rennes ou Lamballe."],
  ["1981–1989", "Chargé de cours à l’Université Rennes 2."],
  ["Depuis 1981", "Enseignement et conception du programme d’histoire de l’art à School Year Abroad France."],
  ["1984–1985", "Professeur à Phillips Academy Andover, aux États-Unis."],
  ["1986", "Doctorat en histoire de l’art contemporain, Université Rennes 2."],
  ["1989", "Début des Tableaux Faits Main et de la méthode des « recettes »."],
  ["1994–1997", "NCDGQAD avec Gilles Mahé rassemble environ 1 500 participants."],
  ["1999", "Prix régional à la création artistique — Arts plastiques, Région Bretagne."],
  ["2021", "Deux par deux, Galerie La Rotonde, Lanester."],
  ["2023–2024", "Diversités, Maison Prébendale, Saint-Pol-de-Léon."],
  ["2025", "Comment raconter la mer ?, Maison Prébendale, Saint-Pol-de-Léon."],
  ["Aujourd’hui", "ACSLS, Abécédaire des lieux et exploration de plus de 250 communes d’Ille-et-Vilaine."],
] as const;

export const sources = [
  ["Documents d’artistes Bretagne", "https://ddabretagne.org/fr/artistes/jean-philippe-lemee/presentation"],
  ["DDAB — Bio & bibliographie complète", "https://ddabretagne.org/fr/artistes/jean-philippe-lemee/bio-biblio"],
  ["Réseau documents d’artistes", "https://reseau-dda.org/fr/artists/jean-philippe-lemee"],
  ["INHA — AGORHA", "https://agorha.inha.fr/ark:/54721/4674f0ea-a652-42c2-87e9-ec88bfe35d12"],
  ["CNAP — CHIC Collection", "https://www.cnap.fr/jean-philippe-lemee-0"],
  ["CNAP — Jean-Philippe Lemée", "https://www.cnap.fr/jean-philippe-lemee-1"],
  ["CNAP — Mécaniques du dessin / NCDGQAD", "https://www.cnap.fr/mecaniques-du-dessin"],
  ["CNAP — Arty Christmas", "https://www.cnap.fr/arty-christmas"],
  ["Frac Bretagne", "https://www.fracbretagne.fr/fr/collection/"],
  ["Collection départementale d’Ille-et-Vilaine", "https://artcontemporain.ille-et-vilaine.fr/assets/040_jean-philippe-lemee.pdf"],
  ["L’Architiste, entretien du 14 juillet 2026", "https://www.larchitiste.com/jean-philippe-lemee-chercheur-dart-chitecture-au-coin-de-la-rue"],
  ["Paris Art — expositions", "https://www.paris-art.com/createurs/jean-philippe-lemee/"],
  ["Archives de la critique d’art", "https://www.archivesdelacritiquedart.org/ved_mat_personne/lemee-jean-philippe-1957"],
  ["Archives 40mcube — Projets de projets", "https://www.archivesdelacritiquedart.org/wp-content/uploads/2017/06/40mcube-Liste-des-expositions2001-2011-Site2017.pdf"],
  ["Fonds d’art contemporain — Paris Collections", "https://fondsartcontemporain.paris.fr/actualites/la-collection-numerique-s-agrandit-direction-le-studio-photo__11054"],
  ["Frac Bretagne — journal d’exposition", "https://www.fracbretagne.fr/wp-content/uploads/2017/04/Doc-public-Lannion-2017_web.pdf"],
  ["Lanester — Deux par deux", "https://www.lanester.bzh/fileadmin/user_upload/01_Lanester/Documents/Reflets/OLD/2021/reflets_293.pdf"],
  ["MutualArt — notice et expositions", "https://www.mutualart.com/Artist/Jean-Philippe-Lemee/9BF994408E64FF76/Biography"],
  ["i-CAC — notice artiste", "https://www.i-cac.fr/artiste/lemee-jean-philippe.html"],
  ["Artsper — notice artiste", "https://www.artsper.com/fr/artistes-contemporains/france/7393/jean-philippe-lemee"],
  ["Instagram", "https://www.instagram.com/jean_philippe_lemee/"],
  ["Bibliothèque nationale de France — notice d’autorité", "https://catalogue.bnf.fr/ark:/12148/cb12050767p/PUBLIC"],
  ["Le Grand Café — Copyright / Copywrong", "https://www.grandcafe-saintnazaire.fr/en/expositions/copyright-copywrong/"],
  ["Gilles Mahé — archives NCDGQAD", "https://www.gillesmahe.fr/works/nous-cherchons-des-gens-qui-aiment-dessiner-n-c-d-g-q-a-d"],
  ["Frac Bretagne — rapport d’activité 2021", "https://www.fracbretagne.fr/wp-content/uploads/2022/10/FracBretagneRapportactiviteS_2021_ok_WEB.pdf"],
  ["Frac Bretagne — Diversités, 2023", "https://www.fracbretagne.fr/fr/saint-pol-de-leon-exposition-diversite-oeuvres-de-la-collection-2023/"],
  ["Frac Bretagne — Comment raconter la mer ?, 2025", "https://www.fracbretagne.fr/fr/saint-pol-de-leon-exposition-comment-raconter-la-mer-2025/"],
  ["Frac Bretagne — Joies, cahier pédagogique", "https://www.fracbretagne.fr/wp-content/uploads/2017/03/FRAC-BRETAGNE_docpublic_Cesson-Sevigne_-JOIES_-2016_web.pdf"],
  ["Frac Bretagne — Complément d’objet", "https://www.fracbretagne.fr/wp-content/uploads/2014/07/11FracBretagne_DP2010_Complement_d_objet.pdf"],
  ["Archives 40mcube — inventaire détaillé", "https://www.archivesdelacritiquedart.org/wp-content/uploads/2017/06/40MCUBE_Inventaire-des-dossiers_site-2019.pdf"],
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

export const soloExhibitions = [
  ["2021", "VRAC du FRAC / Deux par deux — Galerie La Rotonde, Lanester"], ["2021", "We Love Châteaux — Espace Capifrance, Rennes"],
  ["2020", "We Love Châteaux — Château de la Ballue, Bazouges-la-Pérouse"], ["2019", "La Ruche, c’est Chambord ! — Rennes"],
  ["2016", "Stock An Vrac’h — Galerie DMA, Rennes"], ["2009", "Arty Christmas — Lendroit Galerie, Rennes"],
  ["2009", "CHIC Collection — Centre hospitalier de Cornouaille / Frac Bretagne, Quimper"], ["2009", "Les Turqueries de Bazouges — Le Village, Bazouges-la-Pérouse"],
  ["2008", "Archanges, Coups de Brosse et Métamorphoses — Galerie Oniris, Rennes"], ["2006", "Projet G2, G. Bush / J. Chirac — Galerie Incognito, Paris"],
  ["2005", "Roy, Pablo, Eugène et les Autres — Chapelle des Calvairiennes, Mayenne"], ["2004", "L’Art est sur le Côté — Musée des Beaux-Arts, Rouen"],
  ["2004", "Raymond, Roy, Pablo… et les Autres — Médiathèque de Langueux"], ["2004", "Séries récentes — Galerie Oniris, Rennes"],
  ["2003", "Projets de projets, avec Yves Trémorin — 40mcube et Galerie Art & Essai, Rennes"], ["2001", "La vie de quartier — Galerie Oniris, Rennes"],
  ["2000", "Copyright / Copywrong, avec Claude Closky — Le Grand Café, Saint-Nazaire"], ["2000", "94 nouveaux Tableaux pour l’An 2000 ! — Le Trapèze, Amiens"],
  ["2000", "Play it, peintures techno — Village des Transmusicales, Rennes"], ["2000", "Surfer juste à côté du Net — Galerie EOF, Paris"],
  ["1998", "Échantillons — Frac Bretagne, Ploubalay"], ["1998", "Histoires sans Paroles — Open Gaz de France, Paris"],
  ["1996", "Dessine-moi un mouton — Forum Saint-Eustache / MAM Paris"], ["1995", "Histoires sans paroles — Galerie Sanguine, Paris"],
  ["1995", "Tableaux Faits Main — Institut supérieur des arts appliqués, Rennes"], ["1994", "L’Homme de Bien n’est pas un ustensile… — Galerie Sanguine, Paris"],
  ["1994", "Parties de Tennis — Internationaux de Roland-Garros, Paris"], ["1993", "Ma Collection — Galerie du Chai, Saint-Brieuc"],
  ["1992", "Joyeuses Fêtes — Galerie du TNB / Frac Bretagne, Rennes"], ["1991", "Tableaux Faits Main — Galerie Joseph Dutertre, Rennes"],
  ["1991", "Tennis — Coupe Davis France–Israël, Rennes"], ["1990", "Tableaux Faits Main — Frac Bretagne, Châteaugiron"],
] as const;

export const groupExhibitions = [
  ["2025", "Comment raconter la mer ? — Maison Prébendale, Saint-Pol-de-Léon"], ["2023", "Diversités — Maison Prébendale, Saint-Pol-de-Léon"],
  ["2020", "Nantes, Regards d’Artistes — Atelier Alain Le Bras, en ligne"], ["2019", "Air de Fête — Saint-Briac-sur-Mer"], ["2019", "Madame Orain et le coco paimpolais — Artothèque de Vitré"],
  ["2018", "Collectionner, le désir inachevé — Musée des Beaux-Arts d’Angers"], ["2018", "Un espace, une œuvre — Musée des Impressionnismes, Giverny"],
  ["2016", "Rendez-vous à Saint-Briac"], ["2015", "Hulaut and Clarke, and friends — Le Carré, Château-Gontier"],
  ["2010", "Galerie Domestique, Au fond du couloir — Rennes"], ["2009", "La Rencontre #2 — Hôtel de Rennes Métropole"], ["2009", "Les Uns et les Autres — Musée d’Art et d’Histoire, Saint-Brieuc"],
  ["2009", "Revu et corrigé — Artothèque du Musée des Beaux-Arts, Brest"], ["2008", "Arts Élysées — Galerie Oniris, Paris"], ["2008", "Le réel infiltré — Galerie Le Lieu, Lorient"],
  ["2007", "Ironie du presque rien — Galerie Art & Essai, Rennes"], ["2007", "Les temps modernes — Domaine de Kerguéhennec"], ["2006", "Faites vos jeux — Saint-Brieuc et Rennes"],
  ["2005", "L’Artiste Éditeur — Frac Limousin"], ["2005", "NCDGQAD — Festival Le Livre et l’Art, Nantes"], ["2004", "L’ordinaire de l’art — Sarzeau"],
  ["2003", "Le Diable évidemment — Musée des Beaux-Arts, Brest"], ["2002", "Dessins croisés — Les Sables-d’Olonne"], ["2002", "Réactivation de NCDGQAD — Le Mans et Nantes"],
  ["2001", "Mélanges — Domaine de Kerguéhennec"], ["2000", "Collections contemporaines — Musée de Rennes"], ["2000", "La Mer pour sujet — Galerie du TNB, Rennes"],
  ["1999", "Les Règles du Jeu — Parc Saint-Léger, Pougues-les-Eaux"], ["1999", "À l’ouvert du monde — Festival Interceltique, Lorient"],
  ["1998", "Art versus Football — Stade de France"], ["1998", "L’Avant-Garde est-elle bretonne ? — Frac Bourgogne"], ["1997", "Angelus Novus — Flatland Gallery, Utrecht"],
  ["1996", "Classifictions — Rennes et ENSBA Paris"], ["1996", "Panoramas — La Criée, Rennes"], ["1995", "Art Köln — Galerie Sanguine, Cologne"],
  ["1994", "La Passeggiata — Rennes et Rome"], ["1993", "Aficionados — Ateliers d’Artistes, Marseille"], ["1992", "Indice 7 — Concarneau"], ["1991", "Découvertes — Grand Palais, Paris"],
] as const;

export const collections = ["Fonds municipal d’art contemporain de Paris","Frac Bretagne — 59 œuvres annoncées","Musée des Beaux-Arts de Rouen","Artothèque du Musée de Brest","Musée des Beaux-Arts de Rennes","Ville de Saint-Nazaire","Frac Limousin — avec Gilles Mahé","Artothèque de l’École des Beaux-Arts du Mans","Frac Pays de la Loire — avec Gilles Mahé","Ville de Rennes","FNAC, Paris","Igesa Loisirs / ministère de la Défense","Frac Haute-Normandie","Conseil départemental d’Ille-et-Vilaine","Artothèque de Vitré","Ministère de la Jeunesse et des Sports"] as const;

export const editionsAndMedia = [
  ["Film & vidéo", "Projets de projets, 22 vidéos avec Yves Trémorin (2001) ; NCDGQAD (1996) ; Le Caméscope et Saint Luc peignant la Vierge (1995)."],
  ["Objets & éditions", "Tapisseries d’Aubusson, T-shirts, tapis de souris, puzzles Les grandes vitres et Image comme ça, tabliers de bouteille JPL 2006."],
  ["Catalogues monographiques", "Tout l’Œuvre Peint, Presque (2004) ; 94 tableaux pour l’An 2000 (2000) ; Le Carrefour des mains (1998) ; Histoires sans paroles (1995) ; Tableaux Faits Main (1993)."],
  ["Presse", "Art Press, Opus International, Libération, L’Équipe, Elle, Nova, Ouest-France, Le Télégramme, Cimaise, Hopala, Parade et revue Profane."],
  ["Radio & télévision", "Bouillon de Culture (1991), Matin Bonheur (1996), FR3 Rennes (1997), Canalweb (2000)."],
] as const;
