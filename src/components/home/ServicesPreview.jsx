import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

import ServiceCard from "../services/ServiceCard";
import { services } from "../../data/services";

const ServicesPreview = () => {
  return (
    <section className="sira-section bg-sira-light">

      <Container>

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <SectionTitle
            label="Our Services"
            title="Technology Solutions That Work"
            description="From physical security and networking to servers, cloud and ongoing IT support."
          />

          <Button
            to="/services"
            variant="outline"
          >
            View All Services
          </Button>

        </div>

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
  );
};

export default ServicesPreview;