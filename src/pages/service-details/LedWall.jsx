import React from "react";
import {
  Monitor,
  MonitorPlay,
  Maximize2,
  Sun,
  Settings,
  Wrench,
  ShieldCheck,
  Network,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const LedWall = () => {
  const solutions = [
    {
      icon: MonitorPlay,
      title: "Indoor LED Walls",
      description:
        "High-resolution LED video walls for offices, conference rooms, showrooms, control rooms, and indoor spaces.",
    },
    {
      icon: Sun,
      title: "Outdoor LED Displays",
      description:
        "Bright and durable outdoor LED displays designed for advertising, commercial buildings, events, and public spaces.",
    },
    {
      icon: Maximize2,
      title: "Large Format Displays",
      description:
        "Large-scale LED screens for presentations, digital signage, exhibitions, retail environments, and corporate branding.",
    },
    {
      icon: Monitor,
      title: "Event & Stage LED Walls",
      description:
        "Professional LED walls for concerts, conferences, weddings, exhibitions, live events, and stage productions.",
    },
    {
      icon: Network,
      title: "Digital Signage",
      description:
        "Network-connected LED display solutions for advertisements, announcements, information boards, and promotions.",
    },
    {
      icon: Settings,
      title: "Control & Processing",
      description:
        "LED controllers, video processors, media systems, and configuration for smooth and reliable display performance.",
    },
  ];

  const benefits = [
    "High brightness and excellent visibility",
    "Indoor and outdoor LED display solutions",
    "High-resolution video and image support",
    "Modular and scalable display designs",
    "Professional installation and configuration",
    "Remote content and display management",
    "Reliable controllers and processing systems",
    "Maintenance and technical support",
  ];

  const applications = [
    "Corporate Offices",
    "Conference Rooms",
    "Shopping Malls",
    "Retail Stores",
    "Hotels & Resorts",
    "Educational Institutions",
    "Hospitals",
    "Advertising & Digital Signage",
    "Events & Exhibitions",
    "Auditoriums",
    "Stage Productions",
    "Control Rooms",
  ];

  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "rgb(2, 2, 2)" }}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgb(217, 4, 41), transparent 35%), radial-gradient(circle at 85% 80%, rgb(212, 175, 55), transparent 30%)",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
              style={{
                borderColor: "rgba(212, 175, 55, 0.45)",
                backgroundColor: "rgba(212, 175, 55, 0.08)",
                color: "rgb(212, 175, 55)",
              }}
            >
              <MonitorPlay size={18} />
              LED Display Solutions
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              LED Wall &{" "}
              <span style={{ color: "rgb(217, 4, 41)" }}>
                Video Display Solutions
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Professional LED wall solutions for businesses, events,
              advertising, digital signage, conference rooms, auditoriums,
              retail spaces, and large-scale visual displays.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
                style={{ backgroundColor: "rgb(217, 4, 41)" }}
              >
                Get a Quote
                <ArrowRight size={18} />
              </Link>

              <a
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 font-semibold transition"
                style={{
                  borderColor: "rgb(212, 175, 55)",
                  color: "rgb(212, 175, 55)",
                }}
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section
        className="border-y"
        style={{
          borderColor: "rgba(212, 175, 55, 0.18)",
          backgroundColor: "rgb(8, 8, 8)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="rounded-lg p-3"
                  style={{
                    backgroundColor: "rgba(217, 4, 41, 0.12)",
                    color: "rgb(217, 4, 41)",
                  }}
                >
                  <Monitor size={28} />
                </div>

                <span
                  className="font-semibold uppercase tracking-wider"
                  style={{ color: "rgb(212, 175, 55)" }}
                >
                  LED Wall Systems
                </span>
              </div>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Powerful Visual Display Technology
              </h2>

              <p className="mt-5 leading-8 text-white/60">
                SIRA Technologies provides LED wall and large-format display
                solutions designed to deliver clear, bright, and engaging
                visuals. We help organizations select, install, configure, and
                maintain LED display systems according to their environment
                and requirements.
              </p>

              <p className="mt-4 leading-8 text-white/60">
                From compact indoor displays to large outdoor advertising
                screens, our solutions can be designed for corporate,
                commercial, entertainment, educational, and public
                environments.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Zap,
                  title: "High Brightness",
                  text: "Clear visibility for different environments.",
                },
                {
                  icon: Maximize2,
                  title: "Scalable",
                  text: "Modular designs for different screen sizes.",
                },
                {
                  icon: Settings,
                  title: "Professional Setup",
                  text: "Configuration and installation support.",
                },
                {
                  icon: ShieldCheck,
                  title: "Reliable Support",
                  text: "Maintenance and technical assistance.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border p-6 transition hover:-translate-y-1"
                    style={{
                      borderColor: "rgba(212, 175, 55, 0.18)",
                      backgroundColor: "rgb(14, 14, 14)",
                    }}
                  >
                    <Icon
                      className="mb-4"
                      size={28}
                      style={{ color: "rgb(212, 175, 55)" }}
                    />

                    <h3 className="font-semibold">{item.title}</h3>

                    <p className="mt-2 text-sm text-white/50">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section
        id="solutions"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "rgb(212, 175, 55)" }}
          >
            Our Solutions
          </span>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            LED Display Solutions for Every Environment
          </h2>

          <p className="mt-4 text-white/55">
            Flexible LED display systems designed around your space,
            application, viewing distance, and display requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="group rounded-2xl border p-7 transition duration-300 hover:-translate-y-1"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.10)",
                  backgroundColor: "rgb(9, 9, 9)",
                }}
              >
                <div
                  className="mb-5 inline-flex rounded-xl p-3 transition group-hover:text-white"
                  style={{
                    backgroundColor: "rgba(217, 4, 41, 0.10)",
                    color: "rgb(217, 4, 41)",
                  }}
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold">{solution.title}</h3>

                <p className="mt-3 leading-7 text-white/55">
                  {solution.description}
                </p>

                <div
                  className="mt-6 h-0.5 w-10 transition-all duration-300 group-hover:w-20"
                  style={{ backgroundColor: "rgb(212, 175, 55)" }}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section
        className="py-20"
        style={{ backgroundColor: "rgb(7, 7, 7)" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: "rgb(212, 175, 55)" }}
              >
                Why Choose Our LED Solutions
              </span>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Built for Performance and Reliability
              </h2>

              <p className="mt-5 leading-8 text-white/55">
                We focus on delivering practical LED display solutions with
                professional installation, system configuration, and ongoing
                technical support.
              </p>

              <div
                className="mt-8 flex items-center gap-4 rounded-xl border p-5"
                style={{
                  borderColor: "rgba(212, 175, 55, 0.20)",
                  backgroundColor: "rgb(14, 14, 14)",
                }}
              >
                <div
                  className="rounded-lg p-3"
                  style={{
                    backgroundColor: "rgba(217, 4, 41, 0.10)",
                    color: "rgb(217, 4, 41)",
                  }}
                >
                  <Wrench size={26} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Installation & Maintenance
                  </h3>

                  <p className="mt-1 text-sm text-white/50">
                    Complete technical support from installation to
                    maintenance.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border p-4"
                  style={{
                    borderColor: "rgba(255, 255, 255, 0.10)",
                    backgroundColor: "rgb(12, 12, 12)",
                  }}
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0"
                    style={{ color: "rgb(212, 175, 55)" }}
                  />

                  <span className="text-sm leading-6 text-white/65">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "rgb(217, 4, 41)" }}
          >
            Applications
          </span>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Where LED Walls Can Be Used
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {applications.map((application) => (
            <div
              key={application}
              className="flex items-center gap-3 rounded-xl border p-5 transition hover:-translate-y-0.5"
              style={{
                borderColor: "rgba(255, 255, 255, 0.10)",
                backgroundColor: "rgb(9, 9, 9)",
              }}
            >
              <MonitorPlay
                size={20}
                className="shrink-0"
                style={{ color: "rgb(212, 175, 55)" }}
              />

              <span className="text-sm font-medium text-white/65">
                {application}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="border-t"
        style={{
          borderColor: "rgba(212, 175, 55, 0.20)",
          background:
            "linear-gradient(110deg, rgb(45, 2, 9), rgb(2, 2, 2) 55%, rgb(25, 20, 5))",
        }}
      >
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <MonitorPlay
            className="mx-auto"
            size={42}
            style={{ color: "rgb(212, 175, 55)" }}
          />

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Need an LED Wall for Your Project?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/55">
            Tell us about your location, screen size, application, and
            requirements. Our team can help you plan the appropriate LED
            display solution.
          </p>

          <div className="mt-8">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 font-semibold text-white transition hover:scale-[1.02]"
              style={{ backgroundColor: "rgb(217, 4, 41)" }}
            >
              Request a Quote
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LedWall;