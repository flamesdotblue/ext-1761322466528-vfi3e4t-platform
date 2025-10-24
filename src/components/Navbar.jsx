import { Star, Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight text-zinc-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-amber-400">
            <Star size={16} />
          </span>
          <span className="text-lg">Stark Archives</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-black/80 transition-colors">About</a>
          <a href="#tech" className="hover:text-black/80 transition-colors">Technology</a>
          <a href="#legacy" className="hover:text-black/80 transition-colors">Legacy</a>
        </nav>
        <a href="#about" className="inline-flex items-center gap-2 rounded-full bg-black text-amber-300 px-4 py-2 text-sm font-medium shadow-sm hover:bg-zinc-900 transition-colors">
          Explore
          <Rocket size={16} />
        </a>
      </div>
    </header>
  );
}
