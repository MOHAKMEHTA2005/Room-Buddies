import { useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VoiceInput from "@/components/VoiceInput";
import CompatibilityQuiz from "@/components/CompatibilityQuiz";
import RoommateMatching from "@/components/RoommateMatching";
import HostelDiscovery from "@/components/HostelDiscovery";
import Dashboard from "@/components/Dashboard";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("hero");

  const renderSection = () => {
    switch (currentSection) {
      case "hero":
        return (
          <div>
            <Hero />
            <Features />
          </div>
        );
      case "dashboard":
        return <Dashboard />;
      case "voice":
        return <VoiceInput />;
      case "quiz":
        return <CompatibilityQuiz />;
      case "matching":
        return <RoommateMatching />;
      case "hostels":
        return <HostelDiscovery />;
      default:
        return (
          <div>
            <Hero />
            <Features />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={setCurrentSection} />
      <main className="pt-16 pb-20 md:pb-0">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
