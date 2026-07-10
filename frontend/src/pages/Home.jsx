import { PageTransition } from '../components/layout/PageTransition';
import HeroSection from '../components/sections/HeroSection';
import StatsBar from '../components/sections/StatsBar';
import WhySection from '../components/sections/WhySection';
import ProgrammeOverview from '../components/sections/ProgrammeOverview';
import CoursesGridTeaser from '../components/sections/CoursesGridTeaser';
import LabShowcaseSection from '../components/sections/LabShowcaseSection';
import SchoolBenefitsSection from '../components/sections/SchoolBenefitsSection';
import WhatIfSection from '../components/sections/WhatIfSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <PageTransition>
      <div className="bg-bg min-h-screen">
        <HeroSection />
        <StatsBar />
        <WhySection />
        <ProgrammeOverview />
        <CoursesGridTeaser />
        <LabShowcaseSection />
        <SchoolBenefitsSection />
        <WhatIfSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </PageTransition>
  );
};

export default Home;
