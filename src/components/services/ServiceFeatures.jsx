import { CheckCircle2, ArrowUpRight } from "lucide-react";

import Container from "../common/Container";

const ServiceFeatures = ({ service }) => {
  const features = service?.features || [];
  const products = service?.products || [];

  return (
    <section className="sira-section bg-white">
      <Container>

        {/* =====================================================
            SERVICE FEATURES
        ===================================================== */}
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Section Introduction */}
          <div>
            <span className="sira-label">
              Our Expertise
            </span>

            <h2 className="sira-title">
              What We Provide
            </h2>

            <p className="sira-description">
              Practical and reliable solutions tailored
              to your infrastructure requirements.
            </p>
          </div>

          {/* Features */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.length > 0 ? (
              features.map((feature) => (
                <div
                  key={feature}
                  className="group flex items-center gap-3 rounded-lg border border-gray-100 bg-sira-light p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sira-gold/40 hover:shadow-md"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sira-gold/15 text-sira-red transition-colors duration-300 group-hover:bg-sira-red group-hover:text-white">
                    <CheckCircle2 size={19} />
                  </div>

                  <span className="text-sm font-semibold text-sira-dark">
                    {feature}
                  </span>
                </div>
              ))
            ) : (
              <div className="rounded-lg border border-gray-100 bg-sira-light p-5 text-sm text-sira-gray sm:col-span-2">
                Service features will be available soon.
              </div>
            )}
          </div>
        </div>


        {/* =====================================================
            AVAILABLE PRODUCTS
        ===================================================== */}
        {products.length > 0 && (
          <div className="mt-20">

            {/* Products Heading */}
            <div className="mb-10 text-center">
              <span className="sira-label">
                Products & Equipment
              </span>

              <h2 className="sira-title mt-2">
                Available Products
              </h2>

              <p className="sira-description mx-auto mt-4 max-w-2xl">
                Explore the products and equipment available
                for this service.
              </p>
            </div>


            {/* Product Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {products.map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sira-gold/50 hover:shadow-xl"
                >

                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden bg-sira-light">

                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                    {/* Product Number */}
                    <div className="absolute left-3 top-3 flex h-8 min-w-8 items-center justify-center rounded-full bg-sira-gold px-2 text-xs font-bold text-sira-black">
                      {String(products.indexOf(product) + 1).padStart(2, "0")}
                    </div>

                  </div>


                  {/* Product Content */}
                  <div className="p-5">

                    <div className="mb-2 flex items-start justify-between gap-3">

                      <h3 className="text-lg font-bold text-sira-dark">
                        {product.name}
                      </h3>

                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-sira-red transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sira-gold"
                      />

                    </div>

                    <p className="text-sm leading-6 text-sira-gray">
                      {product.description}
                    </p>

                  </div>
                </div>
              ))}

            </div>
          </div>
        )}

      </Container>
    </section>
  );
};

export default ServiceFeatures;