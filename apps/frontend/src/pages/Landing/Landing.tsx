import * as React from "react";
import { PublicHeader } from "../../Components/layout/PublicHeader";
import { SmoothScrollProvider } from "../../Components/layout/SmoothScrollProvider";
import { HeroSection } from "../../Components/common/LandingPageComp/HeroSection";
import { StatsSection } from "../../Components/common/LandingPageComp/StatsSection";
import { ComparisonSection } from "../../Components/common/LandingPageComp/ComparisonSection";
import { FeaturesSection } from "../../Components/common/LandingPageComp/FeaturesSection";
import { CTASection } from "../../Components/common/LandingPageComp/CTASection";
import { LandingFooter } from "../../Components/common/LandingPageComp/LandingFooter";

const Landing: React.FC = () => {
  return (
    <SmoothScrollProvider>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
        <PublicHeader />

        <main className="flex-1 flex flex-col items-center">
          <HeroSection />
          <StatsSection />
          <ComparisonSection />
          <FeaturesSection />
          <CTASection />
        </main>

        <LandingFooter />
      </div>
    </SmoothScrollProvider>
  );
};

export default Landing;
