import Link from "next/link";
import { Icons } from "../ui/icons";
import Marquee from "../magicui/marquee";

const companies = [
  {
    id: "highstar",
    name: "HighStar",
    link: "https://neatmethod.com/",
    icon: Icons.neatMethodLogo,
  },

  {
    id: "unlimited-solutions",
    name: "Unlimited-Solutions",
    link: "https://dav-ai.com/",
    icon: Icons.davaiCompanyLogo,
  },

  {
    id: "alog",
    name: "ALOG",
    link: "https://monkedao.io/",
    icon: Icons.monkeDaoCompanyLogo,
  },
  {
    id: "sabre-guard",
    name: "Sabre-Guard",
    link: "https://clearcollectibles.io/",
    icon: Icons.ccCompanyLogo,
  },
  {
    id: "pinpam",
    name: "Pinpam",
    link: "https://www.deadkingsociety.io/",
    icon: Icons.dksCompanyLogo,
  },
];

export default function ClientSection() {
  return (
    <section id="clients" className="text-center mx-auto max-w-[80rem] px-6 md:px-8">
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="mb-10 lg:mb-14 text-base text-gray-400 md:text-2xl text-balance translate-y-[-1rem] leading-[32px] lg:leading-[40px] animate-fade-in opacity-0 [--animation-delay:400ms]">
            The last business card you'll ever need, built to impress at every tap.
          </h2>
          <div className="mt-12">
            <ul className="mx-auto relative w-fit flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
              <Marquee className="max-w-[64rem] [--duration:40s]">
                {companies.map((company) => (
                  <li key={company.id}>
                    <Link
                      key={company.id}
                      href={company.link}
                      target="_blank"
                      className="group/icon text-white !transition-all !duration-200 !ease-in-out hover:scale-110 hover:text-gray-400 active:translate-y-[1px]"
                    >
                      <company.icon className="flex h-12 w-auto fill-white hover:fill-gray-400" />
                    </Link>
                  </li>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
