import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Benefits />
                <Process />
                <Gallery />
                <Pricing />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
