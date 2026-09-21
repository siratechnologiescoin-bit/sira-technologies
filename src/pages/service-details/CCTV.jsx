import {
  CheckCircle2,
  ShieldCheck,
  Camera,
  Video,
  Monitor,
  HardDrive,
  Network,
  Wifi,
  Settings,
  Wrench,
  Smartphone,
  Cloud,
  Lock,
  Database,
  RefreshCw,
  Activity,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import Container from "../../components/common/Container";

const services = [
  {
    icon: Camera,
    title: "IP CCTV Installation",
    description:
      "Professional IP camera installation and configuration for homes, offices, shops and businesses.",
  },
  {
    icon: Video,
    title: "HD CCTV Systems",
    description:
      "Installation and configuration of high-definition CCTV camera systems for reliable surveillance.",
  },
  {
    icon: HardDrive,
    title: "DVR Installation",
    description:
      "DVR installation and configuration for recording, storage and management of CCTV footage.",
  },
  {
    icon: Database,
    title: "NVR Installation",
    description:
      "Network Video Recorder installation and configuration for IP-based surveillance systems.",
  },
  {
    icon: Monitor,
    title: "CCTV Monitoring",
    description:
      "Monitor connected CCTV cameras through supported monitors and surveillance display systems.",
  },
  {
    icon: Smartphone,
    title: "Mobile CCTV Monitoring",
    description:
      "Configure supported CCTV systems for remote viewing through smartphones and mobile applications.",
  },
  {
    icon: Network,
    title: "CCTV Networking",
    description:
      "Network configuration for IP cameras, NVRs, routers and other supported surveillance equipment.",
  },
  {
    icon: Wifi,
    title: "Wireless CCTV",
    description:
      "Wireless camera installation and connectivity support for suitable residential and business environments.",
  },
  {
    icon: Cloud,
    title: "Remote CCTV Access",
    description:
      "Configuration support for secure remote access to supported surveillance systems.",
  },
  {
    icon: Lock,
    title: "CCTV Security Configuration",
    description:
      "Basic access control, passwords and security configuration for supported CCTV systems.",
  },
  {
    icon: Settings,
    title: "Camera Configuration",
    description:
      "Camera settings, recording configuration, resolution, motion detection and related options.",
  },
  {
    icon: Activity,
    title: "Motion Detection",
    description:
      "Configuration of supported motion detection and event recording features.",
  },
  {
    icon: Wrench,
    title: "CCTV Troubleshooting",
    description:
      "Diagnosis and troubleshooting of camera, recording, network, display and connectivity issues.",
  },
  {
    icon: RefreshCw,
    title: "CCTV Maintenance",
    description:
      "Routine inspection, configuration checks and maintenance support for CCTV systems.",
  },
  {
    icon: Camera,
    title: "Camera Replacement",
    description:
      "Replacement and configuration support for faulty or outdated CCTV cameras.",
  },
  {
    icon: Video,
    title: "CCTV System Upgrade",
    description:
      "Upgrade support for cameras, storage, recording systems and supported surveillance infrastructure.",
  },
];

const process = [
  {
    number: "01",
    title: "Site Assessment",
    description:
      "We understand the site layout, surveillance requirements, camera locations, network and power availability.",
  },
  {
    number: "02",
    title: "System Planning",
    description:
      "We plan camera placement, recording requirements, storage, connectivity and monitoring requirements.",
  },
  {
    number: "03",
    title: "Installation",
    description:
      "Cameras, recording equipment, cabling and required networking infrastructure are installed and configured.",
  },
  {
    number: "04",
    title: "Testing & Handover",
    description:
      "The surveillance system is tested for camera connectivity, recording, playback and supported remote access.",
  },
];

const CCTV = () => {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-sira-black py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-sira-black via-sira-dark to-sira-red" />

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-sira-gold/20" />

        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-sira-gold/10" />

        <Container>
          <div className="relative grid items-center gap-12 lg:grid-cols-2">

            <div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sira-gold/30 bg-white/5 px-4 py-2">

                <Camera
                  size={17}
                  className="text-sira-gold"
                />

                <span className="text-xs font-bold uppercase tracking-wider text-sira-gold">
                  CCTV & Security Services
                </span>

              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Professional CCTV
                <span className="block text-sira-gold">
                  Installation & Support
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                Professional CCTV installation, IP cameras, HD
                surveillance systems, DVR, NVR, remote monitoring,
                maintenance and troubleshooting for homes, offices
                and businesses.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-sira-red px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-sira-red"
                >
                  Get a Quote
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:border-sira-gold hover:text-sira-gold"
                >
                  Contact Us
                </Link>

              </div>

            </div>

            <div className="flex justify-center lg:justify-end">

              <div className="relative flex h-72 w-72 items-center justify-center rounded-3xl border border-sira-gold/30 bg-white/5 shadow-2xl backdrop-blur-sm sm:h-80 sm:w-80">

                <div className="absolute inset-6 rounded-2xl border border-white/10" />

                <Camera
                  size={135}
                  strokeWidth={1}
                  className="relative text-sira-gold"
                />

                <div className="absolute bottom-8 rounded-full bg-sira-red px-4 py-2 text-xs font-bold text-white">
                  Security Solutions
                </div>

              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* INTRO + SERVICES */}
      <section className="sira-section bg-white">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <span className="sira-label">
              Surveillance Infrastructure
            </span>

            <h2 className="sira-title mt-3">
              Complete CCTV Services
            </h2>

            <p className="sira-description mx-auto mt-4">
              From camera installation and recording systems to
              networking, remote monitoring, maintenance and
              troubleshooting, SIRA Technologies provides practical
              CCTV and surveillance solutions for different
              environments.
            </p>

          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sira-gold/50 hover:shadow-sira"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sira-light text-sira-red transition group-hover:bg-sira-red group-hover:text-white">

                    <Icon size={23} />

                  </div>

                  <h3 className="mt-5 text-base font-bold text-sira-dark">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-sira-gray">
                    {service.description}
                  </p>

                </div>
              );
            })}

          </div>

        </Container>
      </section>

      {/* SUPPORT */}
      <section className="sira-section bg-sira-light">
        <Container>

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <span className="sira-label">
                CCTV Support
              </span>

              <h2 className="sira-title mt-3">
                What We Can Help You With
              </h2>

              <p className="sira-description mt-4">
                Whether you need a new CCTV installation, remote
                monitoring, recording setup or help troubleshooting
                an existing surveillance system, we can help.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "IP CCTV camera installation",
                  "HD CCTV camera installation",
                  "DVR installation and configuration",
                  "NVR installation and configuration",
                  "Camera positioning and setup",
                  "CCTV network configuration",
                  "Mobile CCTV viewing setup",
                  "Remote CCTV access configuration",
                  "Motion detection configuration",
                  "Recording and storage configuration",
                  "CCTV troubleshooting",
                  "Camera connectivity troubleshooting",
                  "CCTV maintenance",
                  "Camera replacement support",
                  "CCTV system upgrades",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-sira-red"
                    />

                    <span className="text-sm font-medium text-sira-dark">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            {/* INFO CARD */}
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sira lg:p-9">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sira-red text-white">

                <ShieldCheck size={28} />

              </div>

              <h3 className="mt-6 text-2xl font-bold text-sira-dark">
                Before We Install Your CCTV System
              </h3>

              <p className="mt-3 text-sm leading-6 text-sira-gray">
                Understanding the site and surveillance requirements
                helps us plan suitable camera positions, recording
                capacity, connectivity and monitoring requirements.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Site layout and camera locations",
                  "Number of cameras required",
                  "Indoor or outdoor installation",
                  "Recording and storage requirements",
                  "Network and internet availability",
                  "Remote monitoring requirements",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg bg-sira-light px-4 py-3"
                  >

                    <CheckCircle2
                      size={17}
                      className="text-sira-red"
                    />

                    <span className="text-sm font-semibold text-sira-dark">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </Container>
      </section>

      {/* PROCESS */}
      <section className="sira-section bg-white">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <span className="sira-label">
              Our Process
            </span>

            <h2 className="sira-title mt-3">
              Simple & Professional
            </h2>

            <p className="sira-description mx-auto mt-4">
              We follow a structured process to plan, install and
              configure CCTV systems while ensuring the required
              surveillance areas are properly covered.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {process.map((item) => (
              <div
                key={item.number}
                className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >

                <span className="text-4xl font-extrabold text-sira-gold/40">
                  {item.number}
                </span>

                <h3 className="mt-4 text-lg font-bold text-sira-dark">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-sira-gray">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </Container>
      </section>

      {/* CTA */}
      <section className="bg-sira-black py-16">
        <Container>

          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">

            <div>

              <h2 className="text-3xl font-extrabold text-white">
                Need CCTV & Security Support?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                Contact SIRA Technologies for CCTV installation,
                DVR, NVR, IP cameras, remote monitoring,
                maintenance and troubleshooting services.
              </p>

            </div>

            <Link
              to="/quote"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-sira-red px-7 py-3.5 text-sm font-bold text-white transition hover:bg-sira-gold hover:text-sira-black"
            >
              Request Service
              <ArrowRight size={17} />
            </Link>

          </div>

        </Container>
      </section>

    </main>
  );
};

export default CCTV;