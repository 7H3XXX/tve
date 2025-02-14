'use client'

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Menu, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "L'expérience", href: "/about" },
  { name: "Bouquets", href: "/packs" },
];

export const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header>
      <nav
        aria-label="Global"
        className="flex border-b border-red-500 items-center justify-between p-4 lg:px-8"
      >
        <div className="flex lg:flex-1 text-white font-bold text-xl">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Smooth Move</span>
            <Image
              width={100}
              height={100}
              alt="sm logo"
              src="/smtve-logo.svg"
              className="sm:h-9 h-6 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon color="#eee" aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-neutral-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Sheet onOpenChange={setMobileMenuOpen} open={mobileMenuOpen}>
        <SheetContent className="bg-red-700 border-none">
          <div className="mt-6 flow-root">
            <div className="divide-y divide-gray-500/10">
              <div className="py-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-6 block px-6 last:border-b-0 border-b-2 border-red-600 py-6 text-xl sm:text-3xl font-manrope tracking-wide text-white hover:bg-red-600"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
