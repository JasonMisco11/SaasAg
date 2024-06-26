"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { ArrowRightIcon, Loader } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Interval = "week" | "month";

export const toHumanPrice = (price: number, decimals: number = 2) => {
  return Number(price);
  // .toFixed(decimals);
};
const demoPrices = [
  {
    id: "price_1",
    name: "Stadard Plan",
    description: "One request at a time. Pause or cancel anytime.",
    features: [
      "One request at a time",
      "Average 48 hour delivery",
      "HTML & TailwindCSS work only",
      "Unlimited users",
      "Unlimited animations",
      "Easy credit-card payments",
      "Pause or cancel anytime",
    ],
    monthlyPrice: 249,
    yearlyPrice: 999,
    isMostPopular: false,
  },
  {
    id: "price_2",
    name: "Pro Plan",
    description: "Two requests at a time. Pause or cancel anytime.",
    features: [
      "Two requests at a time",
      "Average 48 hour delivery",
      "Next.js and integrations with various Headless CMSs",
      "Unlimited users",
      "Unlimited animations",
      "Easy credit-card payments",
      "Pause or cancel anytime",
    ],
    monthlyPrice: 399,
    yearlyPrice: 1499,
    isMostPopular: true,
  },
];

export function PricingSection() {
  const [interval, setInterval] = useState<Interval>("week");
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState<string | null>(null);

  const onSubscribeClick = async (priceId: string) => {
    setIsLoading(true);
    setId(priceId);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
    setIsLoading(false);
  };

  return (
    <section id="pricing" className="z-50 mt-20  mb-14 lg:mb-48 relative max-w-[80rem] mx-auto w-full">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-8 py-14 md:px-8">
        <div className="max-w-[60rem] mx-auto text-center">
          {/* <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">Pricing</h4> */}

          <h2 className="inline-block bg-gradient-to-br dark:from-white text-center from-black from-30% dark:to-white/40 to-black/40 bg-clip-text text-3xl font-medium tracking-tighter text-transparent text-balance sm:text-4xl md:text-5xl lg:text-6xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Membership Levels{" "}
          </h2>

          <p className="mt-8 w-full text-center text-base text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Choose a plan that&apos;s right for you{" "}
          </p>
        </div>

        <div className="max-w-[60rem] mx-auto flex w-full items-center justify-center space-x-2">
          <Switch
            id="interval"
            onCheckedChange={(checked) => {
              setInterval(checked ? "month" : "week");
            }}
          />
          <span>Monthly</span>
          <span className="inline-block whitespace-nowrap rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white dark:bg-white dark:text-black">
            2 MONTHS FREE ✨
          </span>
        </div>

        <div className="mt-3 mx-auto grid w-full justify-center gap-8 md:grid-cols-3">
          {demoPrices.map((price, idx) => (
            <div
              key={price.id}
              className={cn(
                " relative flex w-full max-w-[400px] flex-col gap-4 overflow-hidden rounded-[32px] border p-4 text-black dark:text-white",
                "px-6 py-8 transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                {
                  "!border-2 !border-neutral-700 !shadow-lg !shadow-neutral-500 dark:!border-neutral-400 dark:!shadow-neutral-600":
                    price.isMostPopular,
                }
              )}
            >
              <div className="flex items-center justify-start text-left">
                <div className="ml-4">
                  <h2 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text font-medium tracking-tighter text-transparent text-3xl leading-7">
                    {price.name}
                  </h2>
                  <p className="h-16 text-sm leading-5 text-black/70 dark:text-gray-400">
                    {price.description}
                  </p>
                </div>
              </div>

              <motion.div
                key={`${price.id}-${interval}`}
                initial="initial"
                animate="animate"
                variants={{
                  initial: {
                    opacity: 0,
                    y: 12,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + idx * 0.05,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-row gap-1"
              >
                <span className="text-4xl font-bold text-black dark:text-white">
                  $
                  {interval === "month"
                    ? toHumanPrice(price.yearlyPrice, 0)
                    : toHumanPrice(price.monthlyPrice, 0)}
                  <span className="text-xs"> / {interval}</span>
                </span>
              </motion.div>

              <Button
                className={cn(
                  "group relative w-full gap-2 overflow-hidden text-lg justify-between font-semibold !px-4 tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                )}
                disabled={isLoading}
                onClick={() => void onSubscribeClick(price.id)}
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
                {(!isLoading || (isLoading && id !== price.id)) && <p>Get started today</p>}

                {isLoading && id === price.id && <p>Subscribing</p>}
                {isLoading && id === price.id && <Loader className="mr-2 h-4 w-4 animate-spin" />}
                <span className="flex items-center justify-center">
                  <ArrowRightIcon className="h-5 w-5 shrink-0 -rotate-45 text-black rounded-full transition-all duration-1000 ease-out group-hover:rotate-0" />
                </span>
              </Button>
              <Link href="/book-a-call" className="text-center text-gray-400 font-medium">
                Book a call
              </Link>

              <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
              <p className="text-gray-400 text-lg font-medium">What&apos;s included</p>
              {price.features && price.features.length > 0 && (
                <ul className="flex flex-col gap-2 font-normal">
                  {price.features.map((feature: any, idx: any) => (
                    <li
                      key={idx}
                      className="flex items-baseline gap-3 text-lg font-medium text-black dark:text-gray-400"
                    >
                      <CheckIcon className="h-5 translate-y-[3px] w-5 shrink-0 rounded-full p-[2px] border border-white text-black dark:text-white" />
                      <span className="flex">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </section>
  );
}
