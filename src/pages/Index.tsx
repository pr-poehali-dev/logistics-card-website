import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContactsSection from "@/components/ContactsSection";

const WAREHOUSE_IMG = "https://cdn.poehali.dev/projects/620194fc-83eb-43d5-ad55-cd52eaee8476/files/45165bcd-dece-4c3e-a34e-140f3f4838fa.jpg";
const PORT_IMG = "https://cdn.poehali.dev/projects/620194fc-83eb-43d5-ad55-cd52eaee8476/files/707eaea1-020e-4682-8076-12a81d000260.jpg";
const HERO_IMG = "https://cdn.poehali.dev/projects/620194fc-83eb-43d5-ad55-cd52eaee8476/files/b55d66a0-c048-4c98-9a8f-c18559652775.jpg";

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

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-ibm">
      <Header />

      <HeroSection />

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

      <ContactsSection />

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
