import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import ServiceCard from "../components/services/ServiceCard";

import { services } from "../data/services";

const Services = () => {
  return (
    <>
      <section className="bg-sira-black py-20">
        <Container>

          <span className="sira-label text-sira-gold">
            What We Do
          </span>

          <h1 className="text-4xl font-black text-white sm:text-5xl">
            Our Services
          </h1>

          <p className="mt-5 max-w-2xl text-gray-400">
            Professional technology infrastructure,
            security, networking, cloud and IT support
            services.
          </p>

        </Container>
      </section>

      <section className="sira-section bg-sira-light">
        <Container>

          <SectionTitle
            label="Technology Services"
            title="Solutions for Your Infrastructure"
            description="Choose a service to learn more about our capabilities."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>

        </Container>
      </section>
    </>
  );
};

export default Services;