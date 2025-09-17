import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import AboutSection from "@/components/aboutSection";
import MakeupSection from "@/components/makeupSection";
import VideoSection from "@/components/videoSection";
import ClientFavourites from "@/components/clientFavourites";
import { InstagramSection } from "@/components/instagramSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="services">
          <MakeupSection />
        </div>
        <VideoSection />
        <div id="gallery">
          <ClientFavourites />
        </div>
        <InstagramSection />
      </main>
      <Footer />
    </>
  );
}
