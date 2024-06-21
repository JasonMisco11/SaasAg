"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
// import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ShinyButton from "../magicui/shiny-button";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="hero" className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8 ">
      <div className="backdrop-filter-[12px] transition-all ease-in hover:cursor-pointer group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
        <ShinyButton className="text-xs inline-flex text-nowrap items-center justify-center flex-nowrap rounded-full">
          <span>✨ Join top design studios & startups</span>{" "}
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </ShinyButton>
      </div>
      <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text pt-12 pb-8 text-3xl font-medium tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        We Code Your Stunning Web Designs
        <br className="hidden md:block" /> Pixel-Perfectly
      </h1>
      <p className="mb-12 text-base text-gray-400 md:text-2xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Unlimited coding for a fixed monthly fee. We hand-code websites
        <br className="hidden md:block" /> for detail-oriented agencies. Pause or cancel anytime.
      </p>
      <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-full text-base md:text-xl text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms]">
        <span>See Plans </span>
        <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </Button>
      <div
        ref={ref}
        className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
      >
        <div
          className={`before:animate-image-glow absolute h-screen w-full z-0 before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] ${
            inView ? "before:animate-image-glow" : ""
          }`}
        >
          {/* <BorderBeam
            size={200}
            duration={12}
            delay={11}
            colorFrom="var(--color-one)"
            colorTo="var(--color-two)"
          /> */}

          {/* <img
            src="/hero-dark.png"
            alt="Hero Image"
            className="invisible hidden relative w-full h-full rounded-[inherit] border object-contain dark:block"
          /> */}
          {/* <img
            src="/hero-light.png"
            alt="Hero Image"
            className="block relative w-full h-full  rounded-[inherit] border object-contain dark:hidden"
          /> */}
        </div>
      </div>
    </section>
  );
}
