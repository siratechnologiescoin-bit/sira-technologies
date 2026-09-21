import {
  HeartPulse,
  CalendarCheck,
  Users,
  ArrowUpRight,
} from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

const MRHealthPreview = () => {
  return (
    <section className="sira-section bg-white">

      <Container>

        <div className="overflow-hidden rounded-3xl bg-sira-black">

          <div className="grid items-center lg:grid-cols-2">

            <div className="p-8 sm:p-12 lg:p-16">

              <span className="sira-label text-sira-gold">
                Our Product
              </span>

              <h2 className="text-3xl font-black text-white sm:text-4xl">
                MRHealth
              </h2>

              <p className="mt-4 text-2xl font-semibold text-sira-gold">
                Bringing Healthcare Together
              </p>

              <p className="mt-6 leading-7 text-gray-400">
                MRHealth is our healthcare technology
                platform designed to connect patients
                with doctors and healthcare professionals.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">

                <div>
                  <HeartPulse
                    className="text-sira-gold"
                    size={24}
                  />

                  <p className="mt-2 text-xs font-semibold text-gray-300">
                    Healthcare
                  </p>
                </div>

                <div>
                  <Users
                    className="text-sira-gold"
                    size={24}
                  />

                  <p className="mt-2 text-xs font-semibold text-gray-300">
                    Professionals
                  </p>
                </div>

                <div>
                  <CalendarCheck
                    className="text-sira-gold"
                    size={24}
                  />

                  <p className="mt-2 text-xs font-semibold text-gray-300">
                    Appointments
                  </p>
                </div>

              </div>

              <div className="mt-8 flex flex-wrap gap-4">

                <Button
                  to="/product/mrhealth"
                  variant="gold"
                >
                  Explore MRHealth
                </Button>

                <a
                  href="https://mrhealth.co.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="sira-btn border border-white/20 text-white hover:border-sira-gold hover:text-sira-gold"
                >
                  Visit Website
                  <ArrowUpRight size={17} />
                </a>

              </div>

            </div>

            <div className="relative hidden min-h-[480px] lg:block">

              <img
                src="/images/mrhealth/mrhealth-hero.png"
                alt="MRHealth"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-sira-black via-transparent to-transparent" />

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default MRHealthPreview;