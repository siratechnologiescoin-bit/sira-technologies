import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import { services } from "../../data/services";

// =====================================================
// ENVIRONMENT CONFIGURATION
// =====================================================

const COMPANY_NAME =
  import.meta.env.VITE_COMPANY_NAME || "SIRA Technologies";

const CONTACT_PERSON =
  import.meta.env.VITE_CONTACT_PERSON || "";

const CONTACT_PHONE =
  import.meta.env.VITE_CONTACT_PHONE || "";

const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL || "";

const COMPANY_LOCATION =
  import.meta.env.VITE_COMPANY_LOCATION || "";

const MRHEALTH_PATH =
  import.meta.env.VITE_MRHEALTH_PATH || "/product/mrhealth";

// External MRHealth website
const MRHEALTH_URL =
  import.meta.env.VITE_MRHEALTH_URL || "https://mrhealth.co.in";

// =====================================================
// FOOTER
// =====================================================

const Footer = () => {
  const phoneHref = CONTACT_PHONE.replace(/[^\d+]/g, "");

  return (
    <footer className="bg-sira-black text-white">
      <div className="sira-container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* =====================================================
              COMPANY
          ===================================================== */}
          <div>
            <div className="mb-5">
              <div className="text-2xl font-black tracking-wide text-white">
                SIRA
              </div>

              <div className="text-xs font-bold uppercase tracking-[0.25em] text-sira-gold">
                Technologies
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-400">
              Technology infrastructure and IT
              solutions for businesses,
              organizations and institutions.
            </p>

            <Link
              to="/about"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sira-gold transition hover:text-white"
            >
              About {COMPANY_NAME}
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* =====================================================
              SERVICES
          ===================================================== */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-sira-gold">
              Services
            </h3>

            <div className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={service.path}
                  className="block text-sm text-gray-400 transition hover:text-white"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {/* =====================================================
              PRODUCT
          ===================================================== */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-sira-gold">
              Product
            </h3>

            <Link
              to={MRHEALTH_PATH}
              className="text-lg font-bold text-white transition hover:text-sira-gold"
            >
              MRHealth
            </Link>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Bringing Healthcare Together.
            </p>

            <a
              href={MRHEALTH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-sira-gold transition hover:text-white"
            >
              Visit MRHealth
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* =====================================================
              CONTACT
          ===================================================== */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-sira-gold">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-gray-400">

              {/* Contact Person */}
              {CONTACT_PERSON && (
                <div>
                  <p className="mb-1 font-semibold text-white">
                    {CONTACT_PERSON}
                  </p>

                  <p className="text-xs text-gray-500">
                    {COMPANY_NAME}
                  </p>
                </div>
              )}

              {/* Address */}
              {COMPANY_LOCATION && (
                <div className="flex gap-3">
                  <MapPin
                    size={18}
                    className="shrink-0 text-sira-gold"
                  />

                  <span>
                    {COMPANY_LOCATION}
                  </span>
                </div>
              )}

              {/* Phone */}
              {CONTACT_PHONE && (
                <a
                  href={`tel:${phoneHref}`}
                  className="flex gap-3 transition hover:text-white"
                >
                  <Phone
                    size={18}
                    className="shrink-0 text-sira-gold"
                  />

                  <span>
                    {CONTACT_PHONE}
                  </span>
                </a>
              )}

              {/* Email */}
              {CONTACT_EMAIL && (
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex gap-3 transition hover:text-white"
                >
                  <Mail
                    size={18}
                    className="shrink-0 text-sira-gold"
                  />

                  <span className="break-all">
                    {CONTACT_EMAIL}
                  </span>
                </a>
              )}

            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          COPYRIGHT
      ===================================================== */}
      <div className="border-t border-white/10">
        <div className="sira-container flex flex-col justify-between gap-3 py-5 text-xs text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} {COMPANY_NAME}.
            All rights reserved.
          </p>

          <p>
            {COMPANY_NAME}
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;