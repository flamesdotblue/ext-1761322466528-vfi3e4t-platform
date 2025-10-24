export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 gap-6 items-center">
        <p className="text-sm text-zinc-700">
          © {new Date().getFullYear()} Stark Archives — A design-forward tribute to engineering and imagination.
        </p>
        <div className="flex sm:justify-end gap-4 text-sm">
          <a className="hover:text-black/80" href="#home">Home</a>
          <a className="hover:text-black/80" href="#about">About</a>
          <a className="hover:text-black/80" href="#tech">Technology</a>
        </div>
      </div>
    </footer>
  );
}
