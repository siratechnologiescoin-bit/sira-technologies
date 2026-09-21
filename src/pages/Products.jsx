import AIProductSearch from "../products/AIProductSearch";
import { products } from "../data/products";

const Products = () => {
  return (
    <>
      <section className="bg-sira-black py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="sira-label text-sira-gold">
            SIRA Technologies
          </span>

          <h1 className="mt-2 text-4xl font-black text-white sm:text-5xl">
            Products & Equipment
          </h1>

          <p className="mt-5 max-w-2xl text-gray-400">
            Explore our complete technology products and equipment catalog.
          </p>
        </div>
      </section>

      <AIProductSearch products={products} />
    </>
  );
};

export default Products;