
import { Routes, Route } from "react-router-dom";

// Main Pages
import Home from "../pages/Home";
import Services from "../pages/Services";
import MRHealth from "../pages/MRHealth";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import Quote from "../pages/Quote";
import NotFound from "../pages/NotFound";

// Service Pages
import CCTV from "../pages/service-details/CCTV";
import Networking from "../pages/service-details/Networking";
import Linux from "../pages/service-details/Linux";
import Windows from "../pages/service-details/Windows";
import AWS from "../pages/service-details/AWS";
import ITSupport from "../pages/service-details/ITSupport";
import LedWall from "../pages/service-details/LedWall";

const AppRoutes = () => {
  return (
    <Routes>
      {/* =====================================================
          HOME
      ====================================================== */}
      <Route path="/" element={<Home />} />

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <Route path="/services" element={<Services />} />
      <Route path="/services/linux" element={<Linux />} />
      <Route path="/services/windows" element={<Windows />} />
      <Route
        path="/services/networking"
        element={<Networking />}
      />
      <Route path="/services/cctv" element={<CCTV />} />
      <Route path="/services/aws" element={<AWS />} />
      <Route
        path="/services/it-support"
        element={<ITSupport />}
      />
      <Route
        path="/services/led-wall"
        element={<LedWall />}
      />

      {/* =====================================================
          PRODUCTS
      ====================================================== */}
      <Route path="/products" element={<Products />} />
      <Route
        path="/product/mrhealth"
        element={<MRHealth />}
      />

      {/* =====================================================
          ABOUT
      ====================================================== */}
      <Route path="/about" element={<About />} />

      {/* =====================================================
          CONTACT
      ====================================================== */}
      <Route path="/contact" element={<Contact />} />

      {/* =====================================================
          QUOTE
      ====================================================== */}
      <Route path="/quote" element={<Quote />} />

      {/* =====================================================
          404
      ====================================================== */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

// import { Routes, Route } from "react-router-dom";

// // Main Pages
// import Home from "../pages/Home";
// import Services from "../pages/Services";
// import MRHealth from "../pages/MRHealth";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Products from "../pages/Products";
// import Quote from "../pages/Quote";
// import NotFound from "../pages/NotFound";

// // Service Pages
// import CCTV from "../pages/service-details/CCTV";
// import Networking from "../pages/service-details/Networking";
// import Linux from "../pages/service-details/Linux";
// import Windows from "../pages/service-details/Windows";
// import AWS from "../pages/service-details/AWS";
// import ITSupport from "../pages/service-details/ITSupport";
// import LedWall from "../pages/service-details/LedWall";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* Home */}
//       <Route path="/" element={<Home />} />

//       {/* Services */}
//       <Route path="/services" element={<Services />} />
//       <Route path="/services/linux" element={<Linux />} />
//       <Route path="/services/windows" element={<Windows />} />
//       <Route path="/services/networking" element={<Networking />} />
//       <Route path="/services/cctv" element={<CCTV />} />
//       <Route path="/services/aws" element={<AWS />} />
//       <Route path="/services/it-support" element={<ITSupport />} />
//       <Route path="/services/led-wall" element={<LedWall />} />

//       {/* Products */}
//       <Route path="/products" element={<Products />} />
//       <Route path="/product/mrhealth" element={<MRHealth />} />

//       {/* About */}
//       <Route path="/about" element={<About />} />

//       {/* Contact */}
//       <Route path="/contact" element={<Contact />} />

//       {/* Quote */}
//       <Route path="/quote" element={<Quote />} />

//       {/* 404 */}
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default AppRoutes;