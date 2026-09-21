
import React, { useState } from "react";

import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaArrowRight,
  FaShieldAlt,
  FaNetworkWired,
  FaServer,
  FaCloud,
  FaVideo,
  FaTools,
} from "react-icons/fa";

// =====================================================
// ENVIRONMENT CONFIGURATION
// =====================================================

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "";

const CONTACT_PERSON =
  import.meta.env.VITE_CONTACT_PERSON || "SIRA Technologies";

const COMPANY_NAME =
  import.meta.env.VITE_COMPANY_NAME || "SIRA Technologies";

const COMPANY_LOCATION =
  import.meta.env.VITE_COMPANY_LOCATION || "";

const CONTACT_PHONE =
  import.meta.env.VITE_CONTACT_PHONE || "";

const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL || "";

const MRHEALTH_PATH =
  import.meta.env.VITE_MRHEALTH_PATH || "/product/mrhealth";

// =====================================================
// QUOTE COMPONENT
// =====================================================

const Quote = () => {
  // =====================================================
  // TODAY'S DATE
  // Local browser date - prevents timezone issues
  // =====================================================

  const getTodayDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const TODAY = getTodayDate();

  // =====================================================
  // INITIAL FORM
  // =====================================================

  const initialFormData = {
    name: "",
    company: "",
    organizationType: "",
    mobile: "",
    email: "",
    location: "",
    service: "",
    requirement: "",
    visitDate: "",
    budget: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  // =====================================================
  // ORGANIZATION TYPES
  // =====================================================

  const organizationTypes = [
    "College",
    "School",
    "Factory",
    "Hospital",
    "Office",
    "Shop / Business",
    "Residential",
    "Warehouse",
    "Hotel",
    "Other",
  ];

  // =====================================================
  // SERVICES
  // =====================================================

 
const services = [
  {
    name: "CCTV Installation & Security",
    icon: <FaVideo />,
  },
  {
    name: "Networking & Infrastructure",
    icon: <FaNetworkWired />,
  },
  {
    name: "Linux Server Services",
    icon: <FaServer />,
  },
  {
    name: "Windows Server Services",
    icon: <FaServer />,
  },
  {
    name: "AWS & Cloud Services",
    icon: <FaCloud />,
  },
  {
    name: "IT Infrastructure",
    icon: <FaTools />,
  },
  {
    name: "LED Wall & Digital Display",
    icon: <FaVideo />,
  },
  {
    name: "AMC / Maintenance",
    icon: <FaShieldAlt />,
  },
  {
    name: "Other",
    icon: <FaTools />,
  },
];



  // =====================================================
  // HANDLE INPUT
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ---------------------------------------------------
    // MOBILE VALIDATION
    // Allow only numbers, spaces, +, -, (, )
    // ---------------------------------------------------

    if (name === "mobile") {
      const cleanedValue = value.replace(/[^\d+\-\s()]/g, "");

      setFormData((prev) => ({
        ...prev,
        mobile: cleanedValue,
      }));

      return;
    }

    // ---------------------------------------------------
    // VISIT DATE
    // Never allow past date
    // ---------------------------------------------------

    if (name === "visitDate") {
      if (value && value < TODAY) {
        alert(
          "Past dates are not allowed. Please select today or a future date."
        );

        setFormData((prev) => ({
          ...prev,
          visitDate: "",
        }));

        return;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================================
  // CREATE WHATSAPP MESSAGE
  // =====================================================

  const createWhatsAppMessage = () => {
    return `
*SIRA TECHNOLOGIES*
*New Quote Request*
━━━━━━━━━━━━━━━━━━━━

*CUSTOMER DETAILS*

Name: ${formData.name}

Company / Organization: ${formData.company || "Not provided"}

Organization Type: ${
      formData.organizationType || "Not specified"
    }

Mobile: ${formData.mobile}

Email: ${formData.email || "Not provided"}

Location: ${formData.location}

━━━━━━━━━━━━━━━━━━━━

*SERVICE DETAILS*

Service Required: ${formData.service}

Requirement:

${formData.requirement}

Preferred Visit Date: ${
      formData.visitDate || "Not specified"
    }

Estimated Budget: ${
      formData.budget || "Not specified"
    }

━━━━━━━━━━━━━━━━━━━━

Please contact me regarding this quotation request.

Thank you.

*${COMPANY_NAME}*

${COMPANY_LOCATION}
`.trim();
  };

  // =====================================================
  // OPEN WHATSAPP
  // =====================================================

  const openWhatsApp = () => {
    if (!WHATSAPP_NUMBER) {
      alert(
        "WhatsApp number is not configured. Please add VITE_WHATSAPP_NUMBER to your .env file."
      );
      return;
    }

    const message = createWhatsAppMessage();

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(message);

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // =====================================================
  // SUBMIT
  // =====================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    // ---------------------------------------------------
    // REQUIRED FIELDS
    // ---------------------------------------------------

    if (
      !formData.name.trim() ||
      !formData.mobile.trim() ||
      !formData.location.trim() ||
      !formData.service ||
      !formData.requirement.trim()
    ) {
      alert(
        "Please fill in all required fields: Name, Mobile, Location, Service and Requirement."
      );

      return;
    }

    // ---------------------------------------------------
    // MOBILE VALIDATION
    // ---------------------------------------------------

    const mobileDigits = formData.mobile.replace(/\D/g, "");

    if (mobileDigits.length < 10) {
      alert("Please enter a valid mobile number.");
      return;
    }

    // ---------------------------------------------------
    // DATE VALIDATION
    // Extra protection against manually entered past dates
    // ---------------------------------------------------

    if (formData.visitDate && formData.visitDate < TODAY) {
      alert(
        "Past visit dates are not allowed. Please select today or a future date."
      );

      return;
    }

    // ---------------------------------------------------
    // WHATSAPP CONFIGURATION CHECK
    // ---------------------------------------------------

    if (!WHATSAPP_NUMBER) {
      alert(
        "WhatsApp number is not configured. Please add VITE_WHATSAPP_NUMBER to your .env file."
      );

      return;
    }

    // ---------------------------------------------------
    // OPEN WHATSAPP
    // ---------------------------------------------------

    openWhatsApp();

    setSubmitted(true);
  };

  // =====================================================
  // NEW REQUEST
  // =====================================================

  const handleNewRequest = () => {
    setFormData({
      ...initialFormData,
    });

    setSubmitted(false);
  };

  // =====================================================
  // SUCCESS SCREEN
  // =====================================================

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#020202] text-white">
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4 py-20">
          <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#d90429]/10 blur-3xl" />

          <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-[#d4af37]/30 bg-white/[0.04] p-8 text-center shadow-2xl backdrop-blur-xl md:p-12">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10">
              <FaCheckCircle className="text-5xl text-[#d4af37]" />
            </div>

            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              Quote Request Ready
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-gray-300">
              Your quotation details have been prepared for
              WhatsApp. Review the message and press{" "}
              <strong>Send</strong> in WhatsApp to submit your
              request.
            </p>

            <div className="mb-8 rounded-2xl border border-[#25D366]/20 bg-[#25D366]/5 p-5">
              <div className="mb-2 flex items-center justify-center gap-2 text-[#25D366]">
                <FaWhatsapp />

                <span className="font-semibold">
                  WhatsApp Request
                </span>
              </div>

              <p className="text-sm text-gray-400">
                Your request is sent directly through WhatsApp.
                No account or registration is required.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-7 py-4 font-semibold text-black transition hover:scale-[1.02] hover:bg-[#20bd5a]"
              >
                <FaWhatsapp className="text-xl" />
                Open WhatsApp
              </button>

              <button
                type="button"
                onClick={handleNewRequest}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                New Request
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // =====================================================
  // MAIN FORM
  // =====================================================

  return (
    <div className="min-h-screen bg-[#020202] text-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#d90429]/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 px-4 py-2 text-sm text-[#d4af37]">
              <FaTools />
              {COMPANY_NAME.toUpperCase()}
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Request a{" "}
              <span className="text-[#d90429]">
                Quote
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Tell us what you need. Submit your requirement
              and continue directly to WhatsApp for a quick
              quotation.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold md:text-3xl">
                Let's discuss your requirement
              </h2>

              <p className="mt-3 leading-7 text-gray-400">
                Whether you need CCTV, networking, servers,
                cloud, or complete IT infrastructure, send us
                your requirement and our team can contact you.
              </p>
            </div>

            {/* Contact Person */}

            <div className="mb-5 rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/5 p-5">
              <p className="text-sm text-gray-500">
                Contact Person
              </p>

              <p className="mt-1 text-lg font-bold text-white">
                {CONTACT_PERSON}
              </p>

              <p className="text-sm text-[#d4af37]">
                {COMPANY_NAME}
              </p>
            </div>

            {/* Phone */}

            <a
              href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
              className="group mb-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#d90429]/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d90429]/10 text-[#d90429]">
                <FaPhone />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Call Us
                </p>

                <p className="font-semibold">
                  {CONTACT_PHONE}
                </p>
              </div>
            </a>

            {/* Email */}

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group mb-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#d4af37]/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="break-all font-semibold">
                  {CONTACT_EMAIL}
                </p>
              </div>
            </a>

            {/* Location */}

            <div className="mb-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d90429]/10 text-[#d90429]">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="font-semibold">
                  {COMPANY_LOCATION}
                </p>
              </div>
            </div>

            {/* MRHealth */}

            <a
              href={MRHEALTH_PATH}
              className="mb-8 flex items-center justify-between rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/5 p-5 transition hover:border-[#d4af37]/50"
            >
              <div>
                <p className="text-sm text-gray-500">
                  Our Product
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  MRHealth
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Healthcare platform by {COMPANY_NAME}
                </p>
              </div>

              <FaArrowRight className="text-[#d4af37]" />
            </a>

            {/* Services */}

            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Our Services
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3 text-sm text-gray-300"
                  >
                    <span className="text-[#d4af37]">
                      {service.icon}
                    </span>

                    <span>{service.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE FORM
          ================================================== */}

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl md:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">
                Request Your Quote
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Fields marked with{" "}
                <span className="text-[#d90429]">*</span>{" "}
                are required.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* NAME + COMPANY */}

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Name{" "}
                    <span className="text-[#d90429]">
                      *
                    </span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-[#d90429]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Company / Organization
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company / Institution name"
                    autoComplete="organization"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* ORGANIZATION TYPE */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Organization Type
                </label>

                <select
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none transition focus:border-[#d4af37]"
                >
                  <option
                    value=""
                    className="bg-[#020202]"
                  >
                    Select organization type
                  </option>

                  {organizationTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-[#020202]"
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* MOBILE + EMAIL */}

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Mobile Number{" "}
                    <span className="text-[#d90429]">
                      *
                    </span>
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Your mobile number"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={15}
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-[#d90429]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    autoComplete="email"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* LOCATION */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Location{" "}
                  <span className="text-[#d90429]">*</span>
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City / Area / District"
                  required
                  autoComplete="address-level2"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-[#d90429]"
                />
              </div>

              {/* SERVICE */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Service Required{" "}
                  <span className="text-[#d90429]">*</span>
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none transition focus:border-[#d90429]"
                >
                  <option
                    value=""
                    className="bg-[#020202]"
                  >
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option
                      key={service.name}
                      value={service.name}
                      className="bg-[#020202]"
                    >
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* REQUIREMENT */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Requirement{" "}
                  <span className="text-[#d90429]">*</span>
                </label>

                <textarea
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  placeholder="Describe what you need..."
                  required
                  rows={6}
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-[#d90429]"
                />
              </div>

              {/* VISIT DATE + BUDGET */}

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Preferred Visit Date
                  </label>

                  <input
                    type="date"
                    name="visitDate"
                    value={formData.visitDate}
                    onChange={handleChange}
                    min={TODAY}
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none transition focus:border-[#d4af37]"
                  />

                  <p className="mt-2 text-xs text-gray-600">
                    Past dates are not available.
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Estimated Budget
                  </label>

                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="Example: ₹50,000"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* WHATSAPP NOTICE */}

              <div className="rounded-2xl border border-[#25D366]/20 bg-[#25D366]/5 p-4">
                <div className="flex gap-3">
                  <FaWhatsapp className="mt-0.5 shrink-0 text-xl text-[#25D366]" />

                  <div>
                    <p className="font-semibold text-white">
                      Send your request via WhatsApp
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      When you submit this form, WhatsApp
                      will open with your quotation details
                      already filled in. Review the message
                      and press Send.
                    </p>
                  </div>
                </div>
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#d90429] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#d90429]/20 transition hover:bg-[#b80323] hover:shadow-[#d90429]/30"
              >
                <FaWhatsapp className="text-xl" />

                <span>
                  Submit Request via WhatsApp
                </span>

                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-center text-xs leading-5 text-gray-600">
                By submitting this request, you agree to
                be contacted by {COMPANY_NAME} regarding
                your requirement.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;

