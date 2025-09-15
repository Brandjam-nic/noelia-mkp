import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import MakeupSection from "@/components/makeupSection";
import ClientFavourites from "@/components/clientFavourites";
import { InstagramSection } from "@/components/instagramSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MakeupSection />
        <ClientFavourites />
        <InstagramSection />
      </main>
      <Footer />
    </>
  );
}
