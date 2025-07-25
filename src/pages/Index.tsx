import { useState } from "react";
import Hero from "@/components/Hero";
import VoiceInput from "@/components/VoiceInput";
import RoommateMatching from "@/components/RoommateMatching";
import HostelDiscovery from "@/components/HostelDiscovery";
import Dashboard from "@/components/Dashboard";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("hero");

  const renderSection = () => {
    switch (currentSection) {
      case "hero":
        return <Hero />;
      case "dashboard":
        return <Dashboard />;
      case "voice":
        return <VoiceInput />;
      case "matching":
        return <RoommateMatching />;
      case "hostels":
        return <HostelDiscovery />;
      default:
        return <Hero />;
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
