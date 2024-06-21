import React from "react";
import ShineBorder from "../magicui/shine-border";

type Props = {};

const TestimonialSection = (props: Props) => {
  return (
    <div className="max-w-[80rem] mx-auto mt-10 w-full flex flex-col items-center justify-center">
      <h1 className="bg-gradient-to-br dark:from-white text-left from-black from-30% dark:to-white/40 to-black/40 bg-clip-text pt-12 pb-8 text-2xl font-medium tracking-tighter text-transparent text-balance sm:text-6xl md:text-5xl lg:text-7xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Beautiful Design Means Nothing If It&apos;s Poorly Coded{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ShineBorder className="bg-white/10 backdrop-blur-sm rounded-full p-4">
          <h2 className="text-white">Testimonial 1</h2>
        </ShineBorder>
      </div>
    </div>
  );
};

export default TestimonialSection;
