import { BookingForm } from "@/components/booking-form";
import { defaultMetadata, METADATA_TITLE_SUFFIX } from "@/lib/config";
import { packs } from "@/lib/constants";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const id = (await params).id;

  const pack = packs.filter((pack) => pack.id === id)[0];

  if (!pack) {
    return {
      title: "Pack introuvable",
      description:
        "Le pack recherché est introuvable. Verifiez son orthographe ou contactez le support.",
      robots: { index: false, follow: true },
      openGraph: {
        title: "Pack introuvable",
        description:
          "Le pack recherché est introuvable. Verifiez son orthographe ou contactez le support.",
        url: `/packs/${id}`,
        images: "",
      },
      twitter: {
        title: "Pack introuvable",
        description:
          "Le Pack recherché est introuvable. Verifiez son orthographe ou contactez le support.",
        card: "summary",
      },
      alternates: {
        canonical: `/packs/${id}`,
      },
    };
  }

  return {
    title: `${pack.name}`,
    description: `${pack.description}`,
    keywords: [pack.name, "Amour", "Ndolo", "Gift ideas", "idées de cadeau st valentin", "Je t'aime", "Amoureux", "Amoureuse"],
    alternates: {
      canonical: `/packs/${pack.name}`,
    },
    openGraph: {
      title: `${pack.name}  ${METADATA_TITLE_SUFFIX}`,
      description: `${pack.description}`,
      url: `/packs/${pack.name}`,
      siteName: defaultMetadata.openGraph?.siteName,
      images: "/opengraph-image.webp",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pack.name} ${METADATA_TITLE_SUFFIX}`,
      description: `${pack.description}`,
      images: "/opengraph-image.webp",
    },
    robots: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
}


export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pack = packs.filter((pack) => pack.id === id)[0];

  if (!pack) {
    notFound();
  }
  return (
    <>
      <div className="pb-16">
        <div className="w-full h-[35rem] mb-12 relative">
          <Image
            src={pack.img}
            priority
            className="object-cover"
            fill
            alt={`${pack.name}'s cover photo`}
          />
        </div>
        <div className="text-white px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl mb-1.5 font-bold">{pack.name}</h1>
          <p className="mb-6">{pack.description}</p>
          <ul className="space-y-1.5 mb-6">
            {pack?.services.map((service, idx) => {
              return (
                <li
                  key={idx}
                  className="text-lg last-of-type:border-b-0 border-b border-red-400 pb-2"
                >
                  {service}
                </li>
              );
            })}
          </ul>
          <div>
            <p className="text-red-200 font-medium text-sm mb-3">
              Dates disponibles
            </p>
            <BookingForm packName={pack.name} />
          </div>
        </div>
      </div>
    </>
  );
}
