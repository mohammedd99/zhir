import { HomeNavbar } from "@/components/home-navbar";
import { HeroSection } from "@/components/hero-section";
import { PeaceSection } from "@/components/peace-section";
import { PrecisionSection } from "@/components/precision-section";
import { TrustedProcessSection } from "@/components/trusted-process-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-dvh font-sans" style={{ backgroundColor: "#FEFEFE" }}>
      <HomeNavbar />
      <HeroSection />
      <TrustedProcessSection />
      <PeaceSection />
      <PrecisionSection />
      <Footer />
    </div>
  );
}
