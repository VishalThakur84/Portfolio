import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-dark dark:bg-gradient-dark relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 md:col-span-2 flex justify-center"
        >
          <div className="w-[450px] h-[450px] mx-auto rounded-full bg-gradient-to-br from-primary to-purple-600 p-3 shadow-2xl animate-float">
            <img
              src="/attached_assets/WhatsApp Image 2025-07-24 at 11.52.45 PM_1753381389764.jpeg"
              alt="Vishal Thakur - Ruby on Rails Developer"
              className="w-full h-full rounded-full object-cover object-center border-4 border-white/30 shadow-xl"
              style={{ filter: 'brightness(1.2) contrast(1.2) saturate(1.1)' }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left order-1 md:order-2 md:col-span-3"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Ruby on Rails{" "}
            <span className="text-blue-400">Developer</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Backend Developer with 3+ years of experience building scalable
            production-ready web applications. Currently contributing to{" "}
            <span className="text-blue-400 font-semibold">Bitla Software's</span>{" "}
            cloud-based transport solutions serving{" "}
            <span className="text-blue-400 font-semibold">2500+ bus operators</span>{" "}
            across 5+ countries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              onClick={() => scrollToSection("#projects")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold group shadow-lg"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold shadow-lg"
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
