import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Microstructures from "@/components/sections/Microstructures";
import Products from "@/components/sections/Products";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Microstructures />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
