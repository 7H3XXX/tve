"use client";
import {
  DataInteractive,
  Field,
  Label,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const dates = ["15/02", "16/02", "21/02", "22/02", "23/02"];

export const BookingForm = ({
  packName,
  hasWhiteContainer,
}: {
  packName: string;
  hasWhiteContainer?: boolean;
}) => {
  let [selected, setSelected] = useState(dates[0]);
  return (
    <>
      <RadioGroup
        className={"mb-8 sm:gap-3 gap-2 flex flex-wrap"}
        value={selected}
        onChange={setSelected}
        aria-label="Select date"
      >
        {dates.map((date) => (
          <Radio
            key={date}
            value={date}
            className={cn(
              "cursor-pointer bg-red-500/70 data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white data-[checked]:text-red-600 shadow-xs group relative flex items-center justify-center rounded-md px-4 py-3 text-sm font-medium uppercase hover:bg-red-700 focus:outline-hidden data-focus:ring-2 data-focus:ring-red-400 flex-1 max-w-24",
              {
                "hover:bg-neutral-100 bg-white border border-neutral-400 data-[focus]:outline-red-200 data-[checked]:bg-red-200 data-[checked]:text-red-600 text-neutral-800 data-[checked]:border-transparent":
                  !!hasWhiteContainer,
              }
            )}
          >
            <span>{date}</span>
          </Radio>
        ))}
      </RadioGroup>
      {/* <input type="text" name="pack" readOnly hidden defaultValue={packName} /> */}
      <Button
        asChild
        disabled={!!selected}
        className={cn("bg-white hover:bg-white text-red-700 border border-white shadow-sm rounded-full text-lg hover:scale-105", {
            "bg-red-600 text-white hover:bg-red-700 w-full sm:w-fit":!!hasWhiteContainer
        })}
        size={"lg"}
      >
        <Link
          href={`https://api.whatsapp.com/send?phone=237659324496&text=Bonjour%20%F0%9F%96%90%EF%B8%8F%2C%20Je%20voudrais%20r%C3%A9server%20l%27exp%C3%A9rience%20%22${encodeURI(
            packName
          )}%F0%9F%92%95%22%20pour%20le%20${selected.substring(
            0,
            2
          )}%2F02.%0APouvez-vous%20me%20donnez%20plus%20d%27informations%20sur%20son%20d%C3%A9roulement%20ainsi%20que%20les%20modalit%C3%A9s%20pratiques%20%3F`}
        >
          Réserver
        </Link>
      </Button>
    </>
  );
};
