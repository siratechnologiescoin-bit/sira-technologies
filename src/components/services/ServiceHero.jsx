import Container from "../common/Container";

const ServiceHero = ({ service }) => {
  const Icon = service.icon;

  return (
    <section className="relative overflow-hidden bg-sira-black">

      <div className="absolute inset-0">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-black/80" />
      </div>

      <Container>
        <div className="relative flex min-h-[430px] items-center py-20">

          <div className="max-w-3xl">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-sira-gold text-sira-black">
              <Icon size={30} />
            </div>

            <span className="sira-label text-sira-gold">
              SIRA Service
            </span>

            <h1 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              {service.description}
            </p>

          </div>

        </div>
      </Container>

    </section>
  );
};

export default ServiceHero;