import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import MessageMe from "@/components/MessageMe";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className=" flex flex-row">
      <div className="flex w-[17%] h-screen text-[#d2e9b3]">
        <Sidebar />
      </div>
      <div className="relative h-screen overflow-y-scroll no-scrollbar w-[83%] scroll-smooth">
        <main className="bg-[#0F172A] text-[#d2e9b3] flex flex-col">
          <AnimatedSection>
            <section className="h-screen snap-start">
              <AboutMe />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section className="h-screen snap-start">
              <Projects />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section className="h-screen snap-start">
              <Skills />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section className="h-screen snap-start">
              <MessageMe />
            </section>
          </AnimatedSection>
        </main>
        <footer className="bg-none">
          <section className="h-auto snap-start">
            <Footer />
          </section>
        </footer>
      </div>
    </div>
  );
}
