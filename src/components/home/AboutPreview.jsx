import Container from "../common/Container";
import Button from "../common/Button";

const AboutPreview = () => {
  return (
    <section className="sira-section bg-sira-light">

      <Container>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <span className="sira-label">
              About SIRA
            </span>

            <h2 className="sira-title">
              Technology Infrastructure
              With Practical Expertise
            </h2>

            <p className="sira-description">
              SIRA Technologies focuses on reliable,
              secure and scalable IT infrastructure.
              We work across physical security,
              networking, servers, cloud and ongoing
              technical support.
            </p>

            <div className="mt-8">
              <Button to="/about">
                Know More About Us
              </Button>
            </div>

          </div>

          <div className="grid grid-cols-2 gap-4">

            {[
              ["01", "Security"],
              ["02", "Networking"],
              ["03", "Cloud"],
              ["04", "IT Support"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <span className="text-3xl font-black text-sira-gold">
                  {number}
                </span>

                <h3 className="mt-4 font-bold text-sira-dark">
                  {title}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
};

export default AboutPreview;