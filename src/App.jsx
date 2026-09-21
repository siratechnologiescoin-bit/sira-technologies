import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";


const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
};

export default App;