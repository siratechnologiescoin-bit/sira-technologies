import {
  CheckCircle2,
  ShieldCheck,
  HardDrive,
  Settings,
  RefreshCw,
  Database,
  Wrench,
  Monitor,
  Printer,
  Laptop,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import Container from "../../components/common/Container";

const services = [
  {
    icon: Monitor,
    title: "Windows OS Installation",
    description:
      "Professional Windows installation, reinstallation, formatting and complete system setup.",
  },
  {
    icon: Settings,
    title: "Drivers & Updates",
    description:
      "Installation and updating of motherboard, chipset, graphics, audio, network and peripheral drivers.",
  },
  {
    icon: Database,
    title: "Backup & Restore",
    description:
      "Backup of important files and supported system data with restore assistance when required.",
  },
  {
    icon: RefreshCw,
    title: "Windows Recovery",
    description:
      "Support for boot failures, startup problems, recovery issues and common Windows system errors.",
  },
  {
    icon: Wrench,
    title: "Windows Troubleshooting",
    description:
      "Diagnosis and resolution of common Windows hardware, software, update and configuration problems.",
  },
  {
    icon: HardDrive,
    title: "PC Formatting",
    description:
      "Fresh Windows installation, disk preparation and post-installation configuration.",
  },
  {
    icon: Laptop,
    title: "Data Migration",
    description:
      "Transfer of documents, files and supported user data from an old PC to a new system.",
  },
  {
    icon: Settings,
    title: "Software Installation",
    description:
      "Installation and configuration of required applications, utilities and business software.",
  },
  {
    icon: RefreshCw,
    title: "Windows Update Support",
    description:
      "Windows update troubleshooting, update configuration and resolution of common update issues.",
  },
  {
    icon: Monitor,
    title: "Performance Optimization",
    description:
      "System cleanup, startup optimization, storage management and general Windows performance tuning.",
  },
  {
    icon: Printer,
    title: "Printer & Peripheral Setup",
    description:
      "Installation and configuration of printers, scanners, USB devices and other Windows peripherals.",
  },
  {
    icon: ShieldCheck,
    title: "Virus & Malware Cleanup",
    description:
      "Basic malware cleanup, security checks and Windows security configuration.",
  },
  {
    icon: HardDrive,
    title: "SSD / HDD Upgrade",
    description:
      "Storage replacement, Windows migration and system configuration after SSD or HDD upgrades.",
  },
  {
    icon: Settings,
    title: "User Account Setup",
    description:
      "Windows user account creation, basic permissions and system configuration.",
  },
];

const process = [
  {
    number: "01",
    title: "System Check",
    description:
      "We inspect the system and identify the Windows, driver or hardware-related requirement.",
  },
  {
    number: "02",
    title: "Backup",
    description:
      "Important user data is identified and backed up before formatting or major system changes.",
  },
  {
    number: "03",
    title: "Installation",
    description:
      "Windows, drivers, updates and required software are installed and configured.",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "The system is tested for booting, networking, audio, display, peripherals and basic performance.",
  },
];

const Windows = () => {
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
                <Monitor
                  size={17}
                  className="text-sira-gold"
                />

                <span className="text-xs font-bold uppercase tracking-wider text-sira-gold">
                  Windows Services
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Reliable Windows
                <span className="block text-sira-gold">
                  Installation & Support
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                Professional Windows OS installation, driver setup,
                backup, recovery, troubleshooting, software
                configuration and PC maintenance services.
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

                <Monitor
                  size={135}
                  strokeWidth={1}
                  className="relative text-sira-gold"
                />

                <div className="absolute bottom-8 rounded-full bg-sira-red px-4 py-2 text-xs font-bold text-white">
                  Windows Support
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
              Windows IT Support
            </span>

            <h2 className="sira-title mt-3">
              Complete Windows System Services
            </h2>

            <p className="sira-description mx-auto mt-4">
              From a fresh Windows installation to driver setup,
              backup, recovery and troubleshooting, SIRA Technologies
              provides practical Windows support for homes, offices
              and businesses.
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
                Windows Support
              </span>

              <h2 className="sira-title mt-3">
                What We Can Help You With
              </h2>

              <p className="sira-description mt-4">
                Whether your computer needs a fresh Windows
                installation or an existing system needs
                troubleshooting, we can help configure it properly.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Fresh Windows installation",
                  "Windows formatting and reinstallation",
                  "Driver installation and updates",
                  "Data backup before formatting",
                  "Windows recovery and startup troubleshooting",
                  "Software installation and configuration",
                  "Printer and peripheral setup",
                  "SSD / HDD replacement and migration",
                  "Windows performance optimization",
                  "Basic security and malware cleanup",
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
                Before We Format Your PC
              </h3>

              <p className="mt-3 text-sm leading-6 text-sira-gray">
                Important data should be backed up before
                formatting or reinstalling Windows. We can help
                identify and transfer important files before
                performing the installation.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Documents",
                  "Desktop files",
                  "Downloads",
                  "Pictures and videos",
                  "Business files",
                  "Supported application data",
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
              We follow a straightforward process to reduce
              unnecessary downtime and protect important data.
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
                Need Windows Support?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                Contact SIRA Technologies for Windows installation,
                drivers, backup, recovery, troubleshooting and
                system support.
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

export default Windows;