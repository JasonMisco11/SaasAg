"use client";
import { cn } from "@/lib/utils";
import { StarFilledIcon } from "@radix-ui/react-icons";
import Marquee from "./marquee";
import { Globe } from "lucide-react";
import { LampContainer } from "../accternity/lamp-divider";
import { motion } from "framer-motion";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-cyan-600/20 p-1 py-0.5 font-bold text-cyan-600 dark:bg-cyan-600/20 dark:text-cyan-600",
        className,
      )}
    >
      {children}
    </span>
  );
};

export interface TestimonialCardProps {
  name: string;
  role: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const TestimonialCard = ({
  description,
  name,

  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "flex w-72 shrink-0 cursor-pointer snap-center snap-always flex-col justify-between rounded-xl p-4 shadow-xl shadow-black/[0.1] lg:min-w-96",
      // light styles
      " border border-neutral-200 bg-white",
      // dark styles
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
    {...props} // Spread the rest of the props here
  >
    <div className="select-none font-normal text-neutral-700 dark:text-neutral-400">
      {description}
    </div>

    <div className="select-none">
      <div className="flex flex-row py-1">
        <StarFilledIcon className="size-4 text-yellow-500" />
        <StarFilledIcon className="size-4 text-yellow-500" />
        <StarFilledIcon className="size-4 text-yellow-500" />
        <StarFilledIcon className="size-4 text-yellow-500" />
        <StarFilledIcon className="size-4 text-yellow-500" />
      </div>
      <p className="font-medium text-neutral-500">{name}</p>
      <p className="text-sm font-normal text-neutral-400">{role}</p>
    </div>
  </div>
);

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Real Estate Agent @ LuxHomes",
    description: (
      <p>
        I used to carry a stack of business cards. Now I just tap my phone.
        <Highlight>It's a great conversation starter</Highlight> and people are always impressed.
      </p>
    ),
  },
  {
    name: "AMEL Derrick",
    role: "Operations Director @ Pinpam ",
    description: (
      <p>
        We switched our entire team to smart cards.
        <Highlight>It's saved us thousands on printing</Highlight> and it aligns perfectly with our
        fashion brand.
      </p>
    ),
  },
  {
    name: "Honour Alajemba",
    role: "Law Consultant",
    description: (
      <p>
        The landing page is beautiful. It's not just a contact card; it's a
        <Highlight>mini-portfolio that showcases my work perfectly.</Highlight> my clients love it.
      </p>
    ),
  },
  {
    name: "Abraham Adote",
    role: "Founder @ UnlimitedSolutions",
    description: (
      <p>
        Setting it up was a breeze. I can update my info anytime without reprinting anything.
        <Highlight>Highly recommend for networking professionals.</Highlight>
      </p>
    ),
  },
];

export function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="z-50 mb-14 lg:mb-80 relative flex flex-col items-center justify-center"
    >
      <hr className="max-w-[80rem]  mb-24 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
      <h2 className="max-w-[60rem] mx-auto px-8 inline-block bg-gradient-to-br dark:from-white text-center from-black from-30% dark:to-white/40 to-black/40 bg-clip-text text-3xl font-medium tracking-tighter text-transparent text-balance sm:text-4xl md:text-5xl lg:text-6xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        {/* We take extra care to ensure your designs are flawlessly coded.{" "}
        <br className="hidden md:block" /> */}
        Join thousands of professionals upgrading their network.
      </h2>
      <p className="max-w-[60rem] mx-auto px-8 my-8 w-full text-center text-base text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        See what our users are saying about the future of business cards.{" "}
      </p>

      <div className="relative mx-auto mt-2 overflow-hidden">
        <div
          className={cn(
            "flex w-full snap-x snap-mandatory flex-row gap-6 overflow-x-auto pb-14",

            // no scrollbar
            "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          )}
        >
          {/* Empty placeholder  */}
          {/* <div className="size-72 shrink-0 md:h-60 md:min-w-96"></div> */}
          <Marquee className="[--duration:20s]">
            {testimonials.map((card, idx) => (
              <TestimonialCard {...card} key={idx} />
            ))}
          </Marquee>
          {/* Empty placeholder  */}
          {/* <div className="size-72 shrink-0 md:h-60 md:min-w-96"></div> */}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden h-full w-1/5 bg-gradient-to-r from-background md:block"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-1/5 bg-gradient-to-l from-background md:block"></div>
      </div>
    </section>
  );
}
