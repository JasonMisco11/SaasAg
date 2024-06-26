"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
// import TextShimmer from "@/components/magicui/text-shimmer";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ShinyButton from "../magicui/shiny-button";
import TextShimmer from "../magicui/text-shimmer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useLenis } from "lenis/react";

export default function HeroSection() {
  // const ref = useRef(null);
  // const inView = useInView(ref, { margin: "-100px" });
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <section id="hero" className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8 ">
      <div className="!z-50 relative">
        <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
          <TextShimmer className="text-xs inline-flex text-nowrap items-center justify-center flex-nowrap rounded-full">
            <span>✨ Limited-Time Introductory Offer</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
          </TextShimmer>
        </div>
        <h1 className="bg-gradient-to-br dark:from-white leading-[56px] lg:leading-[112px] from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-8 lg:py-12 text-5xl font-medium tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          We Code Your Stunning Web Designs
          <br className="hidden md:block" /> Pixel-Perfectly
        </h1>
        <p className="mb-10 lg:mb-14 text-base text-gray-400 md:text-2xl md:text-balance translate-y-[-1rem] leading-[32px] lg:leading-[40px] animate-fade-in opacity-0 [--animation-delay:400ms]">
          Frontend development for a fixed monthly fee. <br className="hidden md:block" /> We
          hand-code websites for detail-oriented founders. <br className="hidden md:block" /> Pause
          or cancel anytime.
        </p>
        <Link
          href="#pricing"
          onClick={() => {
            lenis?.scrollTo("#pricing");
          }}
          className={cn(
            buttonVariants(),
            "translate-y-[-1rem] animate-fade-in gap-1 text-base md:text-xl text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms]"
          )}
        >
          <>
            See Plans
            <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </>
        </Link>
      </div>
      <div
        // ref={ref}
        className="z-0 relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-10 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
      >
        <div
          className={`before:animate-image-glow absolute h-screen w-full z-0 before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)]`}
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
