import { useState } from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const [imageError, setImageError] = useState(false);

  const Icon = service.icon;

  return (
    <Link
      to={service.path}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-sira-gold/60 hover:shadow-2xl"
    >
      {/* IMAGE / ICON AREA */}
      <div className="relative h-56 overflow-hidden bg-sira-black">
        {!imageError && service.image ? (
          <>
            <img
              src={service.image}
              alt={service.imageAlt || service.title}
              loading="lazy"
              onError={() => setImageError(true)}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* MOVING SHINE */}
            <div className="absolute -left-1/2 top-0 h-full w-1/3 rotate-12 bg-white/10 blur-xl transition-all duration-1000 group-hover:left-[120%]" />
          </>
        ) : (
          /* REACT ICON FALLBACK */
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sira-black via-sira-dark to-sira-red">
            <Icon
              size={100}
              className="text-sira-gold transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2"
            />

            {/* BACKGROUND CIRCLE */}
            <div className="absolute h-40 w-40 rounded-full border border-sira-gold/20 animate-pulse" />
          </div>
        )}

        {/* SERVICE ICON */}
        <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sira-red text-white shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-sira-gold group-hover:text-sira-black">
          <Icon size={27} />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-sira-dark transition-colors duration-300 group-hover:text-sira-red">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-sira-gray">
          {service.description}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sira-red transition-all duration-300 group-hover:gap-4">
          Explore Service
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;