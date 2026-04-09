export default function Footer() {
  return (
    <footer className="w-full bg-[#0b1326] border-t border-[#45464d]/20 py-12 px-8">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-lg font-bold text-[#dae2fd] font-headline tracking-tighter">SYNCKRAFT</div>
          <p className="font-inter text-xs uppercase tracking-widest text-[#dae2fd]/40">© 2024 Synckraft AI Business Systems. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="font-inter text-xs uppercase tracking-widest text-[#dae2fd]/40 hover:text-[#89ceff] transition-colors" href="#">WhatsApp</a>
          <a className="font-inter text-xs uppercase tracking-widest text-[#dae2fd]/40 hover:text-[#89ceff] transition-colors" href="#">LinkedIn</a>
          <a className="font-inter text-xs uppercase tracking-widest text-[#dae2fd]/40 hover:text-[#89ceff] transition-colors" href="#">Instagram</a>
          <a className="font-inter text-xs uppercase tracking-widest text-[#dae2fd]/40 hover:text-[#89ceff] transition-colors" href="#">Contact Info</a>
          <a className="font-inter text-xs uppercase tracking-widest text-[#dae2fd]/40 hover:text-[#89ceff] transition-colors" href="#">Email</a>
        </div>
      </div>
    </footer>
  );
}
