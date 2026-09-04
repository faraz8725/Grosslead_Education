import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import FeatureCard from "../components/FeatureCard";
import ExploreSection from "../components/ExploreSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import WhatYouCanDo from "../components/WhatYouCanDo";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <HowItWorks />

        <WhatYouCanDo />

        <ExploreSection />

        <CTASection />
      </main>

      <Footer />
    </>
  );
}

export default Home;