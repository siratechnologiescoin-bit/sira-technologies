import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="bg-sira-red">

      <div className="sira-container py-14">

        <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sira-gold">
              Let's Work Together
            </p>

            <h2 className="mt-2 text-3xl font-black text-white">
              Need a Technology Solution?
            </h2>

            <p className="mt-2 text-sm text-white/75">
              Tell us about your requirement.
            </p>
          </div>

          <Link
            to="/contact"
            className="sira-btn-gold"
          >
            Contact SIRA
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
};

export default ContactCTA;