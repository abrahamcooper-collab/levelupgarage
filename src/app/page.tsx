import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Estimator from "@/components/Estimator";
import Transformation from "@/components/Transformation";
import Process from "@/components/Process";
import Guarantees from "@/components/Guarantees";
import RecentWork from "@/components/RecentWork";
import ServiceAreas from "@/components/ServiceAreas";
import Faq from "@/components/Faq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Estimator />
      <Transformation />
      <Process />
      <Guarantees />
      <RecentWork />
      <ServiceAreas />
      <Faq />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </main>
  );
}
