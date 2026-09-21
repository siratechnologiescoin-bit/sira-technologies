import Container from "../components/common/Container";
import ContactCTA from "../components/home/ContactCTA";

const About = () => {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="bg-sira-black py-16 sm:py-20">
        <Container>
          <span className="sira-label text-sira-gold">
            About Us
          </span>

          <h1 className="mt-2 text-4xl font-black text-white sm:text-5xl">
            SIRA Technologies
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
              <span className="sira-label">
                Who We Are
              </span>

              <h2 className="sira-title mt-2">
                Technology That Supports Business
              </h2>
            </div>

            {/* RIGHT */}
            <div className="space-y-4 text-base leading-7 text-sira-gray">
              <p>
                SIRA Technologies provides technology
                infrastructure and IT services for
                businesses and organizations.
              </p>

              <p>
                Our capabilities include CCTV,
                networking, Linux and Windows
                administration, AWS cloud infrastructure
                and IT support.
              </p>

              <p>
                Alongside our services, SIRA Technologies
                develops MRHealth, a healthcare technology
                platform connecting patients and healthcare
                professionals.
              </p>
            </div>

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