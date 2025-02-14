import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { packs } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Les bouquets",
  description:
    "Les bouquets disponibles édition 2025 The Valentine Experience.",
  keywords:
    "Ndolo, Amour, Pack, Packs St Valentin, Ndol'am, Na tondi oa, Oa na mba",
  openGraph: {
    type: "website",
    url: "http://localhost:3000",
    siteName: "The Valentine Experience par SM",
    description:
      "Les bouquets disponibles édition 2025 The Valentine Experience.",
    images: ["/opengraph-image.webp"],
    title: "Les bouquets",
    locale: "fr_FR",
  },
  twitter: {
    title: "Les bouquets",
    card: "summary_large_image",
    site: "SM",
    description:
      "Les bouquets disponibles édition 2025 The Valentine Experience.",
    images: "/opengraph-image.webp",
  },
};

const Packs = () => {
  return (
    <div className="flex-1 flex-col flex">
      <Carousel className="w-full flex-1">
        <CarouselContent className="h-[calc(100svh-54px)] sm:h-[calc(100svh-66px)]">
          {packs.map((pack) => (
            <CarouselItem key={pack.id} className="pl-0">
              <div
                className="w-full h-full relative overflow-hidden flex aspect-[1872/474] items-end bg-cover bg-center justify-start"
                style={{ backgroundImage: `url(${pack.img})` }}
              >
                <div className="absolute inset-0 bg-red-950 bg-opacity-50" />
                <div className="sm:pl-16 pb-14 z-10 sm:pb-20 px-8 text-white">
                  <h2 className="md:text-6xl text-4xl font-extrabold sm:font-bold mb-1 sm:mb-1.5">
                    {pack.name}
                  </h2>
                  <p className="md:mb-6 mb-4 max-w-[42ch] sm:max-w-max text-sm sm:text-base">
                    {pack.description}
                  </p>
                  <Button
                    asChild
                    className="bg-red-700 rounded-full text-lg hover:bg-red-800"
                    size={"lg"}
                  >
                    <Link href={"/packs/" + pack.id}>Réserver</Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 text-white bg-transparent hover:bg-red-700 hover:text-white" />
        <CarouselNext className="right-4 text-white bg-transparent hover:bg-red-700 hover:text-white" />
      </Carousel>
      {/* <BookDrawer /> */}
    </div>
  );
};


export default Packs;
