import React from 'react';

export default function IndustryTemplate({ title, subtitle, description, features }) {
  return (
    <main className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="px-8 max-w-7xl mx-auto mb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/30 text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          {subtitle || "Synckraft Ecosystem"}
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tighter leading-tight mb-6">
          {title}
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed font-body">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-10 py-5 bg-gradient-to-br from-[#89ceff] to-[#0089c3] text-[#00344d] rounded-xl font-bold text-xl hover:shadow-[0_0_20px_rgba(137,206,255,0.4)] transition-all">
            Book a Demo
          </button>
          <button className="px-10 py-5 bg-transparent border border-outline-variant text-on-surface rounded-xl font-bold text-xl hover:bg-surface-container-highest transition-colors">
            Contact Sales
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features?.map((feature, idx) => (
            <div key={idx} className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/10 hover:border-primary/20 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-surface-container-highest flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">{feature.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-8 max-w-screen-2xl mx-auto mb-24 bg-surface-container-highest rounded-[3rem] py-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-6">Designed for Scale and Security</h2>
          <p className="text-lg text-on-surface-variant">Synckraft provides unified operations, data integrity, and deep customizability required to completely run your enterprise through a single cognitive platform.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 max-w-7xl mx-auto mb-32">
        <div className="p-16 rounded-[2rem] bg-surface-container relative overflow-hidden border border-outline-variant/20 shadow-[0_40px_100px_rgba(0,0,0,0.4)] text-center">
          <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-6 relative z-10">Start Your Digital Transformation</h2>
          <p className="text-on-surface-variant mb-10 text-lg relative z-10">Integrate cognitive models into your business process safely and scale globally.</p>
          <button className="px-12 py-4 bg-primary text-on-primary font-bold text-lg rounded-xl shadow-lg shadow-primary/30 active:scale-95 transition-all relative z-10">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
