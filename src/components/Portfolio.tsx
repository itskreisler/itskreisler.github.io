import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Portfolio() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
            <div className="min-h-screen bg-background text-foreground">
                <Header />
                <main>
                    <Hero />
                    <Skills />
                    <Projects />
                    <Stats />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
