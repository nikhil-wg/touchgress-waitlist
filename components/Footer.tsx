export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-silver px-5 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Brand */}
      <div className="flex items-center gap-2 font-display text-sm font-semibold text-ink">
        <span className="w-6 h-6 rounded-md bg-dark grid place-items-center text-[11px] text-white font-bold">
          T
        </span>
        Touchgress
      </div>

      {/* Links */}
      <ul className="flex gap-6 list-none">
        {["Privacy", "Terms", "Instagram", "Twitter"].map((link) => (
          <li key={link}>
            <a
              href="#"
              className="font-serif text-sm text-steel no-underline hover:text-ink transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Copyright */}
      <span className="font-code text-[11px] text-ash">
        © {new Date().getFullYear()} Touchgress. All rights reserved.
      </span>
    </footer>
  );
}
