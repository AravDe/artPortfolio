export default function Footer() {
  return (
    <footer className="py-10 bg-warm-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-offwhite/40 text-sm font-light tracking-wide">
          &copy; {new Date().getFullYear()} Arav De
        </p>
        <p className="text-offwhite/30 text-xs font-light tracking-wide">
          Handcrafted with clay &amp; code
        </p>
      </div>
    </footer>
  );
}
