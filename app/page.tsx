"use client"

import Navigation from "@/components/navigation/Navigation";
import HeroSection from "@/components/hero/HeroSection";
import MissionSection from "@/components/missions/MissionSection";
import RegistrationSection from "@/components/registrations/RegistrationSection";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import SurveySection from "@/components/surveys/SurveySection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <HeroSection />

        {/* Mission & Vision */}
        <MissionSection />

        {/* Registration Forms */}
        <RegistrationSection />

        {/* Testimonials */}
        <TestimonialSection />

        {/* Survey */}
        <SurveySection />

        {/* Footer */}
        <Footer />
      </div>
  );
}
