const HERO_IMG = "https://cdn.poehali.dev/projects/620194fc-83eb-43d5-ad55-cd52eaee8476/files/b55d66a0-c048-4c98-9a8f-c18559652775.jpg";

const stats = [
  { value: "18 лет", label: "на рынке логистики" },
  { value: "4 200+", label: "клиентов по всей России" },
  { value: "850 000", label: "тонн грузов ежегодно" },
  { value: "97%", label: "грузов доставлено вовремя" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${HERO_IMG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 w-full">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="font-ibm text-xs text-gold uppercase tracking-widest">
              Профессиональная логистика с 2006 года
            </span>
          </div>
          <h1 className="font-oswald text-5xl md:text-7xl text-white uppercase leading-tight mb-6">
            Доставим <span className="text-gold">ваш груз</span>
            <br />
            в любую точку
          </h1>
          <p className="font-ibm text-lg text-white/75 mb-10 max-w-xl leading-relaxed">
            Комплексные логистические решения для бизнеса. Авто-, авиа- и морские перевозки, складская логистика и таможенное оформление.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contacts"
              className="px-8 py-4 bg-gold text-navy font-oswald font-semibold text-base tracking-widest uppercase hover:bg-yellow-400 transition-colors"
            >
              Рассчитать стоимость
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-white/40 text-white font-oswald font-medium text-base tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
            >
              Наши услуги
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/15 bg-navy-dark/60 backdrop-blur-sm">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`px-8 py-6 ${i > 0 ? "border-l border-white/15" : ""}`}
            >
              <div className="font-oswald text-3xl text-gold font-semibold">{s.value}</div>
              <div className="font-ibm text-xs text-white/60 mt-1 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
