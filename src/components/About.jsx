import { Shield, Cpu, Zap, Cog } from 'lucide-react';

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-black/5 bg-white/70 backdrop-blur p-6 hover:shadow-xl hover:shadow-amber-200/30 transition-all">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-black text-amber-300 inline-flex items-center justify-center">
          <Icon size={18} />
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-700">{desc}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-amber-700/80 font-semibold">Concepts</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              Anatomy of a Powered Suit
            </h2>
            <p className="mt-4 text-zinc-700 leading-relaxed">
              Iron Man symbolizes the crossroads of ingenuity and responsibility. Beyond the fiction lies a blueprint for modular engineering: lightweight alloys, responsive control systems, and distributed power.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <Feature icon={Cpu} title="Neural Interface" desc="High-fidelity sensors and HUDs translating intent to motion with millisecond latency." />
              <Feature icon={Zap} title="Arc Energy" desc="A compact power core concept inspiring efficient, high-density energy systems." />
              <Feature icon={Shield} title="Adaptive Armor" desc="Composite materials balancing protection, mobility, and thermal regulation." />
              <Feature icon={Cog} title="Modularity" desc="Rapid swap subsystems for flight, rescue, and hazardous environments." />
            </div>
          </div>
          <div id="tech" className="rounded-3xl border border-black/5 bg-white/60 backdrop-blur p-8">
            <h3 className="text-xl font-bold tracking-tight">Design Notes</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />Aerodynamics and thrust vectoring are tuned together; stability matters more than raw speed.</li>
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />Edge computing on-suit minimizes reliance on external networks in critical missions.</li>
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />Haptics provide force feedback, guiding pilot posture and load distribution.</li>
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />Redundant failsafes isolate malfunctioning modules without shutting down the entire suit.</li>
            </ul>
            <div id="legacy" className="mt-8 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 p-6 text-amber-950">
              <h4 className="font-semibold">Legacy</h4>
              <p className="mt-2 text-sm">
                The Iron Man narrative inspires ethical engineering: innovate boldly, deploy responsibly, and design with people in mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
