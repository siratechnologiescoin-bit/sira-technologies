
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Scroll to top whenever the route changes */}
      <ScrollToTop />

      <Header />

      <main>
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
};

export default App;
