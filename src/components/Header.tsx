import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "О компании", href: "#about" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Контакты", href: "#contacts" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-dark shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gold flex items-center justify-center">
            <Icon name="Truck" size={18} className="text-navy" />
          </div>
          <span className="font-oswald text-white text-xl tracking-widest uppercase">
            Транс<span className="text-gold">Логист</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-ibm text-sm text-white/70 hover:text-gold transition-colors duration-200 tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacts"
            className="ml-4 px-5 py-2 bg-gold text-navy font-oswald font-semibold text-sm tracking-widest uppercase hover:bg-yellow-400 transition-colors"
          >
            Заказать
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-dark border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-gold font-ibm text-sm uppercase tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacts"
            className="mt-2 px-5 py-2 bg-gold text-navy font-oswald font-semibold text-sm tracking-widest uppercase text-center"
            onClick={() => setMenuOpen(false)}
          >
            Заказать доставку
          </a>
        </div>
      )}
    </header>
  );
}
