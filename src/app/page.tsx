import { defaultMetadata } from "@/lib/config";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  description:
    "Sortez de la routine et offrez vous un moment d'exception avec votre âme sœur pour renforcer vos liens.",
  openGraph: {
    ...defaultMetadata.openGraph,
    description:
      "Sortez de la routine et offrez vous un moment d'exception avec votre âme sœur pour renforcer vos liens.",
  },
  twitter: {
    ...defaultMetadata.twitter,
    description:
      "Sortez de la routine et offrez vous un moment d'exception avec votre âme sœur pour renforcer vos liens.",
  },
};

const Home = () => {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full flex items-center justify-center px-3 py-1 text-sm/6 text-neutral-200 ring-1 ring-neutral-200/30 hover:ring-gray-900/20">
              Ils l&apos;ont essayé et la recommande{" "}
              <div className="flex ml-2 -space-x-2">
                {" "}
                <Image
                  width={24}
                  height={24}
                  className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />{" "}
                <Image
                  width={24}
                  height={24}
                  className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />{" "}
                <Image
                  width={24}
                  height={24}
                  className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />{" "}
                <Image
                  width={24}
                  height={24}
                  className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />{" "}
                <Image
                  width={24}
                  height={24}
                  className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />{" "}
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-4xl sm:text-7xl font-semibold tracking-tight text-neutral-100">
              Une expérience qui vous rapproche
            </h1>
            <p className="mt-8 text-pretty text-base font-medium text-red-200 sm:text-xl">
              Sortez de la routine et offrez vous un moment d&apos;exception
              avec votre âme sœur pour renforcer vos liens.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/packs"
                className="rounded-full border-2 border-red-700 bg-red-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-md transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Réservez maintenant
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
