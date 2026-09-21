
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section
      className="
        border-y
        border-gray-800
        bg-gray-950
      "
    >
      <div className="sira-container py-12 sm:py-14">
        <div
          className="
            flex
            flex-col
            items-start
            justify-between
            gap-6
            md:flex-row
            md:items-center
          "
        >
          {/* =================================================
              CONTENT
          ================================================== */}

          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-sira-gold
              "
            >
              Let's Work Together
            </p>

            <h2
              className="
                mt-2
                text-2xl
                font-black
                text-white
                sm:text-3xl
              "
            >
              Need a Technology Solution?
            </h2>

            <p
              className="
                mt-2
                text-sm
                text-gray-400
              "
            >
              Tell us about your requirement.
            </p>
          </div>

          {/* =================================================
              CONTACT BUTTON
          ================================================== */}

          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              gap-2
              rounded-md
              border
              border-sira-gold
              bg-sira-gold
              px-5
              py-3
              text-sm
              font-bold
              text-sira-black
              transition-all
              duration-200
              hover:bg-transparent
              hover:text-sira-gold
              focus:outline-none
              focus:ring-2
              focus:ring-sira-gold/30
            "
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
