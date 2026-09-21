import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-sira-light">

      <div className="text-center">

        <div className="text-8xl font-black text-sira-gold">
          404
        </div>

        <h1 className="mt-4 text-3xl font-black">
          Page Not Found
        </h1>

        <p className="mt-3 text-gray-500">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="sira-btn-primary mt-7"
        >
          Back to Home
        </Link>

      </div>

    </section>
  );
};

export default NotFound;