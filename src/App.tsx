import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ZenithAudit from './pages/portfolio/ZenithAudit';
import AppDesignFramework from './pages/portfolio/AppDesignFramework';
import WorkflowIntelligence from './pages/portfolio/WorkflowIntelligence';
import About from './pages/About';
import AppDesignStudio from './pages/AppDesignStudio';
import Contact from './pages/Contact';
import Insights from './pages/Insights';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/zenith-audit" element={<ZenithAudit />} />
        <Route path="/portfolio/app-design-framework" element={<AppDesignFramework />} />
        <Route path="/portfolio/workflow-intelligence" element={<WorkflowIntelligence />} />
        <Route path="/about" element={<About />} />
        <Route path="/app-design-studio" element={<AppDesignStudio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
