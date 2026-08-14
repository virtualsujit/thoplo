import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Last updated: {lastUpdated}
          </p>

          <div
            className="mt-12 space-y-10
              [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h2]:mb-3
              [&_p]:text-slate-600 [&_p]:leading-relaxed
              [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5
              [&_li]:text-slate-600 [&_li]:leading-relaxed
              [&_a]:text-primary-600 [&_a]:underline [&_a]:underline-offset-2
              hover:[&_a]:text-primary-700"
          >
            {children}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
