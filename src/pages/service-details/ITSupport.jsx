import {
  CheckCircle2,
  ShieldCheck,
  Headphones,
  Monitor,
  Laptop,
  Wrench,
  Settings,
  Printer,
  HardDrive,
  Wifi,
  Network,
  Server,
  Database,
  RefreshCw,
  UserCog,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import Container from "../../components/common/Container";

const services = [
  {
    icon: Headphones,
    title: "Remote IT Support",
    description:
      "Remote technical assistance for common hardware, software, connectivity and system issues.",
  },
  {
    icon: Wrench,
    title: "On-Site IT Support",
    description:
      "On-site technical support for offices, businesses and organizations requiring hands-on assistance.",
  },
  {
    icon: Monitor,
    title: "Desktop Support",
    description:
      "Desktop configuration, troubleshooting, maintenance and support for business users.",
  },
  {
    icon: Laptop,
    title: "Laptop Support",
    description:
      "Laptop setup, configuration, troubleshooting, software installation and maintenance.",
  },
  {
    icon: HardDrive,
    title: "Hardware Support",
    description:
      "Diagnosis and support for supported computers, storage devices, peripherals and IT hardware.",
  },
  {
    icon: Settings,
    title: "Software Support",
    description:
      "Installation, configuration, updates and troubleshooting of supported business software.",
  },
  {
    icon: Network,
    title: "Network Troubleshooting",
    description:
      "Diagnosis of LAN, Wi-Fi, IP, DNS, DHCP and common connectivity problems.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Support",
    description:
      "Wireless connectivity troubleshooting, access point configuration and coverage support.",
  },
  {
    icon: Printer,
    title: "Printer Support",
    description:
      "Printer installation, configuration, connectivity and common printing issue troubleshooting.",
  },
  {
    icon: Server,
    title: "Server Support",
    description:
      "Basic administration and troubleshooting support for supported Windows and Linux servers.",
  },
  {
    icon: Database,
    title: "Backup Support",
    description:
      "Support for data backup configuration, verification and basic recovery procedures.",
  },
  {
    icon: ShieldCheck,
    title: "IT Security Support",
    description:
      "Basic endpoint and system security configuration, access control and security maintenance.",
  },
  {
    icon: RefreshCw,
    title: "System Maintenance",
    description:
      "Routine system maintenance, updates, cleanup and configuration checks.",
  },
  {
    icon: UserCog,
    title: "User & Account Support",
    description:
      "User account setup, access configuration, permissions and common login issues.",
  },
  {
    icon: Network,
    title: "Office IT Setup",
    description:
      "Complete IT setup support for new and existing offices including computers, networking and peripherals.",
  },
  {
    icon: Monitor,
    title: "IT Troubleshooting",
    description:
      "Systematic diagnosis and resolution of common hardware, software and infrastructure issues.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand the Issue",
    description:
      "We identify the reported problem, affected systems, users and business impact.",
  },
  {
    number: "02",
    title: "Diagnose",
    description:
      "We inspect the hardware, software, network and system configuration to identify the root cause.",
  },
  {
    number: "03",
    title: "Resolve",
    description:
      "The required configuration, repair, replacement or troubleshooting steps are performed.",
  },
  {
    number: "04",
    title: "Verify",
    description:
      "The system is tested to confirm normal operation and reduce the possibility of recurring issues.",
  },
];

const ITSupport = () => {
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

                <Headphones
                  size={17}
                  className="text-sira-gold"
                />

                <span className="text-xs font-bold uppercase tracking-wider text-sira-gold">
                  IT Support Services
                </span>

              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Reliable IT
                <span className="block text-sira-gold">
                  Support & Maintenance
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                Professional remote and on-site IT support for
                computers, laptops, software, networking, servers,
                printers and everyday technology infrastructure.
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

                <Headphones
                  size={135}
                  strokeWidth={1}
                  className="relative text-sira-gold"
                />

                <div className="absolute bottom-8 rounded-full bg-sira-red px-4 py-2 text-xs font-bold text-white">
                  IT Solutions
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
              IT Infrastructure
            </span>

            <h2 className="sira-title mt-3">
              Complete IT Support Services
            </h2>

            <p className="sira-description mx-auto mt-4">
              From everyday desktop and laptop support to network,
              server, printer, software and infrastructure
              troubleshooting, SIRA Technologies provides practical
              IT support for businesses and organizations.
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

      {/* SUPPORT SECTION */}
      <section className="sira-section bg-sira-light">
        <Container>

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <span className="sira-label">
                IT Support
              </span>

              <h2 className="sira-title mt-3">
                What We Can Help You With
              </h2>

              <p className="sira-description mt-4">
                Whether you are experiencing a system problem,
                setting up a new office or need ongoing IT
                maintenance, we can help diagnose and support your
                technology environment.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Desktop and laptop troubleshooting",
                  "Windows and Linux system support",
                  "Software installation and configuration",
                  "Hardware troubleshooting",
                  "Printer installation and support",
                  "LAN and Wi-Fi troubleshooting",
                  "Internet connectivity troubleshooting",
                  "User account and access support",
                  "Server troubleshooting",
                  "System updates and maintenance",
                  "Basic backup support",
                  "IT security configuration",
                  "Office IT setup",
                  "Remote technical support",
                  "On-site technical support",
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
                Before We Start IT Support
              </h3>

              <p className="mt-3 text-sm leading-6 text-sira-gray">
                Understanding the existing IT environment helps us
                diagnose issues efficiently and avoid unnecessary
                changes to working systems.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Problem or service requirement",
                  "Affected computer or device",
                  "Operating system information",
                  "Network and internet details",
                  "Software or application requirements",
                  "Existing IT infrastructure details",
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
              We follow a structured support process to identify
              problems, resolve them and verify that your systems
              are working correctly.
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
                Need IT Support?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                Contact SIRA Technologies for remote support,
                on-site assistance, computer, software, network,
                server and IT infrastructure services.
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

export default ITSupport;