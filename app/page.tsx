import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code2, Megaphone, ShoppingBag, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "We build robust, scalable software solutions tailored to your business needs. From web applications to enterprise systems, our expert team delivers quality code that drives results.",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description:
      "Strategic marketing solutions that amplify your brand presence. We create compelling campaigns that connect with your audience and drive meaningful engagement across all channels.",
  },
  {
    icon: ShoppingBag,
    title: "Selling Services",
    description:
      "Optimize your sales process with our proven methodologies. We help you build effective sales strategies, train your team, and implement systems that convert leads into loyal customers.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              Welcome to{" "}
              <span className="text-primary-600">Thoplo</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
              We empower businesses to reach their full potential through
              innovative software development, strategic marketing, and expert
              selling services. Partner with us to transform your vision into
              reality.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to help your business thrive in
              today&apos;s competitive landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                  <service.icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section
        id="careers"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Join Our Team
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We&apos;re always looking for talented individuals who are passionate
              about making a difference. Be part of a team that values
              innovation, collaboration, and growth.
            </p>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-slate-700 text-lg leading-relaxed">
                If you are interested in joining us, send your CV and cover
                letter to{" "}
                <a
                  href="mailto:hire@thoplo.com"
                  className="text-primary-600 font-semibold hover:text-primary-700 underline underline-offset-2 transition-colors"
                >
                  hire@thoplo.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
