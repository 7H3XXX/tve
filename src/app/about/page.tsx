import TextGradientOpacityOnScroll from "@/components/text-opacity";
import { defaultMetadata } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A propos de l'expérience",
  description: "Chez Smooth Move, nous avons imaginé des expériences sur mesure, pensées pour faire battre les cœurs à l’unisson ettransformer une simple balade en une aventure amoureuse inoubliable.",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "A propos de l'expérience",
    description: 'Chez Smooth Move, nous avons imaginé des expériences sur mesure, pensées pour faire battre les cœurs à l’unisson ettransformer une simple balade en une aventure amoureuse inoubliable.'
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: "A propos de l'expérience",
    description: "Chez Smooth Move, nous avons imaginé des expériences sur mesure, pensées pour faire battre les cœurs à l’unisson ettransformer une simple balade en une aventure amoureuse inoubliable."
  }
} 

const About = () => {
  return (
    <>
      <div className="max-w-6xl p-6 sm:p-20 mx-auto">
        <h1 className="text-xl text-white font-bold mb-4">About</h1>
        <div className="text-3xl leading-normal sm:text-6xl sm:leading-snug font-manrope font-medium text-neutral-200">
          <TextGradientOpacityOnScroll
            text={
              "Et si cette Saint-Valentin devenait une parenthèse enchantée, une évasion hors du quotidien où chaque instant se dessine comme une promesse ?"
            }
          />
          <br />
          <TextGradientOpacityOnScroll
            text={
              "Chez Smooth Move, nous avons imaginé des expériences sur mesure, pensées pour faire battre les cœurs à l’unisson ettransformer une simple balade en une aventure amoureuse inoubliable."
            }
          />
          <br />
          <TextGradientOpacityOnScroll
            text={
              "Tout commence à bord d’une voiture élégamment préparée. Selon vos envies, elle peut être ornée de pétales de roses, prête à accueillir  votre histoire comme une page blanche parfumée. Laissez la route s'étirer devant vous, portée par une playlist soigneusement            sélectionnée, chaque note vibrant en écho à votre complicité."
            }
          />
          <TextGradientOpacityOnScroll
            text={
              "À chaque virage, une surprise vous attend. Peut-être choisirez-vous une escale gourmande dans un restaurant raffiné, où les lumières tamisées et les plats savoureux deviendront les complices d'une soirée à savourer lentement. Pour ceux qui rêvent de chaleur et de douceur, une halte dans un hammam ou un sauna enveloppera vos sens dans une brume apaisante, là où le temps semble suspendu, propice aux confidences murmurées."
            }
          />
          <br />
          <p className="text-red-300">
            Et pourquoi ne pas opter pour une escapade encore plus intime ?
          </p>
          <br />
          <TextGradientOpacityOnScroll
            text={
              "Un panier personnalisé peut vous attendre : une bouteille de champagne prête à faire pétiller la soirée, des chocolats fondants à savourer ensemble, loin du bruit du monde. Chaque élément a été conçu pour laisser libre cours à votre imagination. Vous êtes les architectes de cette journée unique, où amour rime avec liberté."
            }
          />
          <br />
          <TextGradientOpacityOnScroll
            text={
              "Alors, que choisirez-vous pour tracer la route de votre Saint-Valentin ? Une douce balade, une échappée romantique, ou une            halte gourmande ? Quel que soit votre choix, Smooth Move vous ouvre les portes d’une expérience à la hauteur de vos plus belles émotions"
            }
          />
          <div className="h-[80vh]" />
          {/* <p>
            Et si cette Saint-Valentin devenait une parenthèse enchantée, une
            évasion hors du quotidien où chaque instant se dessine comme une
            promesse ? Chez Smooth Move, nous avons imaginé des expériences sur
            mesure, pensées pour faire battre les cœurs à l’unisson et
            transformer une simple balade en une aventure amoureuse inoubliable.
          </p>
          <br />
          <p>
            Tout commence à bord d’une voiture élégamment préparée. Selon vos
            envies, elle peut être ornée de pétales de roses, prête à accueillir
            votre histoire comme une page blanche parfumée. Laissez la route
            s'étirer devant vous, portée par une playlist soigneusement
            sélectionnée, chaque note vibrant en écho à votre complicité.
            À chaque virage, une surprise vous attend. Peut-être choisirez-vous
            une escale gourmande dans un restaurant raffiné, où les lumières
            tamisées et les plats savoureux deviendront les complices d'une
            soirée à savourer lentement. Pour ceux qui rêvent de chaleur et de
            douceur, une halte dans un hammam ou un sauna enveloppera vos sens
            dans une brume apaisante, là où le temps semble suspendu, propice
            aux confidences murmurées. Et pourquoi ne pas opter pour une
            escapade encore plus intime ? Un panier personnalisé peut vous
            attendre : une bouteille de champagne prête à faire pétiller la
            soirée, des chocolats fondants à savourer ensemble, loin du bruit du
            monde. Chaque élément a été conçu pour laisser libre cours à votre
            imagination. Vous êtes les architectes de cette journée unique, où
            amour rime avec liberté.
          </p>
          <br />
          <p>
            Alors, que choisirez-vous pour tracer la route de votre
            Saint-Valentin ? Une douce balade, une échappée romantique, ou une
            halte gourmande ? Quel que soit votre choix, Smooth Move vous ouvre
            les portes d’une expérience à la hauteur de vos plus belles émotions
          </p> */}
        </div>
      </div>
    </>
  );
};

export default About;
