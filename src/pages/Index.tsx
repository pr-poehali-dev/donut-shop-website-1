import { useState } from "react";
import Icon from "@/components/ui/icon";
import DonutBuilder from "@/components/DonutBuilder";

const DONUTS = [
  {
    id: 1,
    name: "Клубничный рай",
    desc: "Нежный пончик с розовой клубничной глазурью и сахарными звёздочками",
    price: "180 ₽",
    emoji: "🍓",
    bg: "#FDE8F2",
    badge: "Хит продаж",
  },
  {
    id: 2,
    name: "Шоколадный бриз",
    desc: "Воздушное тесто, бельгийский шоколад и хрустящие шоколадные дропсы",
    price: "190 ₽",
    emoji: "🍫",
    bg: "#F5E6D3",
    badge: "Новинка",
  },
  {
    id: 3,
    name: "Голубая лагуна",
    desc: "Ванильный пончик с голубой черничной глазурью и кокосовой стружкой",
    price: "185 ₽",
    emoji: "🫐",
    bg: "#E8F6FF",
    badge: null,
  },
  {
    id: 4,
    name: "Лимонный твист",
    desc: "Сочный лимонный крем внутри, лимонная глазурь и цедра апельсина",
    price: "195 ₽",
    emoji: "🍋",
    bg: "#FFFBE6",
    badge: null,
  },
  {
    id: 5,
    name: "Карамельный сон",
    desc: "Солёная карамель, хрустящий крамбл и зёрна морской соли сверху",
    price: "210 ₽",
    emoji: "🍯",
    bg: "#FFF0DC",
    badge: "Фаворит",
  },
  {
    id: 6,
    name: "Радужный взрыв",
    desc: "Белоснежная глазурь и ароматная посыпка всех цветов радуги",
    price: "175 ₽",
    emoji: "🌈",
    bg: "#F0F8FF",
    badge: null,
  },
];

const TEAM = [
  {
    name: "Анна Соловьёва",
    role: "Шеф-кондитер",
    emoji: "👩‍🍳",
    desc: "12 лет опыта, стажировалась в Париже. Создаёт рецепты с душой.",
    color: "#FDE8F2",
  },
  {
    name: "Михаил Петров",
    role: "Мастер теста",
    emoji: "👨‍🍳",
    desc: "Секреты идеального теста знает наизусть. Каждый пончик — шедевр.",
    color: "#E8F6FF",
  },
  {
    name: "Дарья Козлова",
    role: "Декоратор",
    emoji: "🎨",
    desc: "Превращает каждый пончик в произведение искусства. Художник сладкого мира.",
    color: "#FFFBE6",
  },
  {
    name: "Игорь Смирнов",
    role: "Менеджер качества",
    emoji: "⭐",
    desc: "Следит за тем, чтобы каждый пончик был безупречным с первого укуса.",
    color: "#F0F8FF",
  },
];

export default function Index() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [builderOpen, setBuilderOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)", fontFamily: "'Golos Text', sans-serif" }}>
      {builderOpen && <DonutBuilder onClose={() => setBuilderOpen(false)} />}

      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ backgroundColor: "rgba(255,248,240,0.95)", backdropFilter: "blur(12px)", borderColor: "var(--pink-light)" }}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
            <img
              src="https://cdn.poehali.dev/projects/6e916fd9-ef54-4b6d-8919-7d991408e945/bucket/f584c8f3-0140-414f-8ff2-193982916673.JPG"
              alt="Пончик"
              className="w-10 h-10 object-cover rounded-full"
            />
            <span className="text-2xl" style={{ fontFamily: "'Pacifico', cursive", color: "var(--pink-dark)" }}>
              Пончик
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              ["menu", "Меню"],
              ["about", "О нас"],
              ["gallery", "Галерея"],
              ["team", "Команда"],
              ["contacts", "Контакты"],
            ].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="nav-link">
                {label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("contacts")}
            className="hidden md:block btn-primary text-sm"
            style={{ padding: "0.5rem 1.5rem" }}>
            Заказать
          </button>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "var(--brown)" }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-3" style={{ backgroundColor: "var(--cream)" }}>
            {[
              ["menu", "Меню"],
              ["about", "О нас"],
              ["gallery", "Галерея"],
              ["team", "Команда"],
              ["contacts", "Контакты"],
            ].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="nav-link text-left py-2">
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        style={{ background: "linear-gradient(135deg, var(--pink-light) 0%, var(--cream) 40%, var(--blue-light) 100%)" }}>

        <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-30 animate-blob"
          style={{ backgroundColor: "var(--pink)", filter: "blur(40px)" }} />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-20 animate-blob"
          style={{ backgroundColor: "var(--blue)", filter: "blur(50px)", animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-15 animate-blob"
          style={{ backgroundColor: "var(--yellow)", filter: "blur(60px)", animationDelay: "5s" }} />

        <div className="absolute top-24 right-[8%] text-6xl animate-float select-none">🍩</div>
        <div className="absolute top-36 left-[5%] text-4xl animate-float-delay select-none">🍓</div>
        <div className="absolute bottom-32 left-[12%] text-5xl animate-float select-none" style={{ animationDelay: "0.8s" }}>🍩</div>
        <div className="absolute bottom-24 right-[15%] text-3xl animate-float-delay select-none">⭐</div>
        <div className="absolute top-1/3 right-[3%] text-3xl animate-float select-none" style={{ animationDelay: "2s" }}>✨</div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: "var(--pink)", color: "var(--brown)" }}>
            🎉 Свежие пончики каждый день с 7:00 утра
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
            style={{ fontFamily: "'Pacifico', cursive", color: "var(--brown)" }}>
            Вкус, который
            <br />
            <span style={{ color: "var(--pink-dark)" }}>влюбляет</span>
          </h1>

          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--brown-light)", fontFamily: "'Golos Text', sans-serif" }}>
            Воздушные пончики ручной работы с натуральными ингредиентами.
            Каждый — маленький шедевр, созданный с любовью.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo("menu")} className="btn-primary text-lg"
              style={{ padding: "1rem 2.5rem" }}>
              Смотреть меню 🍩
            </button>
            <button onClick={() => scrollTo("contacts")}
              className="text-lg font-semibold px-10 py-4 rounded-full border-2 transition-all"
              style={{
                borderColor: "var(--pink-dark)", color: "var(--pink-dark)",
                backgroundColor: "transparent", fontFamily: "'Golos Text', sans-serif"
              }}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.backgroundColor = "var(--pink-dark)";
                (e.target as HTMLElement).style.color = "white";
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.backgroundColor = "transparent";
                (e.target as HTMLElement).style.color = "var(--pink-dark)";
              }}>
              Заказать сейчас
            </button>
          </div>

          {/* Builder CTA */}
          <div className="mt-5">
            <button
              onClick={() => setBuilderOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
              style={{
                backgroundColor: "white",
                color: "var(--brown)",
                boxShadow: "0 4px 20px rgba(249,168,201,0.35)",
                fontFamily: "'Golos Text', sans-serif",
                border: "2px solid var(--pink)",
              }}
            >
              <span className="text-xl">🎨</span>
              Собрать свой пончик
              <Icon name="ChevronRight" size={16} />
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              ["50+", "видов пончиков"],
              ["10 лет", "на рынке"],
              ["98%", "довольных гостей"],
            ].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1"
                  style={{ fontFamily: "'Pacifico', cursive", color: "var(--pink-dark)" }}>
                  {num}
                </div>
                <div className="text-xs md:text-sm" style={{ color: "var(--brown-light)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="var(--cream)" />
          </svg>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 px-4" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: "var(--pink-light)", color: "var(--pink-dark)" }}>
              🍩 Наше меню
            </div>
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Pacifico', cursive", color: "var(--brown)" }}>
              Выбери свой пончик
            </h2>
            <p className="text-lg max-w-xl mx-auto mb-6" style={{ color: "var(--brown-light)" }}>
              Каждый пончик — уникальное сочетание вкусов, создано вручную каждое утро
            </p>
            <button
              onClick={() => setBuilderOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105"
              style={{
                backgroundColor: "var(--pink-dark)",
                color: "white",
                fontFamily: "'Golos Text', sans-serif",
                boxShadow: "0 4px 16px rgba(232,97,140,0.3)",
              }}
            >
              <span>🎨</span> Собери свой пончик
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DONUTS.map((donut, i) => (
              <div key={donut.id} className="donut-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="h-48 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: donut.bg }}>
                  <span className="text-8xl animate-float select-none" style={{ animationDelay: `${i * 0.3}s` }}>
                    {donut.emoji}
                  </span>
                  {donut.badge && (
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: "var(--pink-dark)", color: "white" }}>
                      {donut.badge}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-xl mb-2" style={{ fontFamily: "'Pacifico', cursive", color: "var(--brown)" }}>
                    {donut.name}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: "var(--brown-light)" }}>
                    {donut.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold" style={{ color: "var(--pink-dark)" }}>
                      {donut.price}
                    </span>
                    <button
                      className="btn-primary text-sm"
                      style={{ padding: "0.5rem 1.25rem" }}
                      onClick={() => scrollTo("contacts")}>
                      Заказать
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-4" style={{ backgroundColor: "var(--pink-light)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: "var(--pink)", color: "var(--brown)" }}>
                💛 О нас
              </div>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Pacifico', cursive", color: "var(--brown)" }}>
                История одного пончика
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--brown-light)" }}>
                Всё началось в 2014 году, когда Анна Соловьёва испекла первый пончик по рецепту своей бабушки. Друзья были в восторге, и маленькая кухня превратилась в любимую городскую кондитерскую.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--brown-light)" }}>
                Сегодня мы каждое утро встаём в 5 часов, чтобы к открытию наши пончики были свежими, тёплыми и невероятно вкусными. Только натуральные ингредиенты, только ручной труд.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--brown-light)" }}>
                Мы верим: хорошая еда создаёт счастливые воспоминания. Наши пончики — это не просто сладость, это повод порадовать себя и близких.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  ["🌾", "Натуральные ингредиенты"],
                  ["👐", "Ручная работа"],
                  ["🌅", "Свежие каждый день"],
                  ["💝", "Сделано с любовью"],
                ].map(([icon, text]) => (
                  <div key={text} className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ backgroundColor: "white" }}>
                    <span className="text-2xl">{icon}</span>
                    <span className="text-sm font-semibold" style={{ color: "var(--brown)" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{ border: "4px solid var(--pink)" }}>
                <img
                  src="https://cdn.poehali.dev/projects/6e916fd9-ef54-4b6d-8919-7d991408e945/files/b28b54ab-3272-43ce-ab6d-e572eefb2704.jpg"
                  alt="Процесс приготовления"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 rounded-2xl shadow-lg"
                style={{ backgroundColor: "white", border: "2px solid var(--yellow)" }}>
                <div className="text-3xl font-bold" style={{ fontFamily: "'Pacifico', cursive", color: "var(--pink-dark)" }}>10 лет</div>
                <div className="text-xs" style={{ color: "var(--brown-light)" }}>сладкого мастерства</div>
              </div>
              <div className="absolute -top-4 -right-4 text-5xl animate-float">🍩</div>
              <div className="absolute top-1/2 -right-8 text-4xl animate-float-delay">✨</div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 px-4" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: "var(--blue-light)", color: "var(--blue-dark)" }}>
              📸 Галерея
            </div>
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Pacifico', cursive", color: "var(--brown)" }}>
              Красота на каждом фото
            </h2>
            <p className="text-lg" style={{ color: "var(--brown-light)" }}>
              Загляните на нашу кухню и насладитесь процессом создания
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-2 rounded-3xl overflow-hidden shadow-lg group cursor-pointer relative">
              <img
                src="https://cdn.poehali.dev/projects/6e916fd9-ef54-4b6d-8919-7d991408e945/files/5f6387a3-33a6-48aa-9a36-c1d0c332f188.jpg"
                alt="Наши пончики"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: "linear-gradient(to top, rgba(61,28,11,0.6), transparent)" }}>
                <span className="text-white font-semibold text-lg">Наши пончики 🍩</span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg group cursor-pointer relative">
              <img
                src="https://cdn.poehali.dev/projects/6e916fd9-ef54-4b6d-8919-7d991408e945/files/b28b54ab-3272-43ce-ab6d-e572eefb2704.jpg"
                alt="Процесс создания"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: "linear-gradient(to top, rgba(61,28,11,0.6), transparent)" }}>
                <span className="text-white font-semibold text-lg">Процесс создания 👐</span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg group cursor-pointer relative">
              <img
                src="https://cdn.poehali.dev/projects/6e916fd9-ef54-4b6d-8919-7d991408e945/files/37ebd12d-60ba-4e29-a7a7-536be62a212b.jpg"
                alt="Наша кондитерская"
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: "linear-gradient(to top, rgba(61,28,11,0.6), transparent)" }}>
                <span className="text-white font-semibold text-lg">Наша кондитерская ☕</span>
              </div>
            </div>

            <div className="col-span-1 rounded-3xl p-6 flex items-center justify-center"
              style={{ backgroundColor: "var(--pink-light)", border: "2px dashed var(--pink)" }}>
              <div className="text-center">
                <div className="text-6xl mb-3">🎂</div>
                <div className="font-semibold" style={{ color: "var(--brown)", fontFamily: "'Golos Text'" }}>Торты на заказ</div>
                <div className="text-sm mt-1" style={{ color: "var(--brown-light)" }}>Скоро!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-20 px-4" style={{ backgroundColor: "var(--blue-light)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: "var(--blue)", color: "var(--blue-dark)" }}>
              👨‍👩‍👧‍👦 Наша команда
            </div>
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Pacifico', cursive", color: "var(--brown)" }}>
              Люди, которые делают вкус
            </h2>
            <p className="text-lg" style={{ color: "var(--brown-light)" }}>
              Профессионалы с любовью к своему делу
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <div key={member.name}
                className="rounded-3xl p-6 text-center transition-all duration-300 hover:-translate-y-2 cursor-default"
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 4px 20px rgba(184,224,247,0.3)",
                  animationDelay: `${i * 0.1}s`
                }}>
                <div className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mx-auto mb-4"
                  style={{ backgroundColor: member.color }}>
                  {member.emoji}
                </div>
                <h3 className="text-lg font-bold mb-1" style={{ color: "var(--brown)" }}>{member.name}</h3>
                <div className="text-sm font-semibold mb-3 px-3 py-1 rounded-full inline-block"
                  style={{ backgroundColor: member.color, color: "var(--brown)" }}>
                  {member.role}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--brown-light)" }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 px-4" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: "var(--cream-dark)", color: "var(--brown)" }}>
              📍 Контакты
            </div>
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Pacifico', cursive", color: "var(--brown)" }}>
              Найдите нас!
            </h2>
            <p className="text-lg" style={{ color: "var(--brown-light)" }}>
              Ждём вас каждый день. Закажите доставку или приходите лично!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="rounded-3xl p-6 space-y-5"
                style={{ backgroundColor: "white", boxShadow: "0 4px 20px rgba(249,168,201,0.15)" }}>
                {[
                  { icon: "MapPin", label: "Адрес", value: "ул. Сладкая, 12, Москва" },
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Вс: 07:00 – 21:00" },
                  { icon: "Mail", label: "Email", value: "hello@ponchik.ru" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--pink-light)" }}>
                      <Icon name={icon} size={18} style={{ color: "var(--pink-dark)" }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                        style={{ color: "var(--pink-dark)" }}>{label}</div>
                      <div className="font-medium" style={{ color: "var(--brown)" }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl overflow-hidden" style={{ height: "220px", border: "2px solid var(--pink-light)" }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=37.621202%2C55.753544&z=14&l=map"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="Карта"
                />
              </div>
            </div>

            <div className="rounded-3xl p-8"
              style={{ backgroundColor: "white", boxShadow: "0 4px 20px rgba(249,168,201,0.15)" }}>
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                  <div className="text-7xl animate-float">🎉</div>
                  <h3 className="text-2xl" style={{ fontFamily: "'Pacifico', cursive", color: "var(--brown)" }}>
                    Отлично!
                  </h3>
                  <p style={{ color: "var(--brown-light)" }}>
                    Мы получили ваше сообщение и перезвоним в течение 30 минут
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary"
                    style={{ padding: "0.5rem 1.5rem", fontSize: "0.9rem" }}>
                    Отправить ещё
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl mb-6" style={{ fontFamily: "'Pacifico', cursive", color: "var(--brown)" }}>
                    Написать нам 💌
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { field: "name", label: "Ваше имя", placeholder: "Как вас зовут?", type: "text" },
                      { field: "phone", label: "Телефон", placeholder: "+7 (___) ___-__-__", type: "tel" },
                    ].map(({ field, label, placeholder, type }) => (
                      <div key={field}>
                        <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--brown)" }}>
                          {label}
                        </label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          value={formData[field as keyof typeof formData]}
                          onChange={e => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
                          className="w-full px-4 py-3 rounded-2xl outline-none transition-all"
                          style={{
                            border: "2px solid var(--cream-dark)",
                            backgroundColor: "var(--cream)",
                            fontFamily: "'Golos Text'",
                            color: "var(--brown)",
                          }}
                          onFocus={e => (e.target.style.borderColor = "var(--pink)")}
                          onBlur={e => (e.target.style.borderColor = "var(--cream-dark)")}
                          required
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--brown)" }}>
                        Сообщение
                      </label>
                      <textarea
                        placeholder="Что бы вы хотели заказать?"
                        rows={4}
                        value={formData.message}
                        onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-2xl outline-none transition-all resize-none"
                        style={{
                          border: "2px solid var(--cream-dark)",
                          backgroundColor: "var(--cream)",
                          fontFamily: "'Golos Text'",
                          color: "var(--brown)",
                        }}
                        onFocus={e => (e.target.style.borderColor = "var(--pink)")}
                        onBlur={e => (e.target.style.borderColor = "var(--cream-dark)")}
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full text-base"
                      style={{ padding: "0.875rem" }}>
                      Отправить заявку 🍩
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-4" style={{ backgroundColor: "var(--brown)", color: "white" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.poehali.dev/projects/6e916fd9-ef54-4b6d-8919-7d991408e945/bucket/f584c8f3-0140-414f-8ff2-193982916673.JPG"
                alt="Пончик"
                className="w-10 h-10 object-cover rounded-full"
              />
              <span className="text-2xl" style={{ fontFamily: "'Pacifico', cursive", color: "var(--pink)" }}>
                Пончик
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                ["menu", "Меню"],
                ["about", "О нас"],
                ["gallery", "Галерея"],
                ["team", "Команда"],
                ["contacts", "Контакты"],
              ].map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)}
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: "var(--cream-dark)", fontFamily: "'Golos Text'" }}>
                  {label}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              {["📱", "📘", "📷"].map((icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110"
                  style={{ backgroundColor: "rgba(255,248,240,0.15)" }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 text-center text-sm"
            style={{ borderTop: "1px solid rgba(255,248,240,0.15)", color: "var(--cream-dark)", opacity: 0.6 }}>
            © 2024 Кондитерская «Пончик». Все права защищены. Сделано с 💝
          </div>
        </div>
      </footer>
    </div>
  );
}