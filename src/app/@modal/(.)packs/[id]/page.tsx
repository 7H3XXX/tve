"use client";

import { BookingForm } from "@/components/booking-form";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { packs } from "@/lib/constants";
import { X } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const BookingDrawer = () => {
  const { id } = useParams(); // Get packId from URL
  const router = useRouter();
  const pack = packs.filter((pack) => pack.id === id)[0];

  const [, setIsDrawerOpen] = React.useState(!!pack);

  const handleClose = () => {
    router.back();
    setIsDrawerOpen(false);
  };

  return (
    <Drawer open onOpenChange={handleClose}>
      <DrawerContent className="bg-white pb-12">
        <div className="mx-auto w-full max-h-full max-w-5xl px-6">
          <DrawerHeader>
            <DrawerTitle className="text-4xl text-red-600">
              {pack.name}
            </DrawerTitle>
            <DrawerDescription>{pack.description}</DrawerDescription>
          </DrawerHeader>
          <div className="w-full relative h-80 mb-6">
            <Image
              src={pack.img}
              className="object-cover rounded-md"
              fill
              alt={`${pack.name}'s cover photo`}
            />
          </div>
          <div className="px-6 ">
            <ul className="space-y-1.5 mb-6">
              {pack?.services.map((service, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-base sm:text-lg text-neutral-800 font-light last-of-type:border-b-0 border-b border-neutral-200 pb-2"
                  >
                    {service}
                  </li>
                );
              })}
            </ul>
            <div>
              <p className="text-muted-foreground font-medium text-sm mb-3">
                Dates disponibles
              </p>
              <BookingForm hasWhiteContainer packName={pack.name} />
            </div>
          </div>
          {/* <DrawerFooter> */}
            <DrawerClose asChild className="absolute top-2 right-2">
              <Button variant="ghost" size={'icon'} className="rounded-full"><X/></Button>
            </DrawerClose>
          {/* </DrawerFooter> */}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default BookingDrawer;
