import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './Modules/Navigation';
import Hero from './Modules/Hero';
import Services from './Modules/Services';
import Testimonials from './Modules/Testimonials';
import Footer from './Modules/Footer';
import Pricing from './Modules/Pricing';
import Contacts from './Modules/Contacts';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function App() {
  const location = useLocation();

  return (
    <div className="bg-off-white">
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Home page route */}
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
                transition={{ duration: 0.5 }}
              >
                <Hero />
                <Services />
                <Testimonials />
                <Footer />
              </motion.div>
            }
          />

          {/* Separate routes for Pricing and Contacts */}
          <Route
            path="/pricing"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
                transition={{ duration: 0.5 }}
              >
                <Pricing />
              </motion.div>
            }
          />
          <Route
            path="/services"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
                transition={{ duration: 0.5 }}
              >
                <Services />
              </motion.div>
            }
          />
          <Route
            path="/contacts"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
                transition={{ duration: 0.5 }}
              >
                <Contacts />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
