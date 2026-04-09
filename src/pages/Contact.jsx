import React from 'react';

export default function Contact() {
  return (
    <main className="pt-32 min-h-screen">
      <section className="px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-headline font-extrabold tracking-tighter text-on-surface mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-10">
          Ready to scale your enterprise? Our architects are waiting.
        </p>
        <button className="px-10 py-5 bg-gradient-to-br from-[#89ceff] to-[#0089c3] text-[#00344d] rounded-xl font-bold text-xl hover:shadow-[0_0_20px_rgba(137,206,255,0.4)] transition-all">
          Schedule Consultation
        </button>
      </section>
    </main>
  );
}
