import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function ContactsSection() {
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
  );
}
