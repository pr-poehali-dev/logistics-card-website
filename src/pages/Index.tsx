import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/620194fc-83eb-43d5-ad55-cd52eaee8476/files/b55d66a0-c048-4c98-9a8f-c18559652775.jpg";
const WAREHOUSE_IMG = "https://cdn.poehali.dev/projects/620194fc-83eb-43d5-ad55-cd52eaee8476/files/45165bcd-dece-4c3e-a34e-140f3f4838fa.jpg";
const PORT_IMG = "https://cdn.poehali.dev/projects/620194fc-83eb-43d5-ad55-cd52eaee8476/files/707eaea1-020e-4682-8076-12a81d000260.jpg";

const navLinks = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "О компании", href: "#about" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Контакты", href: "#contacts" },
];

const services = [
  {
    icon: "Truck",
    title: "Автомобильные перевозки",
    desc: "Доставка грузов по России и СНГ. Собственный парк техники — от малотоннажных фургонов до тягачей с полуприцепами.",
  },
  {
    icon: "Ship",
    title: "Морские перевозки",
    desc: "Международная доставка морскими контейнерами. Работаем с крупнейшими портами России, Китая и Европы.",
  },
  {
    icon: "Plane",
    title: "Авиадоставка",
    desc: "Срочная доставка ценных и срочных грузов авиатранспортом. Гарантия сроков, полное страхование груза.",
  },
  {
    icon: "Warehouse",
    title: "Складская логистика",
    desc: "Ответственное хранение на собственных складах площадью 12 000 м². Стеллажное и напольное хранение, обработка товаров.",
  },
  {
    icon: "FileCheck",
    title: "Таможенное оформление",
    desc: "Полный комплекс таможенных услуг. Сертификация, декларирование, расчёт пошлин и сборов.",
  },
  {
    icon: "BarChart3",
    title: "Управление цепочками",
    desc: "Проектирование и оптимизация логистических цепочек. Снижение издержек и повышение скорости поставок.",
  },
];

const portfolio = [
  {
    tag: "Промышленность",
    title: "Поставка оборудования для нефтяной отрасли",
    desc: "Организовали мультимодальную доставку 480 тонн промышленного оборудования из Германии в Западную Сибирь. Срок — 18 дней.",
    img: PORT_IMG,
  },
  {
    tag: "Ритейл",
    title: "Регулярные поставки товаров для сети магазинов",
    desc: "Выстроили систему регулярных поставок для федеральной сети из 320 магазинов. Снизили логистические расходы клиента на 23%.",
    img: WAREHOUSE_IMG,
  },
  {
    tag: "Строительство",
    title: "Доставка стройматериалов на крупный объект",
    desc: "Обеспечили бесперебойную поставку строительных материалов для жилого комплекса на 1 200 квартир в течение 14 месяцев.",
    img: HERO_IMG,
  },
];

const stats = [
  { value: "18 лет", label: "на рынке логистики" },
  { value: "4 200+", label: "клиентов по всей России" },
  { value: "850 000", label: "тонн грузов ежегодно" },
  { value: "97%", label: "грузов доставлено вовремя" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    cargo: "",
    from: "",
    to: "",
    weight: "",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background font-ibm">
      {/* NAVIGATION */}
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

      {/* HERO */}
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

      {/* SERVICES */}
      <section id="services" className="py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-ibm text-xs text-gold uppercase tracking-widest mb-3">Что мы делаем</p>
            <h2 className="font-oswald text-4xl md:text-5xl text-navy uppercase section-title">
              Наши услуги
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="service-card bg-white p-8 transition-all duration-300 cursor-default border-b-2 border-transparent hover:border-gold"
              >
                <div className="w-12 h-12 bg-navy flex items-center justify-center mb-5">
                  <Icon name={s.icon} size={22} className="text-gold" />
                </div>
                <h3 className="font-oswald text-xl text-navy uppercase mb-3">{s.title}</h3>
                <p className="font-ibm text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-ibm text-xs text-gold uppercase tracking-widest mb-3">О компании</p>
              <h2 className="font-oswald text-4xl md:text-5xl text-white uppercase mb-6 leading-tight">
                18 лет в логистике — <span className="text-gold">это результат</span>
              </h2>
              <p className="font-ibm text-white/70 leading-relaxed mb-6">
                ТрансЛогист — один из ведущих логистических операторов России. С 2006 года мы строим надёжные цепочки поставок для промышленных предприятий, торговых сетей и импортёров.
              </p>
              <p className="font-ibm text-white/70 leading-relaxed mb-10">
                Собственная инфраструктура: парк из 120 автомобилей, складские комплексы в Москве, Санкт-Петербурге и Новосибирске, партнёрства с ведущими авиаперевозчиками и морскими линиями.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "MapPin", text: "Присутствие в 48 регионах России" },
                  { icon: "Clock", text: "Работаем 24/7, без праздников" },
                  { icon: "Shield", text: "Страхование каждого груза" },
                  { icon: "Users", text: "Персональный менеджер" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={item.icon} size={14} className="text-gold" />
                    </div>
                    <p className="font-ibm text-sm text-white/70">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={WAREHOUSE_IMG}
                alt="Склад ТрансЛогист"
                className="w-full h-80 lg:h-[480px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold p-8 hidden lg:block">
                <div className="font-oswald text-5xl text-navy font-bold">№1</div>
                <div className="font-ibm text-xs text-navy/70 uppercase tracking-wide mt-1">по надёжности<br />в регионе</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-ibm text-xs text-gold uppercase tracking-widest mb-3">Наш опыт</p>
            <h2 className="font-oswald text-4xl md:text-5xl text-navy uppercase section-title">
              Портфолио проектов
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((p, i) => (
              <div key={i} className="group cursor-default overflow-hidden bg-white border border-border">
                <div className="overflow-hidden h-48">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-navy text-gold font-ibm text-xs uppercase tracking-widest px-3 py-1 mb-4">
                    {p.tag}
                  </span>
                  <h3 className="font-oswald text-lg text-navy uppercase mb-3 leading-tight">{p.title}</h3>
                  <p className="font-ibm text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS / ORDER FORM */}
      <section id="contacts" className="py-24 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: info */}
            <div>
              <p className="font-ibm text-xs text-gold uppercase tracking-widest mb-3">Свяжитесь с нами</p>
              <h2 className="font-oswald text-4xl md:text-5xl text-white uppercase mb-6 leading-tight">
                Заказать <span className="text-gold">доставку</span>
              </h2>
              <p className="font-ibm text-white/60 mb-10 leading-relaxed">
                Заполните форму — наш менеджер перезвонит в течение 30 минут и подготовит коммерческое предложение.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (800) 555-12-34" },
                  { icon: "Mail", label: "Email", value: "info@translogist.ru" },
                  { icon: "MapPin", label: "Адрес", value: "Москва, ул. Складская, 15, стр. 2" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт 8:00–20:00, Сб 9:00–17:00" },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-ibm text-xs text-white/40 uppercase tracking-wide mb-0.5">{c.label}</p>
                      <p className="font-ibm text-white/85 text-sm">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-white/5 border border-white/10 p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-16 h-16 bg-gold/20 border border-gold/40 flex items-center justify-center mb-6">
                    <Icon name="CheckCircle" size={32} className="text-gold" />
                  </div>
                  <h3 className="font-oswald text-2xl text-white uppercase mb-3">Заявка принята!</h3>
                  <p className="font-ibm text-white/60 text-sm max-w-xs">
                    Наш менеджер свяжется с вами в течение 30 минут в рабочее время.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-2 border border-gold/40 text-gold font-ibm text-sm uppercase tracking-wide hover:bg-gold/10 transition-colors"
                  >
                    Отправить ещё заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-ibm text-xs text-white/50 uppercase tracking-wide mb-1.5">
                        Имя *
                      </label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 text-white font-ibm text-sm px-4 py-2.5 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-white/20"
                        placeholder="Иван Петров"
                      />
                    </div>
                    <div>
                      <label className="block font-ibm text-xs text-white/50 uppercase tracking-wide mb-1.5">
                        Компания
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 text-white font-ibm text-sm px-4 py-2.5 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-white/20"
                        placeholder="ООО «Компания»"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-ibm text-xs text-white/50 uppercase tracking-wide mb-1.5">
                        Телефон *
                      </label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 text-white font-ibm text-sm px-4 py-2.5 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-white/20"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block font-ibm text-xs text-white/50 uppercase tracking-wide mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 text-white font-ibm text-sm px-4 py-2.5 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-white/20"
                        placeholder="mail@company.ru"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-ibm text-xs text-white/50 uppercase tracking-wide mb-1.5">
                      Что везём *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.cargo}
                      onChange={(e) => setForm({ ...form, cargo: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 text-white font-ibm text-sm px-4 py-2.5 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-white/20"
                      placeholder="Тип груза, описание"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-ibm text-xs text-white/50 uppercase tracking-wide mb-1.5">
                        Откуда
                      </label>
                      <input
                        type="text"
                        value={form.from}
                        onChange={(e) => setForm({ ...form, from: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 text-white font-ibm text-sm px-4 py-2.5 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-white/20"
                        placeholder="Город"
                      />
                    </div>
                    <div>
                      <label className="block font-ibm text-xs text-white/50 uppercase tracking-wide mb-1.5">
                        Куда
                      </label>
                      <input
                        type="text"
                        value={form.to}
                        onChange={(e) => setForm({ ...form, to: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 text-white font-ibm text-sm px-4 py-2.5 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-white/20"
                        placeholder="Город"
                      />
                    </div>
                    <div>
                      <label className="block font-ibm text-xs text-white/50 uppercase tracking-wide mb-1.5">
                        Вес (кг)
                      </label>
                      <input
                        type="text"
                        value={form.weight}
                        onChange={(e) => setForm({ ...form, weight: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 text-white font-ibm text-sm px-4 py-2.5 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-white/20"
                        placeholder="1 000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-ibm text-xs text-white/50 uppercase tracking-wide mb-1.5">
                      Комментарий
                    </label>
                    <textarea
                      rows={3}
                      value={form.comment}
                      onChange={(e) => setForm({ ...form, comment: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 text-white font-ibm text-sm px-4 py-2.5 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-white/20 resize-none"
                      placeholder="Дополнительная информация о грузе..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gold text-navy font-oswald font-semibold text-base tracking-widest uppercase hover:bg-yellow-400 transition-colors mt-2"
                  >
                    Отправить заявку
                  </button>
                  <p className="font-ibm text-xs text-white/30 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gold flex items-center justify-center">
              <Icon name="Truck" size={15} className="text-navy" />
            </div>
            <span className="font-oswald text-white text-lg tracking-widest uppercase">
              Транс<span className="text-gold">Логист</span>
            </span>
          </div>
          <p className="font-ibm text-white/30 text-xs">
            © 2006–2024 ТрансЛогист. Все права защищены.
          </p>
          <div className="flex gap-6">
            {["Политика конфиденциальности", "Договор оферты"].map((t) => (
              <a key={t} href="#" className="font-ibm text-xs text-white/30 hover:text-gold transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}