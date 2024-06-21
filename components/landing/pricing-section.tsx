"use client";

import { ArrowRightIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import { memo, useState } from "react";

interface PricingOption {
  name: string;
  price: string;
  yearlyPrice: string;
  description: string;
  features: string[];
  extraBenefits?: string;
}

interface PricingToggleProps {
  enabled: boolean;
  setEnabled: (e: boolean) => void;
  color?: string;
}

interface PricingCardProps {
  option: PricingOption;
  enabled: boolean;
}

const PricingToggle = memo(({ enabled, setEnabled, color }: PricingToggleProps) => (
  <div className="flex items-center">
    <span className={`mr-2 font-bold ${enabled ? "text-neutral-500/60" : ""}`}>Monthly</span>
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        checked={enabled}
        onChange={(e) => setEnabled(e.target.checked)}
        className="sr-only"
      />
      <div
        className={`inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          enabled ? `${color}` : "bg-neutral-200 dark:bg-neutral-400"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </div>
    </label>
    <span className={`ml-2 font-bold ${enabled ? "" : "text-neutral-500/60"}`}>Yearly</span>
  </div>
));

PricingToggle.displayName = "PricingToggle";

const PricingCard = memo(({ option, enabled }: PricingCardProps) => (
  <div className="grid h-full w-full grid-cols-1 rounded-xl border border-neutral-300/50 dark:border-neutral-700/50 lg:grid-cols-5">
    <div className="col-span-2 flex flex-col justify-between gap-y-10 rounded-t-xl bg-neutral-50 p-5 dark:bg-neutral-900 lg:rounded-t-none lg:rounded-bl-xl lg:rounded-tl-xl">
      <div className="flex flex-col gap-y-2">
        <p className="text-2xl font-semibold text-black dark:text-white">{option.name}</p>
        <p className="mx-0 max-w-md font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
          {option.description}
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <h3 className="text-sm font-medium text-black dark:text-white">
          <span className="text-3xl font-[620] text-black dark:text-white">
            {enabled ? option.yearlyPrice : option.price}
            <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {enabled ? "/year" : "/month"}
            </span>
          </span>
        </h3>
        <button className="my-2 flex h-10 w-full items-center justify-center rounded-lg border border-neutral-500 bg-neutral-800 text-base font-bold text-white transition duration-100 hover:shadow-md hover:drop-shadow-md dark:bg-neutral-100 dark:text-neutral-800">
          <span className="tracking-tight">Choose Plan</span>
          <ArrowRightIcon className="ml-2" />
        </button>
      </div>
    </div>
    <div className="col-span-3 flex flex-col justify-center gap-y-5 p-5 lg:pl-10">
      {option.extraBenefits && (
        <p className="text-[15px] font-medium text-neutral-500">{option.extraBenefits}</p>
      )}
      {option.features.map((feature, index) => (
        <div key={index} className="flex gap-x-3">
          <div className="flex items-center justify-center">
            <CheckCircledIcon className="h-6 w-6 text-green-500" />
          </div>
          <p className="font-medium text-neutral-900 dark:text-white">{feature}</p>
        </div>
      ))}
    </div>
  </div>
));

PricingCard.displayName = "PricingCard";

export default function Pricing() {
  const [enabled, setEnabled] = useState(false);
  const pricingOptions: PricingOption[] = [
    {
      name: "Free",
      price: "$0",
      yearlyPrice: "$0",
      description:
        "Let top creative talent come to you by posting your job listing on #1 Design Jobs Board.",
      features: [
        "Access to All Features",
        "20% discount on backorders",
        "Domain name Appraisal",
        "10 Social Profiles",
      ],
    },
    {
      name: "Pro",
      price: "$499",
      yearlyPrice: "$1,228",
      description:
        "Get your roles filled faster with unlimited access to Dribbble's Job Board and Designer search.",
      features: [
        "Access to All Features",
        "20% discount on backorders",
        "Domain name Appraisal",
        "10 Social Profiles",
      ],
      extraBenefits: "Everything in free plan, plus",
    },
  ];

  return (
    <section className="mx-auto max-w-5xl pt-28 pb-40">
      <div className="flex flex-col gap-y-2">
        <div className="mx-auto max-w-5xl text-center">
          {/* <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">Pricing</h4> */}

          <h2 className="bg-gradient-to-br dark:from-white text-center from-black from-30% dark:to-white/40 to-black/40 bg-clip-text pt-12 pb-8 text-3xl font-medium tracking-tighter text-transparent text-balance sm:text-6xl md:text-5xl lg:text-7xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Pric{" "}
          </h2>

          <p className="text-xl leading-8 text-black/80 dark:text-white text-balance">
            We take extra care to ensure your designs are flawlessly coded. But don&apos;t take our
            word for it—here&apos;s what our past clients have said about us.{" "}
          </p>
        </div>
        <div className="mt-5 flex justify-center">
          <PricingToggle enabled={enabled} setEnabled={setEnabled} color="bg-green-500" />
        </div>
        <div className="mx-auto grid h-full w-full max-w-4xl place-content-center items-center gap-6 px-10 py-8 lg:items-start">
          {pricingOptions.map((option, index) => (
            <PricingCard key={index} option={option} enabled={enabled} />
          ))}
        </div>
      </div>
    </section>
  );
}
