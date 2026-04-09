export default function CTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto rounded-[2rem] bg-gradient-to-br from-surface-container-high to-surface p-12 md:p-20 text-center relative overflow-hidden border border-outline-variant/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/10 blur-[100px] rounded-full"></div>
        <h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-8 relative z-10">Ready to Sync Your Business?</h2>
        <p className="text-on-surface-variant text-lg mb-12 relative z-10 max-w-xl mx-auto">
          Join hundreds of modern enterprises leveraging Synckraft's cognitive architecture to scale operations.
        </p>
        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          <button className="px-10 py-4 bg-primary text-on-primary rounded-xl font-bold hover:scale-105 transition-transform">
            Schedule Demo
          </button>
          <button className="px-10 py-4 bg-surface-container-highest text-on-surface rounded-xl font-bold border border-outline-variant/20 hover:bg-surface-bright transition-all">
            Talk to Sales
          </button>
        </div>
      </div>
    </section>
  );
}
