import {
  HeartPulse,
  Search,
  CalendarCheck,
  Users,
  ArrowUpRight,
} from "lucide-react";

import Container from "../components/common/Container";
import Button from "../components/common/Button";

import { mrhealth } from "../data/mrhealth";

const MRHealth = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-sira-black">

        <Container>

          <div className="grid min-h-[550px] items-center gap-12 py-20 lg:grid-cols-2">

            <div>

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-sira-gold text-sira-black">
                <HeartPulse size={32} />
              </div>

              <span className="sira-label text-sira-gold">
                SIRA Product
              </span>

              <h1 className="text-5xl font-black text-white sm:text-6xl">
                {mrhealth.name}
              </h1>

              <h2 className="mt-4 text-2xl font-bold text-sira-gold">
                {mrhealth.title}
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                {mrhealth.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href={mrhealth.website}
                  target="_blank"
                  rel="noreferrer"
                  className="sira-btn-gold"
                >
                  Visit MRHealth
                  <ArrowUpRight size={18} />
                </a>

                <Button
                  to="/contact"
                  variant="outline"
                  icon={false}
                >
                  Contact Us
                </Button>

              </div>

            </div>

            <div className="hidden lg:block">

              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/images/mrhealth/mrhealth-hero.png"
                  alt="MRHealth"
                  className="w-full object-cover"
                />
              </div>

            </div>

          </div>

        </Container>

      </section>

      {/* Features */}
      <section className="sira-section bg-sira-light">

        <Container>

          <div className="text-center">

            <span className="sira-label">
              MRHealth
            </span>

            <h2 className="sira-title">
              Healthcare Technology
            </h2>

            <p className="sira-description mx-auto">
              Designed to make healthcare discovery and
              access easier.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: Search,
                title: "Healthcare Discovery",
              },
              {
                icon: Users,
                title: "Professional Profiles",
              },
              {
                icon: CalendarCheck,
                title: "Appointment Booking",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="sira-card p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sira-red text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-sira-gray">
                    Discover and connect through the
                    MRHealth healthcare platform.
                  </p>
                </div>
              );
            })}

          </div>

        </Container>

      </section>

    </>
  );
};

export default MRHealth;