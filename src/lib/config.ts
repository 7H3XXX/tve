import { Metadata } from "next";

export const METADATA_TITLE_SUFFIX = "| SM";

export const defaultMetadata: Metadata = {
  title: {
    template: `%s ${METADATA_TITLE_SUFFIX}`,
    default: "The Valentine Experience | SM",
  },
  twitter: {
    title: "The Valentine Experience | SM",
    card: "summary_large_image",
    site: "SM",
    description:
      "Sortez de la routine et offrez vous un moment d'exception avec votre âme sœur pour renforcer vos liens.",
    images: "/opengraph-image.webp",
  },
  authors: [{ name: "SM" }],
  creator: "SM Team",
  metadataBase: new URL("http://localhost:3000"),
  robots: { index: true, follow: false },
  description:
    "Sortez de la routine et offrez vous un moment d'exception avec votre âme sœur pour renforcer vos liens.",
  keywords:
    "St Valentin, Amour, Expérience, Mon amour, Mon âme soeur, Ma moitié, Je t'aime, aimer",
  openGraph: {
    type: "website",
    url: "http://localhost:3000",
    siteName: "The Valentine Experience par SM",
    description:
      "Sortez de la routine et offrez vous un moment d'exception avec votre âme sœur pour renforcer vos liens.",
    images: ["/opengraph-image.webp"],
    title: "The Valentine Experience | SM",
    locale: "fr_FR",
  },
};
