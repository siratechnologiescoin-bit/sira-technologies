import {
  CheckCircle2,
  ShieldCheck,
  Server,
  Terminal,
  Settings,
  HardDrive,
  Database,
  Activity,
  Lock,
  Globe,
  RefreshCw,
  Monitor,
  Wrench,
  Package,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import Container from "../../components/common/Container";

const services = [
  {
    icon: Server,
    title: "Linux Server Administration",
    description:
      "Professional Linux server installation, configuration, administration and ongoing support.",
  },
  {
    icon: Terminal,
    title: "Linux Installation",
    description:
      "Installation and configuration of supported Linux distributions for servers and business environments.",
  },
  {
    icon: Settings,
    title: "Server Configuration",
    description:
      "System configuration including hostname, networking, users, permissions, services and system settings.",
  },
  {
    icon: Globe,
    title: "Nginx & Apache",
    description:
      "Web server installation, configuration, virtual hosts, reverse proxy and website deployment support.",
  },
  {
    icon: ShieldCheck,
    title: "Linux Server Hardening",
    description:
      "Security configuration including access controls, SSH hardening, firewall rules and system protection.",
  },
  {
    icon: Lock,
    title: "User & Permission Management",
    description:
      "Linux users, groups, sudo access, file permissions and access management.",
  },
  {
    icon: Activity,
    title: "Server Monitoring",
    description:
      "Monitoring of CPU, memory, disk usage, processes, services and basic server health.",
  },
  {
    icon: HardDrive,
    title: "Disk & Storage Management",
    description:
      "Partitioning, filesystem management, disk utilization analysis and storage configuration.",
  },
  {
    icon: Database,
    title: "Backup & Recovery",
    description:
      "Configuration and management of supported server backup and recovery solutions.",
  },
  {
    icon: Package,
    title: "Package Management",
    description:
      "Installation, updates and management of Linux packages and required software dependencies.",
  },
  {
    icon: RefreshCw,
    title: "System Updates",
    description:
      "Linux security updates, package upgrades and maintenance with attention to service availability.",
  },
  {
    icon: Wrench,
    title: "Linux Troubleshooting",
    description:
      "Diagnosis and resolution of common system, service, networking, storage and performance issues.",
  },
  {
    icon: Monitor,
    title: "Application Deployment",
    description:
      "Deployment support for websites, applications and supported services on Linux servers.",
  },
  {
    icon: Terminal,
    title: "Shell & Automation",
    description:
      "Basic shell scripting and task automation for supported Linux administration requirements.",
  },
  {
    icon: Server,
    title: "Production Server Support",
    description:
      "Administration and troubleshooting support for business and production Linux environments.",
  },
  {
    icon: Activity,
    title: "Performance Optimization",
    description:
      "Analysis of system resources and configuration improvements for supported workloads.",
  },
];

const process = [
  {
    number: "01",
    title: "System Assessment",
    description:
      "We review the existing Linux environment, hardware, applications, services, storage and network requirements.",
  },
  {
    number: "02",
    title: "Configuration Planning",
    description:
      "We identify the required packages, services, security settings, users, storage and deployment requirements.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Linux systems and required services are installed, configured, secured and deployed according to the requirement.",
  },
  {
    number: "04",
    title: "Testing & Support",
    description:
      "The environment is tested for service availability, connectivity, security and basic performance before handover.",
  },
];

const Linux = () => {
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

                <Terminal
                  size={17}
                  className="text-sira-gold"
                />

                <span className="text-xs font-bold uppercase tracking-wider text-sira-gold">
                  Linux Services
                </span>

              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Professional Linux
                <span className="block text-sira-gold">
                  Administration & Support
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                Linux server installation, administration, security,
                monitoring, web server configuration, deployment
                and troubleshooting services for businesses and
                organizations.
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

                <Terminal
                  size={135}
                  strokeWidth={1}
                  className="relative text-sira-gold"
                />

                <div className="absolute bottom-8 rounded-full bg-sira-red px-4 py-2 text-xs font-bold text-white">
                  Linux Solutions
                </div>

              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="sira-section bg-white">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <span className="sira-label">
              Linux Infrastructure
            </span>

            <h2 className="sira-title mt-3">
              Complete Linux Services
            </h2>

            <p className="sira-description mx-auto mt-4">
              From Linux installation and server administration to
              security hardening, web server configuration,
              monitoring, backup and troubleshooting, SIRA
              Technologies provides practical Linux infrastructure
              support for different environments.
            </p>

          </div>

          {/* SERVICES */}
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
                Linux Support
              </span>

              <h2 className="sira-title mt-3">
                What We Can Help You With
              </h2>

              <p className="sira-description mt-4">
                Whether you need a new Linux server, application
                deployment, security configuration or help
                troubleshooting an existing environment, we can
                help manage and maintain your infrastructure.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Linux server installation and configuration",
                  "Linux user and permission management",
                  "SSH configuration and access management",
                  "Nginx and Apache web server setup",
                  "Linux server security hardening",
                  "Firewall configuration",
                  "Server monitoring and resource analysis",
                  "Disk and storage management",
                  "Package installation and updates",
                  "Backup and recovery configuration",
                  "Application deployment",
                  "Network and service troubleshooting",
                  "System performance troubleshooting",
                  "Production server maintenance",
                  "Basic shell scripting and automation",
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
                Before We Configure Your Linux Server
              </h3>

              <p className="mt-3 text-sm leading-6 text-sira-gray">
                Understanding the existing server environment helps
                reduce downtime and prevents configuration conflicts
                during installation, deployment or troubleshooting.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Linux distribution and version",
                  "Server hardware or cloud details",
                  "Network and IP configuration",
                  "Required applications and services",
                  "Storage and backup requirements",
                  "User and access requirements",
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
              We follow a structured process to configure,
              secure and support Linux environments while
              minimizing service disruption.
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
                Need Linux Support?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                Contact SIRA Technologies for Linux server
                administration, deployment, security,
                monitoring and troubleshooting services.
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

export default Linux;