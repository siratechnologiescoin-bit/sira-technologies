import {
  ShieldCheck,
  Settings,
  Headphones,
  Layers3,
} from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const items = [
  {
    icon: ShieldCheck,
    title: "Security Focused",
    description:
      "Solutions designed with reliability and security in mind.",
    path: "/services/cctv-security",
  },

  {
    icon: Settings,
    title: "Practical Solutions",
    description:
      "Infrastructure designed around real business requirements.",
    path: "/services/networking",
  },

  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Technical assistance for installation, troubleshooting and maintenance.",
    path: "/services/it-support",
  },

  {
    icon: Layers3,
    title: "End-to-End",
    description:
      "From infrastructure setup to servers, cloud and support.",
    path: "/services",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="sira-section bg-white">
      <Container>

        <SectionTitle
          label="Why SIRA"
          title="Built Around Your Infrastructure"
          description="We combine infrastructure, security and IT expertise to create dependable technology environments."
          center
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                to={item.path}
                className="group block rounded-xl focus:outline-none focus:ring-2 focus:ring-sira-red/30"
              >
                <div className="sira-card h-full p-7 text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-sira-lg">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sira-gold/15 text-sira-red transition-all duration-300 group-hover:bg-sira-red group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-5 font-bold text-sira-dark transition-colors duration-200 group-hover:text-sira-red">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-sira-gray">
                    {item.description}
                  </p>

                  <span className="mt-5 inline-block text-xs font-bold uppercase tracking-wider text-sira-red opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Explore →
                  </span>

                </div>
              </Link>
            );
          })}

        </div>

      </Container>
    </section>
  );
};

export default WhyChooseUs;