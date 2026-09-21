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

      <section className="bg-sira-black py-16 sm:py-20">
        <Container>
          <span className="sira-label text-sira-gold">
            About Us
          </span>

          <h1 className="mt-2 text-4xl font-black text-white sm:text-5xl">
            {COMPANY_NAME}
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
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
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

            {/* LEFT */}

            <div>
              <span className="sira-label text-sira-gold">
                Who We Are
              </span>

              <h2 className="sira-title mt-2">
                Technology That Supports Business
              </h2>
            </div>

            {/* RIGHT */}

            <div className="space-y-4 text-base leading-7 text-sira-gray">
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

          <div className="mt-12 grid gap-5 sm:grid-cols-2">

            {/* CONTACT PERSON */}

            <div
              className="
                sira-card
                border
                border-gray-100
                bg-white
                p-6
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-sira-gold
                "
              >
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
              className="
                sira-card
                border
                border-gray-100
                bg-white
                p-6
                transition-all
                duration-200
                hover:border-sira-gold
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-sira-gold
                "
              >
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
              className="
                sira-card
                border
                border-gray-100
                bg-white
                p-6
                transition-all
                duration-200
                hover:border-sira-gold
                sm:col-span-2
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-sira-gold
                "
              >
                Email Us
              </p>

              <p
                className="
                  mt-3
                  break-all
                  text-xl
                  font-bold
                  text-sira-dark
                "
              >
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