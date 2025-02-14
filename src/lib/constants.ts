import carOne from "@/assets/car-one.jpg";
import carTwo from "@/assets/car-two.jpg";
import carThree from "@/assets/car-three.jpg";

export const packs = [
  {
    id: "ndolam",
    description:
      "Roulez vers l'amour, bercés par une mélodie, sous un ciel qui n'appartient qu'à vous.",
    name: "Ndol'am",
    services: [
      "Location de voiture",
      "Déco + Playlist personnalisé",
      "Panier amoureux",
      "Petite virée dans un endroit paisible",
    ],
    img: carOne.src,
    price: 100000,
  },
  {
    id: "oa-na-mba",
    description:
      "Laissez les roses murmurer, le chocolat fondre, et le hammam envelopper vos âmes avant un festin étoilé.",
    name: "Oa na mba",
    services: [
      "Location de voiture",
      "Déco + Playlist personnalisé",
      "Bouquet de roses et chocolats",
      "Séance de hammam + gommage",
      "Dîner dans un restaurant",
    ],
    img: carTwo.src,
    price: 145000,
  },
  {
    id: "na-tondi-oa",
    description:
      "Le vin chuchote, les roses dansent, et le chemin mène à une nuit où tout s’efface, sauf vous deux.",
    name: "Na tondi oa",
    services: [
      "Location de voiture",
      "Déco + Playlist personnalisé",
      "Bouquet de roses et chocolats",
      "Bouteille de vin/champagne",
      "Séance de hammam + gommage",
      "Petite virée dans un endroit paisible",
      "Dîner dans un restaurant",
    ],
    img: carThree.src,
    price: 190000,
  },
];

