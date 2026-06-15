import Icon from "@/components/ui/icon";

const services = [
  {
    tag: "Точно",
    tagBg: "var(--primary)",
    icon: "Search",
    title: "Компьютерная диагностика",
    desc: "Полная проверка узлов авто на современном оборудовании. Найдём причину поломки за 30 минут.",
    price: "1 500 ₽",
  },
  {
    tag: "Хит",
    tagBg: "var(--secondary)",
    icon: "Wrench",
    title: "Ремонт двигателя",
    desc: "Капитальный и текущий ремонт ДВС, замена ГРМ, ремонт трансмиссии и подвески. Гарантия на работы.",
    price: "от 3 000 ₽",
  },
  {
    tag: "Выгодно",
    tagBg: "var(--accent)",
    tagColor: "var(--dark)",
    icon: "Droplet",
    title: "ТО и замена масла",
    desc: "Плановое техобслуживание, замена масла, фильтров и расходников. Запчасти в наличии и под заказ.",
    price: "от 600 ₽",
  },
  {
    tag: "Лето",
    tagBg: "var(--secondary)",
    icon: "Snowflake",
    title: "Ремонт кондиционеров",
    desc: "Заправка, диагностика и ремонт автокондиционеров. Чистый и холодный воздух в салоне.",
    price: "от 1 500 ₽",
  },
  {
    tag: "Мощь",
    tagBg: "var(--primary)",
    icon: "Cpu",
    title: "Чип-тюнинг",
    desc: "Прошивка блоков управления, увеличение мощности и снижение расхода топлива. Безопасно для двигателя.",
    price: "от 5 000 ₽",
  },
  {
    tag: "Электрик",
    tagBg: "var(--accent)",
    tagColor: "var(--dark)",
    icon: "Zap",
    title: "Автоэлектрика",
    desc: "Диагностика и ремонт электрики, проводки, стартеров и генераторов любых марок авто.",
    price: "от 700 ₽",
  },
];

const reviews = [
  {
    name: "Ильдар, Lada Vesta",
    text: "Привёз машину с непонятным стуком — за час нашли проблему и устранили. Цена честная, всё объяснили. Рекомендую!",
  },
  {
    name: "Марина, Kia Rio",
    text: "Делала ТО и замену масла. Быстро, аккуратно, без навязывания лишних услуг. Теперь только сюда.",
  },
  {
    name: "Андрей, таксопарк",
    text: "Обслуживаем здесь весь автопарк. Запчасти всегда в наличии, машины не простаивают. Надёжные ребята.",
  },
];

export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">
          АВТО<span style={{ color: "var(--primary)" }}>+</span>ДОКТОР
        </div>
        <nav>
          <a href="#services">Услуги</a>
          <a href="#about">О нас</a>
          <a href="#reviews">Отзывы</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <a href="tel:+79273149314" className="btn-cta">
          Позвонить
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ДОВЕРЬ АВТО
              <br />
              <span>ПРОФЕССИОНАЛАМ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Профессиональный ремонт и обслуживание авто в Туймазах. Современное оборудование, опытные мастера и
              прозрачные цены.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a
                href="tel:+79273149314"
                className="btn-cta"
                style={{ background: "var(--primary)", color: "white" }}
              >
                Узнать цену
              </a>
              <a href="#services" className="btn-cta" style={{ background: "white" }}>
                Все услуги
              </a>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ГАРАНТИЯ
              <br />
              НА РАБОТЫ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ТУЙМАЗЫ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ЧЕСТНО
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ДИАГНОСТИКА * РЕМОНТ ДВИГАТЕЛЯ * ЗАМЕНА МАСЛА * АВТОЭЛЕКТРИКА * ЗАПРАВКА КОНДИЦИОНЕРОВ * ЧИП-ТЮНИНГ *
            ЗАПЧАСТИ В НАЛИЧИИ * ДИАГНОСТИКА * РЕМОНТ ДВИГАТЕЛЯ * ЗАМЕНА МАСЛА * АВТОЭЛЕКТРИКА * ЗАПРАВКА КОНДИЦИОНЕРОВ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ПОЧЕМУ МЫ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: "Cog", title: "Современное оборудование", text: "Точная диагностика и ремонт любой сложности." },
              { icon: "Award", title: "Опытные мастера", text: "Команда профессионалов со стажем более 10 лет." },
              { icon: "Package", title: "Запчасти в наличии", text: "Оригинал и аналоги в наличии и под заказ." },
              { icon: "ShieldCheck", title: "Гарантия и прозрачность", text: "Честные цены и гарантия на все работы." },
            ].map((item) => (
              <div
                key={item.title}
                style={{ border: "var(--border)", background: "white", padding: "24px" }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "var(--accent)",
                    border: "var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Icon name={item.icon} size={28} />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: "18px", marginBottom: "8px", textTransform: "uppercase" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.5 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="section-padding" style={{ borderTop: "var(--border)" }}>
          <div className="section-header">
            <h2 className="section-title">УСЛУГИ И ЦЕНЫ</h2>
            <a
              href="tel:+79273149314"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Записаться
            </a>
          </div>

          <div className="menu-grid">
            {services.map((s) => (
              <div className="menu-card" key={s.title}>
                <span className="menu-tag" style={{ background: s.tagBg, color: s.tagColor || "white" }}>
                  {s.tag}
                </span>
                <div
                  style={{
                    height: "200px",
                    background: "var(--dark)",
                    borderBottom: "var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name={s.icon} size={72} style={{ color: "var(--accent)" }} />
                </div>
                <div className="menu-card-body">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                      gap: "10px",
                    }}
                  >
                    <h3 style={{ fontWeight: 800, textTransform: "uppercase", fontSize: "17px" }}>{s.title}</h3>
                    <span className="price" style={{ whiteSpace: "nowrap" }}>
                      {s.price}
                    </span>
                  </div>
                  <p style={{ fontSize: "14px", color: "#666" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="retro-vibe">
          <div>
            <h2 className="vibe-title">ВАШ АВТОМОБИЛЬ В НАДЁЖНЫХ РУКАХ</h2>
            <p className="vibe-text">
              «Автодоктор» — это команда мастеров, которая лечит любые автомобильные «болезни». Мы работаем с
              отечественными и импортными марками, обслуживаем частных клиентов и автопарки. Честная диагностика,
              качественные запчасти и гарантия на каждую работу.
            </p>
            <a
              href="tel:+79273149314"
              className="btn-cta"
              style={{ background: "var(--dark)", color: "white", borderColor: "white" }}
            >
              Записаться на ремонт
            </a>
          </div>
          <div
            className="vibe-img"
            style={{
              background:
                "url('https://cdn.poehali.dev/projects/f73850e3-8149-4465-86e4-9d06b33cfb6a/files/f7299c96-390b-4669-be88-c0e392b63b58.jpg') center center / cover",
            }}
          ></div>
        </section>

        <section id="reviews" className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            ОТЗЫВЫ КЛИЕНТОВ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((r) => (
              <div key={r.name} style={{ border: "var(--border)", background: "white", padding: "28px" }}>
                <div style={{ display: "flex", gap: "4px", marginBottom: "14px" }}>
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} style={{ color: "var(--accent)", fill: "var(--accent)" }} />
                  ))}
                </div>
                <p style={{ fontSize: "15px", lineHeight: 1.6, marginBottom: "16px", fontStyle: "italic" }}>
                  «{r.text}»
                </p>
                <span style={{ fontWeight: 800, textTransform: "uppercase", fontSize: "14px" }}>{r.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contacts">
        <div>
          <div className="footer-logo">
            АВТО<span style={{ color: "var(--primary)" }}>+</span>ДОКТОР
          </div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Профессиональный автосервис в Туймазах. Доверь свой автомобиль профессионалам — ремонт, диагностика и
            обслуживание любых марок.
          </p>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>г. Туймазы, ул. 70 лет Октября, 26/6</li>
            <li>
              <a href="tel:+79273149314" style={{ color: "inherit", textDecoration: "none" }}>
                +7 (927) 314-93-14
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн-Пт: 09:00 - 19:00</li>
            <li>Сб: 09:00 - 16:00</li>
            <li>Вс: Выходной</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 АВТОДОКТОР</span>
          <span>ДОВЕРЬ СВОЙ АВТОМОБИЛЬ ПРОФЕССИОНАЛАМ</span>
          <span>ТУЙМАЗЫ</span>
        </div>
      </footer>
    </>
  );
}