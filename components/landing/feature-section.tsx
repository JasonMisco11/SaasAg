"use client";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { Calendar as CalendarLowIcon, Globe, Leaf, Monitor, Smartphone } from "lucide-react";
import { AnimatedBeamMultipleOutputDemo } from "../magicui/animated-beam-multiple-outputs";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";

const files = [
  {
    name: "Design Smart Card Layout",
    body: "Craft a sleek digital card layout that reflects your brand and keeps key details effortless to scan.",
  },
  {
    name: "Enable Tap-to-Share",
    body: "Set up instant sharing so contacts can open your profile, socials, and booking link with one tap.",
  },
  {
    name: "Sync Contact Details",
    body: "Connect your updated contact information, portfolio links, and call-to-action buttons in one place.",
  },
  {
    name: "Add Booking Flow",
    body: "Make scheduling simple with a built-in calendar flow that helps leads book meetings without friction.",
  },
  {
    name: "Track Card Engagement",
    body: "Monitor scans, clicks, and conversions so you can keep improving how your smart business card performs.",
  },
];

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

const features = [
  {
    Icon: Smartphone,
    name: "Tap to Connect",
    description:
      "Share your digital profile instantly with a single tap. Compatible with all modern smartphones.",
    href: "/",
    cta: "Learn about NFC",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] transition-all duration-300 ease-out hover:blur-none group-hover:scale-105 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">{f.name}</figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Monitor,
    name: "Custom Digital Profile",
    description:
      "Stand out with a bespoke, hand-coded landing page that perfectly matches your brand identity.",
    href: "/",
    cta: "View examples",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarLowIcon,
    name: "Instant Booking",
    description:
      "Let clients schedule meetings directly from your digital profile. Seamless integration with your calendar.",
    href: "/",
    cta: "Try booking demo",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
  {
    Icon: Leaf,
    name: "Sustainable Solution",
    description:
      "Significantly reduce paper waste. One smart card lasts a lifetime and can be updated infinitely.",
    className: "col-span-3 lg:col-span-1",
    href: "/",
    cta: "Go Green",
    background: (
      <div className="absolute right-0 top-0 h-[300px] w-full bg-gradient-to-t from-neutral-100 to-transparent dark:from-neutral-900" />
    ),
  },
];

export function FeatureSection() {
  return (
    <div
      id="features"
      className="z-50 pb-32 relative max-w-[80rem] mx-auto px-8 lg:px-12 pt-12 w-full flex flex-col items-center justify-center"
    >
      <div className="max-w-[60rem] mx-auto">
        <div
          className={cn(
            "inline-block w-fit relative top-0 left-0 mr-6 size-20 cursor-pointer overflow-hidden rounded-2xl border p-4",
          )}
        >
          <Globe className="size-full" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 opacity-70 blur-[20px] filter"></div>
        </div>

        <h2 className="inline-block bg-gradient-to-br dark:from-white text-left from-black from-30% dark:to-white/40 to-black/40 bg-clip-text pt-12 pb-8 text-3xl font-medium tracking-tighter text-transparent md:text-balance sm:text-6xl md:text-5xl lg:text-7xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          The Last Business Card You&apos;ll Ever Need
        </h2>
      </div>
      <p className="max-w-[60rem] mx-auto mb-7 lg:mb-14 w-full text-left text-base text-gray-400 md:text-2xl md:text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Combine the physical impact of a smart card with the digital versatility of a bespoke
        website.
        <br className="hidden md:block" />{" "}
      </p>

      <BentoGrid className="max-w-[80rem] mx-auto">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
