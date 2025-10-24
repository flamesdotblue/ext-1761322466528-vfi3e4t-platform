import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f3eee4]/60 via-[#f3eee4]/30 to-[#f3eee4]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950">
            The Iron Man Initiative
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-zinc-700">
            A sleek look at engineering mythos: powered exoskeletons, arc energy, and the pursuit of human augmentation through design. Explore the ideas that inspired the legend.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#about" className="inline-flex items-center justify-center rounded-full bg-black text-amber-300 px-6 py-3 text-sm font-semibold shadow-lg shadow-black/10 hover:bg-zinc-900 transition-colors">
              Learn more
            </a>
            <a href="#tech" className="inline-flex items-center justify-center rounded-full border border-zinc-900/20 bg-white/70 backdrop-blur px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-white transition-colors">
              Core tech
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
