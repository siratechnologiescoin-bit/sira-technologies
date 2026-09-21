
import Container from "../components/common/Container";
import ContactCTA from "../components/home/ContactCTA";

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

// =====================================================
// ABOUT COMPONENT
// =====================================================

const About = () => {
  const phoneHref = CONTACT_PHONE.replace(/\s/g, "");

  return (
    <>
      {/* =====================================================
          ABOUT HERO
      ====================================================== */}

      <section className="bg-sira-black py-20">
        <Container>
          <span className="sira-label text-sira-gold">
            About Us
          </span>

          <h1 className="text-4xl font-black text-white sm:text-5xl">
            {COMPANY_NAME}
          </h1>

          <p className="mt-5 max-w-2xl text-gray-400">
            Technology infrastructure, security,
            cloud and IT solutions.
          </p>
        </Container>
      </section>

      {/* =====================================================
          ABOUT CONTENT
      ====================================================== */}

      <section className="sira-section bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <span className="sira-label">
                Who We Are
              </span>

              <h2 className="sira-title">
                Technology That Supports Business
              </h2>
            </div>

            {/* RIGHT */}

            <div className="space-y-5 text-base leading-8 text-sira-gray">
              <p>
                {COMPANY_NAME} provides technology
                infrastructure and IT services for
                businesses and organizations.
              </p>

              <p>
                Our service capabilities include CCTV,
                networking, Linux and Windows
                administration, AWS cloud infrastructure
                and IT support.
              </p>

              <p>
                Alongside our services, {COMPANY_NAME}
                develops MRHealth, a healthcare technology
                platform connecting patients and healthcare
                professionals.
              </p>
            </div>
          </div>

          {/* =================================================
              CONTACT INFORMATION
          ================================================== */}

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {/* CONTACT PERSON */}

            <div className="sira-card p-6">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-sira-red">
                Contact Person
              </p>

              <p className="mt-3 text-2xl font-bold text-sira-dark">
                {CONTACT_PERSON}
              </p>

              <p className="mt-2 text-sm text-sira-gray">
                {COMPANY_NAME}
              </p>
            </div>

            {/* PHONE */}

            <a
              href={`tel:${phoneHref}`}
              className="sira-card p-6"
            >
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-sira-red">
                Call Us
              </p>

              <p className="mt-3 text-xl font-bold text-sira-dark">
                {CONTACT_PHONE}
              </p>

              <p className="mt-2 text-sm text-sira-gray">
                Contact us for technology and IT services.
              </p>
            </a>

            {/* EMAIL */}

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="sira-card p-6 sm:col-span-2"
            >
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-sira-red">
                Email Us
              </p>

              <p className="mt-3 break-all text-xl font-bold text-sira-dark">
                {CONTACT_EMAIL}
              </p>

              <p className="mt-2 text-sm text-sira-gray">
                Send us your requirements or enquiries.
              </p>
            </a>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CONTACT CTA
      ====================================================== */}

      <ContactCTA />
    </>
  );
};

export default About;
