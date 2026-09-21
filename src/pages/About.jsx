import Container from "../components/common/Container";
import ContactCTA from "../components/home/ContactCTA";

const About = () => {
  return (
    <>
      <section className="bg-sira-black py-20">

        <Container>

          <span className="sira-label text-sira-gold">
            About Us
          </span>

          <h1 className="text-4xl font-black text-white sm:text-5xl">
            SIRA Technologies
          </h1>

          <p className="mt-5 max-w-2xl text-gray-400">
            Technology infrastructure, security,
            cloud and IT solutions.
          </p>

        </Container>

      </section>

      <section className="sira-section bg-white">

        <Container>

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <span className="sira-label">
                Who We Are
              </span>

              <h2 className="sira-title">
                Technology That Supports Business
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-sira-gray">

              <p>
                SIRA Technologies provides technology
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
                Alongside our services, SIRA Technologies
                develops MRHealth, a healthcare technology
                platform connecting patients and healthcare
                professionals.
              </p>

            </div>

          </div>

        </Container>

      </section>

      <ContactCTA />
    </>
  );
};

export default About;