import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import TestimonialsSection from "@/components/testimonials-section";
import CtaSection from "@/components/cta-section";
import CertificateSection from "@/components/certificate-section";
import MusicPlayer from "@/components/music-player";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <FeaturesSection />
      <CertificateSection />
      <TestimonialsSection />
      <CtaSection />
      <MusicPlayer />
    </div>
  );
}
