import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { useEffect } from "react";
import Background from "./components/Background.jsx";
import Navbar from "./components/Navbar.jsx";
import VideoBackground from "./components/VideoBackground.jsx";
import Footer from "./components/Footer.jsx";
import PageShell from "./components/PageShell.jsx";
import LeavesOverlay from "./components/LeavesOverlay.jsx";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import WorkGalleryPage from "./pages/WorkGalleryPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageShell>
              <Home />
            </PageShell>
          }
        />
        <Route
          path="/about"
          element={
            <PageShell>
              <AboutPage />
            </PageShell>
          }
        />
        <Route
          path="/services"
          element={
            <PageShell>
              <ServicesPage />
            </PageShell>
          }
        />
        <Route
          path="/work-gallery"
          element={
            <PageShell>
              <WorkGalleryPage />
            </PageShell>
          }
        />
        <Route
          path="/portfolio"
          element={
            <PageShell>
              <PortfolioPage />
            </PageShell>
          }
        />
        <Route
          path="/contact"
          element={
            <PageShell>
              <ContactPage />
            </PageShell>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <div className="relative isolate min-h-screen bg-ink text-white">
          <VideoBackground />
          <Background />
          <LeavesOverlay />
          <Navbar />
          <main id="main" className="relative z-10">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </BrowserRouter>
  );
}
