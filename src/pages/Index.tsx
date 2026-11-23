import { ClosingSection } from "@/components/wavestash/ClosingSection";
import { Header } from "@/components/wavestash/Header";
import { Hero } from "@/components/wavestash/Hero";
import { HowItWorks } from "@/components/wavestash/HowItWorks";
import { LibraryShowcase } from "@/components/wavestash/LibraryShowcase";
import { MoreThanArticles } from "@/components/wavestash/MoreThanArticles";
import { ProPrivacy } from "@/components/wavestash/ProPrivacy";
import { ReadingExperience } from "@/components/wavestash/ReadingExperience";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ReadingExperience />
        <LibraryShowcase />
        <MoreThanArticles />
        <ProPrivacy />
        <ClosingSection />
      </main>
    </div>
  );
};

export default Index;
