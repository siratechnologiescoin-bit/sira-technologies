import {
  CheckCircle2,
  ShieldCheck,
  Cloud,
  Server,
  Database,
  Network,
  Lock,
  Globe,
  HardDrive,
  Activity,
  Settings,
  RefreshCw,
  Layers,
  Zap,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import Container from "../../components/common/Container";

const services = [
  {
    icon: Server,
    title: "AWS EC2",
    description:
      "EC2 instance deployment, configuration and administration for supported cloud workloads.",
  },
  {
    icon: Database,
    title: "Amazon S3",
    description:
      "S3 storage configuration for files, backups, static websites and supported application data.",
  },
  {
    icon: Network,
    title: "AWS VPC",
    description:
      "Virtual Private Cloud configuration including subnets, routing and network connectivity.",
  },
  {
    icon: Lock,
    title: "AWS IAM",
    description:
      "Identity and access management configuration for users, roles, permissions and cloud resources.",
  },
  {
    icon: Globe,
    title: "Route 53",
    description:
      "DNS management and domain routing configuration using supported AWS Route 53 services.",
  },
  {
    icon: Layers,
    title: "Load Balancing",
    description:
      "Load balancer configuration for distributing application traffic across supported resources.",
  },
  {
    icon: Activity,
    title: "Auto Scaling",
    description:
      "Auto Scaling configuration to automatically adjust supported compute resources based on demand.",
  },
  {
    icon: HardDrive,
    title: "EBS Storage",
    description:
      "Elastic Block Store volume configuration, attachment and storage management for EC2.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description:
      "Deployment of supported websites, applications and services on AWS infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Cloud Security",
    description:
      "Basic AWS security configuration including IAM, security groups and access controls.",
  },
  {
    icon: Network,
    title: "Cloud Networking",
    description:
      "Configuration of subnets, route tables, security groups and supported cloud networking components.",
  },
  {
    icon: Settings,
    title: "AWS Configuration",
    description:
      "General AWS resource configuration and administration based on infrastructure requirements.",
  },
  {
    icon: RefreshCw,
    title: "Cloud Migration",
    description:
      "Support for migrating supported applications, workloads and data to AWS environments.",
  },
  {
    icon: Activity,
    title: "Cloud Monitoring",
    description:
      "Monitoring support for AWS resources, system performance and basic cloud health checks.",
  },
  {
    icon: Zap,
    title: "Cloud Optimization",
    description:
      "Basic resource and configuration review to improve supported AWS infrastructure usage.",
  },
  {
    icon: Server,
    title: "AWS Server Management",
    description:
      "Ongoing administration and troubleshooting support for supported AWS server environments.",
  },
];

const process = [
  {
    number: "01",
    title: "Infrastructure Assessment",
    description:
      "We understand your application, infrastructure, traffic, storage, security and cloud requirements.",
  },
  {
    number: "02",
    title: "Cloud Planning",
    description:
      "We plan the required AWS services, networking, compute, storage, access and deployment architecture.",
  },
  {
    number: "03",
    title: "Deployment",
    description:
      "AWS resources are configured and deployed according to the agreed infrastructure requirements.",
  },
  {
    number: "04",
    title: "Testing & Support",
    description:
      "The environment is tested for connectivity, availability, access and basic operational requirements.",
  },
];

const AWS = () => {
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

                <Cloud
                  size={17}
                  className="text-sira-gold"
                />

                <span className="text-xs font-bold uppercase tracking-wider text-sira-gold">
                  AWS & Cloud Services
                </span>

              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                AWS Cloud
                <span className="block text-sira-gold">
                  Infrastructure & Support
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                Professional AWS infrastructure deployment, cloud
                networking, EC2, S3, VPC, IAM, load balancing,
                migration, security and cloud management services.
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

                <Cloud
                  size={135}
                  strokeWidth={1}
                  className="relative text-sira-gold"
                />

                <div className="absolute bottom-8 rounded-full bg-sira-red px-4 py-2 text-xs font-bold text-white">
                  AWS Cloud Solutions
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
              Cloud Infrastructure
            </span>

            <h2 className="sira-title mt-3">
              Complete AWS Cloud Services
            </h2>

            <p className="sira-description mx-auto mt-4">
              From EC2 servers and S3 storage to VPC networking,
              IAM, load balancing, monitoring and cloud deployment,
              SIRA Technologies provides practical AWS solutions
              for different infrastructure requirements.
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
                AWS Cloud Support
              </span>

              <h2 className="sira-title mt-3">
                What We Can Help You With
              </h2>

              <p className="sira-description mt-4">
                Whether you are deploying a new application,
                migrating infrastructure to AWS or managing an
                existing cloud environment, we can help configure
                and support your infrastructure.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "EC2 instance deployment and configuration",
                  "S3 bucket and storage configuration",
                  "VPC and subnet configuration",
                  "Route tables and network configuration",
                  "IAM users, roles and permissions",
                  "Security group configuration",
                  "Load balancer configuration",
                  "Auto Scaling configuration",
                  "EBS storage management",
                  "Route 53 DNS configuration",
                  "AWS application deployment",
                  "Cloud migration support",
                  "AWS resource monitoring",
                  "Cloud security configuration",
                  "AWS troubleshooting and administration",
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
                Before We Configure Your AWS Environment
              </h3>

              <p className="mt-3 text-sm leading-6 text-sira-gray">
                Understanding your existing infrastructure and
                application requirements helps us plan the AWS
                environment correctly and reduce configuration
                issues during deployment.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Application and workload requirements",
                  "Expected traffic and resource requirements",
                  "AWS account and access requirements",
                  "Network and IP requirements",
                  "Storage and backup requirements",
                  "Security and access requirements",
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
              We follow a structured approach to plan, deploy and
              support AWS cloud infrastructure while maintaining
              reliable and manageable environments.
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
                Need AWS Cloud Support?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                Contact SIRA Technologies for AWS deployment,
                EC2, S3, VPC, IAM, networking, security,
                migration and cloud infrastructure support.
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

export default AWS;