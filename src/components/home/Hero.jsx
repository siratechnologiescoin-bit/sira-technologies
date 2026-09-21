import {
  ArrowRight,
  ShieldCheck,
  Server,
  Network,
} from "lucide-react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-sira-black">

      <div className="absolute inset-0">
        <img
  src="/images/logo/siralogo.jpeg"
  alt="SIRA Technologies"
  className="h-full w-full object-contain opacity-20"
/>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-sira-red-dark/50" />
      </div>

      <div className="relative">
        <div className="sira-container">

          <div className="grid min-h-[650px] items-center gap-12 py-20 lg:grid-cols-2">

            <div>

              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sira-gold/40 bg-sira-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-sira-gold">
                <span className="h-2 w-2 rounded-full bg-sira-gold" />
                Technology & Infrastructure
              </span>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Building Reliable
                <span className="block text-sira-gold">
                  Technology Infrastructure
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
                SIRA Technologies delivers professional
                CCTV, networking, Linux, Windows, AWS
                cloud and IT support solutions for
                modern organizations.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                <Link
                  to="/services"
                  className="sira-btn-gold"
                >
                  Explore Services
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="sira-btn border border-white/30 text-white hover:border-sira-gold hover:text-sira-gold"
                >
                  Talk to Us
                </Link>

              </div>

            </div>

            <div className="hidden lg:block">

              <div className="relative mx-auto max-w-md">

                <div className="absolute -inset-5 rounded-3xl border border-sira-gold/20" />

                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-sm font-bold text-white">
                      SIRA Technologies
                    </span>

                    <span className="rounded-full bg-sira-red px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      Solutions
                    </span>
                  </div>

                  <div className="grid gap-4">

                    {[
                      {
                        icon: ShieldCheck,
                        title: "Security",
                        text: "CCTV & surveillance",
                      },
                      {
                        icon: Network,
                        title: "Networking",
                        text: "LAN, Wi-Fi & infrastructure",
                      },
                      {
                        icon: Server,
                        title: "Cloud & Servers",
                        text: "Linux, Windows & AWS",
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/30 p-4"
                        >
                          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sira-gold text-sira-black">
                            <Icon size={21} />
                          </div>

                          <div>
                            <h3 className="font-bold text-white">
                              {item.title}
                            </h3>

                            <p className="text-xs text-gray-400">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      );
                    })}

                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;