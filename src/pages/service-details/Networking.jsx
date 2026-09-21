import {
  CheckCircle2,
  ShieldCheck,
  Network,
  Router,
  Wifi,
  Server,
  Cable,
  Globe,
  Lock,
  Settings,
  Activity,
  Database,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import Container from "../../components/common/Container";

const services = [
  {
    icon: Network,
    title: "LAN Installation",
    description:
      "Professional LAN network installation for homes, offices, shops and business environments.",
  },
  {
    icon: Globe,
    title: "WAN Networking",
    description:
      "WAN connectivity setup and configuration for connecting offices, branches and remote locations.",
  },
  {
    icon: Router,
    title: "Router Configuration",
    description:
      "Router installation, configuration, internet setup, NAT, DHCP and basic network optimization.",
  },
  {
    icon: Network,
    title: "Switch Configuration",
    description:
      "Managed and unmanaged switch installation with VLAN and network connectivity configuration.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Installation",
    description:
      "Professional wireless network installation for reliable coverage across offices and buildings.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Optimization",
    description:
      "Wireless coverage analysis, access point placement and configuration for improved connectivity.",
  },
  {
    icon: Cable,
    title: "Structured Cabling",
    description:
      "Professional Cat5e, Cat6 and Cat6A structured network cabling and termination.",
  },
  {
    icon: Cable,
    title: "Fiber Optic Networking",
    description:
      "Fiber optic installation and connectivity solutions for high-speed and long-distance networks.",
  },
  {
    icon: Server,
    title: "Network Rack Setup",
    description:
      "Network rack installation, equipment organization, patch panels, cable management and power setup.",
  },
  {
    icon: ShieldCheck,
    title: "Firewall Configuration",
    description:
      "Basic firewall installation and configuration for network security and controlled access.",
  },
  {
    icon: Lock,
    title: "VPN Setup",
    description:
      "Secure VPN configuration for remote access and communication between supported network locations.",
  },
  {
    icon: Activity,
    title: "Network Monitoring",
    description:
      "Network health monitoring, connectivity checks and identification of common network issues.",
  },
  {
    icon: Settings,
    title: "Network Troubleshooting",
    description:
      "Diagnosis and resolution of connectivity, IP, DNS, DHCP, routing and Wi-Fi problems.",
  },
  {
    icon: Database,
    title: "Network Backup",
    description:
      "Backup and documentation of supported router, firewall and network device configurations.",
  },
  {
    icon: Network,
    title: "Office Networking",
    description:
      "Complete network setup for offices including internet, LAN, Wi-Fi, switches and structured cabling.",
  },
  {
    icon: Server,
    title: "Server Networking",
    description:
      "Network connectivity and configuration support for Windows and Linux server environments.",
  },
];

const process = [
  {
    number: "01",
    title: "Network Assessment",
    description:
      "We inspect the existing infrastructure, connectivity requirements, equipment and network environment.",
  },
  {
    number: "02",
    title: "Network Planning",
    description:
      "We plan the required topology, IP configuration, cabling, switches, routers and wireless coverage.",
  },
  {
    number: "03",
    title: "Installation",
    description:
      "Network equipment, structured cabling, Wi-Fi access points and required infrastructure are installed.",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "The network is tested for connectivity, speed, coverage, device communication and basic security.",
  },
];

const Networking = () => {
  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-sira-black py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-sira-black via-sira-dark to-sira-red" />

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-sira-gold/20" />

        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-sira-gold/10" />

        <Container>
          <div className="relative grid items-center gap-12 lg:grid-cols-2">

            {/* Hero Content */}

            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sira-gold/30 bg-white/5 px-4 py-2">

                <Network
                  size={17}
                  className="text-sira-gold"
                />

                <span className="text-xs font-bold uppercase tracking-wider text-sira-gold">
                  Networking Services
                </span>

              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Reliable Network
                <span className="block text-sira-gold">
                  Installation & Support
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                Professional LAN, WAN, Wi-Fi, structured cabling,
                router, switch, firewall, VPN and network
                troubleshooting services for homes, offices and
                businesses.
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

            {/* Hero Visual */}

            <div className="flex justify-center lg:justify-end">

              <div className="relative flex h-72 w-72 items-center justify-center rounded-3xl border border-sira-gold/30 bg-white/5 shadow-2xl backdrop-blur-sm sm:h-80 sm:w-80">

                <div className="absolute inset-6 rounded-2xl border border-white/10" />

                <Network
                  size={135}
                  strokeWidth={1}
                  className="relative text-sira-gold"
                />

                <div className="absolute bottom-8 rounded-full bg-sira-red px-4 py-2 text-xs font-bold text-white">
                  Network Solutions
                </div>

              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="sira-section bg-white">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <span className="sira-label">
              Network Infrastructure
            </span>

            <h2 className="sira-title mt-3">
              Complete Networking Services
            </h2>

            <p className="sira-description mx-auto mt-4">
              From basic office networking to structured cabling,
              Wi-Fi deployment, routers, switches, firewalls and
              network troubleshooting, SIRA Technologies provides
              practical networking solutions for different
              environments.
            </p>

          </div>

          {/* =================================================
              SERVICE GRID
          ================================================= */}

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

      {/* =====================================================
          WHAT WE CAN HELP WITH
      ===================================================== */}

      <section className="sira-section bg-sira-light">
        <Container>

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <span className="sira-label">
                Networking Support
              </span>

              <h2 className="sira-title mt-3">
                What We Can Help You With
              </h2>

              <p className="sira-description mt-4">
                Whether you need a new office network, Wi-Fi
                installation, structured cabling or help fixing an
                existing network, we can help design, configure and
                troubleshoot your infrastructure.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "LAN network installation",
                  "WAN and branch connectivity",
                  "Router installation and configuration",
                  "Managed and unmanaged switch configuration",
                  "Wi-Fi access point installation",
                  "Wi-Fi coverage and performance optimization",
                  "Cat5e, Cat6 and Cat6A structured cabling",
                  "Fiber optic network installation",
                  "Network rack and cable management",
                  "Firewall configuration",
                  "VPN setup",
                  "Network troubleshooting",
                  "IP address and DHCP configuration",
                  "DNS and connectivity troubleshooting",
                  "Network device configuration backup",
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

            {/* Information Card */}

            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sira lg:p-9">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sira-red text-white">

                <ShieldCheck size={28} />

              </div>

              <h3 className="mt-6 text-2xl font-bold text-sira-dark">
                Before We Configure Your Network
              </h3>

              <p className="mt-3 text-sm leading-6 text-sira-gray">
                Understanding the existing network infrastructure
                helps reduce downtime and prevents configuration
                conflicts during installation or troubleshooting.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Internet connection details",
                  "Router and firewall information",
                  "Existing switch configuration",
                  "IP address requirements",
                  "Wi-Fi coverage requirements",
                  "Number of connected devices",
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

      {/* =====================================================
          PROCESS
      ===================================================== */}

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
              We follow a structured process to install and
              troubleshoot networks while minimizing downtime.
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

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-sira-black py-16">
        <Container>

          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">

            <div>

              <h2 className="text-3xl font-extrabold text-white">
                Need Networking Support?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                Contact SIRA Technologies for LAN, WAN, Wi-Fi,
                structured cabling, router, switch, firewall,
                VPN and network troubleshooting services.
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

export default Networking;