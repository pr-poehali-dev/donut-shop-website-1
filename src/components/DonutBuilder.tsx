import { useState } from "react";
import Icon from "@/components/ui/icon";

type Coating = "powder" | "glaze";
type GlazeFlavor = {
  id: string;
  label: string;
  emoji: string;
  color: string;
  bg: string;
};
type Filling = {
  id: string;
  label: string;
  emoji: string;
  color: string;
};
type Topping = {
  id: string;
  label: string;
  emoji: string;
};

const GLAZE_FLAVORS: GlazeFlavor[] = [
  { id: "orange",     label: "Апельсин",  emoji: "🍊", color: "#E8621A", bg: "#FFF0DC" },
  { id: "banana",     label: "Банан",     emoji: "🍌", color: "#D4A017", bg: "#FFFBE6" },
  { id: "vanilla",    label: "Ваниль",    emoji: "🤍", color: "#C8A97E", bg: "#FFF8F0" },
  { id: "strawberry", label: "Клубника",  emoji: "🍓", color: "#E8618C", bg: "#FDE8F2" },
  { id: "chocolate",  label: "Шоколад",   emoji: "🍫", color: "#6B3A2A", bg: "#F5E6D3" },
  { id: "blueberry",  label: "Черника",   emoji: "🫐", color: "#5BA4CF", bg: "#E8F6FF" },
  { id: "pistachio",  label: "Фисташка",  emoji: "🌿", color: "#5D8A5E", bg: "#EDFAF1" },
];

const FILLINGS: Filling[] = [
  { id: "none",       label: "Без начинки",     emoji: "○",  color: "#C8A97E" },
  { id: "condensed",  label: "Сгущённое молоко", emoji: "🥛", color: "#D4A017" },
  { id: "custard",    label: "Заварной крем",    emoji: "🍮", color: "#E8C97E" },
  { id: "chocolate",  label: "Шоколадный крем",  emoji: "🍫", color: "#6B3A2A" },
  { id: "caramel",    label: "Карамель",          emoji: "🍯", color: "#C4811A" },
  { id: "strawberry", label: "Клубничный джем",  emoji: "🍓", color: "#E8618C" },
  { id: "raspberry",  label: "Малиновый джем",   emoji: "🫐", color: "#C0426B" },
];

const TOPPINGS: Topping[] = [
  { id: "none",      label: "Без посыпки",          emoji: "✕" },
  { id: "sprinkles", label: "Кондитерская посыпка",  emoji: "🎊" },
  { id: "coconut",   label: "Кокосовая стружка",     emoji: "🥥" },
  { id: "nuts",      label: "Дроблёные орехи",       emoji: "🥜" },
  { id: "sesame",    label: "Кунжут",                emoji: "🌾" },
];

function DonutSVG({
  coating,
  glazeColor,
  filling,
  topping,
  animated,
}: {
  coating: Coating | null;
  glazeColor: string | null;
  filling: Filling | null;
  topping: Topping | null;
  animated?: boolean;
}) {
  const bodyColor = "#F5D9A8";
  const ringColor = coating === "powder"
    ? "#F5F0FF"
    : glazeColor
    ? glazeColor
    : "#F9A8C9";
  const ringOpacity = coating ? 1 : 0.25;

  const sprinkleColors = ["#E8618C", "#5BA4CF", "#D4A017", "#5D8A5E", "#E8621A"];

  return (
    <svg
      viewBox="0 0 220 220"
      className={`w-full h-full ${animated ? "animate-float" : ""}`}
      style={{ filter: "drop-shadow(0 12px 32px rgba(249,168,201,0.35))" }}
    >
      {/* Donut body */}
      <ellipse cx="110" cy="116" rx="88" ry="26" fill="rgba(0,0,0,0.07)" />
      <circle cx="110" cy="110" r="88" fill={bodyColor} />
      {/* Glaze/coating layer */}
      <circle cx="110" cy="110" r="88" fill={ringColor} fillOpacity={ringOpacity}
        style={{ transition: "fill 0.4s ease, fill-opacity 0.4s ease" }} />
      {/* Hole shadow */}
      <circle cx="110" cy="110" r="38" fill="rgba(0,0,0,0.12)" />
      {/* Hole */}
      <circle cx="110" cy="110" r="34" fill="#FFF8F0" />
      {/* Inner hole ring */}
      <circle cx="110" cy="110" r="34" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />

      {/* Powder texture */}
      {coating === "powder" && (
        <>
          <circle cx="80" cy="80" r="5" fill="white" fillOpacity="0.7" />
          <circle cx="120" cy="70" r="3.5" fill="white" fillOpacity="0.6" />
          <circle cx="150" cy="90" r="4" fill="white" fillOpacity="0.65" />
          <circle cx="140" cy="125" r="3" fill="white" fillOpacity="0.55" />
          <circle cx="90" cy="140" r="4.5" fill="white" fillOpacity="0.6" />
          <circle cx="65" cy="115" r="3" fill="white" fillOpacity="0.7" />
          <circle cx="108" cy="155" r="3.5" fill="white" fillOpacity="0.55" />
        </>
      )}

      {/* Sprinkles */}
      {topping?.id === "sprinkles" &&
        [
          { x: 75, y: 75, r: 10, c: 0 }, { x: 130, y: 68, r: -20, c: 1 },
          { x: 160, y: 100, r: 15, c: 2 }, { x: 152, y: 135, r: -10, c: 3 },
          { x: 110, y: 158, r: 5, c: 4 }, { x: 68, y: 138, r: 25, c: 0 },
          { x: 83, y: 105, r: -15, c: 2 }, { x: 142, y: 80, r: 20, c: 1 },
        ].map((s, i) => (
          <rect
            key={i} x={s.x - 6} y={s.y - 2.5} width="12" height="5" rx="2.5"
            fill={sprinkleColors[s.c]}
            transform={`rotate(${s.r} ${s.x} ${s.y})`}
          />
        ))
      }
      {/* Coconut */}
      {topping?.id === "coconut" &&
        [75, 105, 130, 155, 90, 150, 68].map((cx, i) => (
          <ellipse key={i} cx={cx} cy={[78, 70, 88, 115, 145, 148, 118][i]}
            rx="4" ry="1.5"
            fill="white" fillOpacity="0.85"
            transform={`rotate(${i * 25} ${cx} ${[78, 70, 88, 115, 145, 148, 118][i]})`}
          />
        ))
      }
      {/* Nuts */}
      {topping?.id === "nuts" &&
        [
          { cx: 78, cy: 78 }, { cx: 130, cy: 70 }, { cx: 158, cy: 105 },
          { cx: 148, cy: 138 }, { cx: 107, cy: 155 }, { cx: 70, cy: 130 },
        ].map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r="5" fill="#8B5E3C" fillOpacity="0.75" />
        ))
      }
      {/* Sesame */}
      {topping?.id === "sesame" &&
        [
          { cx: 80, cy: 76 }, { cx: 110, cy: 65 }, { cx: 140, cy: 75 },
          { cx: 158, cy: 100 }, { cx: 155, cy: 130 }, { cx: 135, cy: 152 },
          { cx: 100, cy: 157 }, { cx: 70, cy: 142 }, { cx: 60, cy: 110 },
        ].map((p, i) => (
          <ellipse key={i} cx={p.cx} cy={p.cy} rx="3.5" ry="2"
            fill="#D4A017" fillOpacity="0.8"
            transform={`rotate(${i * 20} ${p.cx} ${p.cy})`}
          />
        ))
      }

      {/* Filling dot in center hole edge */}
      {filling && filling.id !== "none" && (
        <circle cx="110" cy="76" r="7" fill={filling.color} fillOpacity="0.85" />
      )}

      {/* Shine */}
      <ellipse cx="85" cy="82" rx="16" ry="9"
        fill="white" fillOpacity="0.18"
        transform="rotate(-30 85 82)" />
    </svg>
  );
}

const STEP_LABELS = ["Покрытие", "Начинка", "Посыпка"];

export default function DonutBuilder({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [coating, setCoating] = useState<Coating | null>(null);
  const [glazeFlavor, setGlazeFlavor] = useState<GlazeFlavor | null>(null);
  const [filling, setFilling] = useState<Filling | null>(null);
  const [topping, setTopping] = useState<Topping | null>(null);
  const [done, setDone] = useState(false);

  const canNext =
    step === 0 ? (coating === "powder" || glazeFlavor !== null) :
    step === 1 ? filling !== null :
    topping !== null;

  const glazeColorForSVG = glazeFlavor ? glazeFlavor.color + "CC" : null;

  const selectedFilling = filling;

  const summaryItems = [
    coating === "powder" ? "Сахарная пудра 🤍" :
      glazeFlavor ? `Глазурь «${glazeFlavor.label}» ${glazeFlavor.emoji}` : null,
    filling ? (filling.id === "none" ? "Без начинки" : `${filling.label} ${filling.emoji}`) : null,
    topping ? (topping.id === "none" ? "Без посыпки" : `${topping.label} ${topping.emoji}`) : null,
  ].filter(Boolean);

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
    else setDone(true);
  };

  const handleReset = () => {
    setStep(0); setCoating(null); setGlazeFlavor(null);
    setFilling(null); setTopping(null); setDone(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(61,28,11,0.65)", backdropFilter: "blur(8px)" }}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl overflow-hidden"
        style={{
          backgroundColor: "var(--cream)",
          boxShadow: "0 32px 80px rgba(61,28,11,0.35)",
          maxHeight: "92vh",
          overflowY: "auto",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ backgroundColor: "var(--cream-dark)", color: "var(--brown)" }}
        >
          <Icon name="X" size={16} />
        </button>

        {/* Done screen */}
        {done ? (
          <div className="flex flex-col items-center justify-center px-8 py-12 text-center">
            <div className="w-48 h-48 mb-6 mx-auto animate-float">
              <DonutSVG
                coating={coating}
                glazeColor={glazeColorForSVG}
                filling={selectedFilling}
                topping={topping}
              />
            </div>
            <h2 className="text-3xl mb-2" style={{ fontFamily: "'Pacifico', cursive", color: "var(--brown)" }}>
              Ваш пончик готов! 🎉
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--brown-light)" }}>
              Уникальный пончик, собранный специально для вас
            </p>
            <div className="flex flex-col gap-2 mb-8 text-left w-full max-w-xs mx-auto">
              {summaryItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-2.5 rounded-2xl"
                  style={{ backgroundColor: "white", color: "var(--brown)" }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "var(--pink-dark)" }} />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              <button
                onClick={handleReset}
                className="btn-primary"
                style={{ padding: "0.75rem 2rem" }}
              >
                Собрать ещё один 🍩
              </button>
              <button
                onClick={onClose}
                className="font-semibold px-8 py-3 rounded-full border-2 transition-all"
                style={{
                  borderColor: "var(--pink-dark)", color: "var(--pink-dark)",
                  backgroundColor: "transparent", fontFamily: "'Golos Text'",
                }}
              >
                Заказать
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="px-6 pt-6 pb-4"
              style={{ background: "linear-gradient(135deg, var(--pink-light), var(--cream))" }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">🍩</span>
                <h2 className="text-2xl" style={{ fontFamily: "'Pacifico', cursive", color: "var(--brown)" }}>
                  Конструктор пончика
                </h2>
              </div>

              {/* Steps progress */}
              <div className="flex items-center gap-2">
                {STEP_LABELS.map((label, i) => (
                  <div key={i} className="flex items-center gap-2 flex-1">
                    <div className="flex items-center gap-1.5 flex-1">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-300"
                        style={{
                          backgroundColor: i < step ? "var(--pink-dark)" : i === step ? "var(--brown)" : "var(--cream-dark)",
                          color: i <= step ? "white" : "var(--brown-light)",
                        }}
                      >
                        {i < step ? "✓" : i + 1}
                      </div>
                      <span className="text-xs font-semibold hidden sm:block transition-all"
                        style={{ color: i === step ? "var(--brown)" : "var(--brown-light)" }}>
                        {label}
                      </span>
                    </div>
                    {i < 2 && (
                      <div className="flex-1 h-0.5 rounded-full mx-1"
                        style={{ backgroundColor: i < step ? "var(--pink-dark)" : "var(--cream-dark)" }} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col md:flex-row gap-0">
              {/* Live donut preview */}
              <div className="flex items-center justify-center px-8 py-6 md:py-10 md:w-52 flex-shrink-0"
                style={{ background: "linear-gradient(180deg, var(--pink-light) 0%, var(--blue-light) 100%)" }}>
                <div className="w-36 h-36 md:w-44 md:h-44 relative">
                  <DonutSVG
                    coating={coating}
                    glazeColor={glazeColorForSVG}
                    filling={selectedFilling}
                    topping={topping}
                    animated
                  />
                </div>
              </div>

              {/* Step content */}
              <div className="flex-1 px-6 py-6">
                {/* STEP 0: Coating */}
                {step === 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ color: "var(--brown)" }}>
                      Выберите покрытие
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "var(--brown-light)" }}>
                      Как будет выглядеть ваш пончик снаружи?
                    </p>

                    {/* Main coating choice */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <button
                        onClick={() => { setCoating("powder"); setGlazeFlavor(null); }}
                        className="p-4 rounded-2xl border-2 text-left transition-all duration-200 hover:scale-[1.02]"
                        style={{
                          borderColor: coating === "powder" ? "var(--brown)" : "var(--cream-dark)",
                          backgroundColor: coating === "powder" ? "#F5F0FF" : "white",
                          boxShadow: coating === "powder" ? "0 4px 16px rgba(61,28,11,0.12)" : "none",
                        }}
                      >
                        <div className="text-3xl mb-1">🤍</div>
                        <div className="font-bold text-sm" style={{ color: "var(--brown)" }}>Сахарная пудра</div>
                        <div className="text-xs mt-0.5" style={{ color: "var(--brown-light)" }}>Нежная классика</div>
                      </button>

                      <button
                        onClick={() => { setCoating("glaze"); }}
                        className="p-4 rounded-2xl border-2 text-left transition-all duration-200 hover:scale-[1.02]"
                        style={{
                          borderColor: coating === "glaze" ? "var(--brown)" : "var(--cream-dark)",
                          backgroundColor: coating === "glaze" ? "var(--pink-light)" : "white",
                          boxShadow: coating === "glaze" ? "0 4px 16px rgba(61,28,11,0.12)" : "none",
                        }}
                      >
                        <div className="text-3xl mb-1">🎨</div>
                        <div className="font-bold text-sm" style={{ color: "var(--brown)" }}>Цветная глазурь</div>
                        <div className="text-xs mt-0.5" style={{ color: "var(--brown-light)" }}>Выберите вкус</div>
                      </button>
                    </div>

                    {/* Glaze flavor picker */}
                    {coating === "glaze" && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide mb-2"
                          style={{ color: "var(--brown-light)" }}>
                          Вкус глазури
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {GLAZE_FLAVORS.map(f => (
                            <button
                              key={f.id}
                              onClick={() => setGlazeFlavor(f)}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 hover:scale-105"
                              style={{
                                backgroundColor: glazeFlavor?.id === f.id ? f.bg : "white",
                                borderColor: glazeFlavor?.id === f.id ? f.color : "var(--cream-dark)",
                                color: "var(--brown)",
                              }}
                            >
                              <span>{f.emoji}</span>
                              <span>{f.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* STEP 1: Filling */}
                {step === 1 && (
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ color: "var(--brown)" }}>
                      Выберите начинку
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "var(--brown-light)" }}>
                      Что будет внутри вашего пончика?
                    </p>
                    <div className="flex flex-col gap-2">
                      {FILLINGS.map(f => (
                        <button
                          key={f.id}
                          onClick={() => setFilling(f)}
                          className="flex items-center gap-3 px-4 py-3 rounded-2xl border-2 text-left transition-all duration-200 hover:scale-[1.01]"
                          style={{
                            borderColor: filling?.id === f.id ? f.color : "var(--cream-dark)",
                            backgroundColor: filling?.id === f.id ? "white" : "transparent",
                            boxShadow: filling?.id === f.id ? `0 4px 16px ${f.color}30` : "none",
                          }}
                        >
                          <span className="text-2xl w-8 text-center">{f.emoji}</span>
                          <span className="font-semibold text-sm" style={{ color: "var(--brown)" }}>
                            {f.label}
                          </span>
                          {filling?.id === f.id && (
                            <Icon name="Check" size={16} className="ml-auto flex-shrink-0"
                              style={{ color: f.color }} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2: Topping */}
                {step === 2 && (
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ color: "var(--brown)" }}>
                      Выберите посыпку
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "var(--brown-light)" }}>
                      Финальный штрих для вашего шедевра
                    </p>
                    <div className="flex flex-col gap-2">
                      {TOPPINGS.map(t => (
                        <button
                          key={t.id}
                          onClick={() => setTopping(t)}
                          className="flex items-center gap-3 px-4 py-3 rounded-2xl border-2 text-left transition-all duration-200 hover:scale-[1.01]"
                          style={{
                            borderColor: topping?.id === t.id ? "var(--pink-dark)" : "var(--cream-dark)",
                            backgroundColor: topping?.id === t.id ? "var(--pink-light)" : "transparent",
                            boxShadow: topping?.id === t.id ? "0 4px 16px rgba(232,97,140,0.15)" : "none",
                          }}
                        >
                          <span className="text-2xl w-8 text-center">{t.emoji}</span>
                          <span className="font-semibold text-sm" style={{ color: "var(--brown)" }}>
                            {t.label}
                          </span>
                          {topping?.id === t.id && (
                            <Icon name="Check" size={16} className="ml-auto flex-shrink-0"
                              style={{ color: "var(--pink-dark)" }} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-6 pt-4"
                  style={{ borderTop: "1px solid var(--cream-dark)" }}>
                  <button
                    onClick={() => step > 0 ? setStep(step - 1) : onClose()}
                    className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full transition-all"
                    style={{ color: "var(--brown-light)", backgroundColor: "var(--cream-dark)" }}
                  >
                    <Icon name="ChevronLeft" size={16} />
                    {step > 0 ? "Назад" : "Выйти"}
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={!canNext}
                    className="btn-primary flex items-center gap-2 transition-all"
                    style={{
                      padding: "0.625rem 1.75rem",
                      opacity: canNext ? 1 : 0.4,
                      cursor: canNext ? "pointer" : "not-allowed",
                      transform: canNext ? undefined : "none",
                    }}
                  >
                    {step < 2 ? (
                      <>Далее <Icon name="ChevronRight" size={16} /></>
                    ) : (
                      <>Готово! 🎉</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
