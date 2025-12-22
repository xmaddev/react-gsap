import React, { useState, useEffect, useRef } from "react";

const phrases = [
  "are backed by evidence",
  "exceed expectations",
  "are tailored to your goals",
  "are goal driven",
  "are tailored for every athlete",
  "align with your lifestyle",
  "just work…",
];

const Hero: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const rotatorRef = useRef<HTMLSpanElement>(null);
  const slotRef = useRef<HTMLSpanElement>(null);
  const probeRef = useRef<HTMLSpanElement>(null);

  // Эффект для установки минимальной ширины ротатора
  useEffect(() => {
    const setMinWidth = () => {
      if (!slotRef.current || !rotatorRef.current) return;

      // Создаем временный элемент для измерения
      const probe = document.createElement("span");
      const slotStyle = window.getComputedStyle(slotRef.current);

      Object.assign(probe.style, {
        position: "absolute",
        visibility: "hidden",
        whiteSpace: "nowrap",
        fontFamily: slotStyle.fontFamily,
        fontSize: slotStyle.fontSize,
        fontWeight: slotStyle.fontWeight,
        fontStyle: slotStyle.fontStyle,
        letterSpacing: slotStyle.letterSpacing,
      });

      document.body.appendChild(probe);

      let maxWidth = 0;
      phrases.forEach((phrase) => {
        probe.textContent = phrase;
        const width = probe.getBoundingClientRect().width;
        maxWidth = Math.max(maxWidth, width);
      });

      probe.remove();

      if (rotatorRef.current) {
        rotatorRef.current.style.minWidth = `${Math.ceil(maxWidth)}px`;
      }
    };

    // Даем время для применения стилей перед измерением
    const timer = setTimeout(setMinWidth, 100);
    window.addEventListener("resize", setMinWidth);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", setMinWidth);
    };
  }, []);

  // Эффект для анимации смены фраз
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Для пользователей с настройкой уменьшения движения - просто меняем фразы без анимации
      const interval = setInterval(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 3000); // Более медленная смена без анимации

      return () => clearInterval(interval);
    }

    const speed = 900;
    const pause = 1600;
    let animationInterval: NodeJS.Timeout;

    const animate = () => {
      setIsAnimating(true);

      // Анимация исчезновения
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);

        // Задержка перед началом анимации появления
        setTimeout(() => {
          setIsAnimating(false);
        }, 50); // Небольшая задержка для смены контента
      }, speed);
    };

    // Начальная задержка перед первым циклом анимации
    const initialTimer = setTimeout(() => {
      animate();
      animationInterval = setInterval(animate, speed + pause);
    }, pause);

    return () => {
      clearTimeout(initialTimer);
      if (animationInterval) clearInterval(animationInterval);
    };
  }, []);

  // Классы для анимации
  const rotatorClasses = `rotator ${
    isAnimating ? "rotator--out" : "rotator--in"
  }`;

  return (
    <>
      {/* Подключаем шрифт через helmet или в index.html */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="hero">
        <div className="hero__inner">
          <h1 className="hero__h1">
            <span className="hero__preface">Coaching services that&nbsp;</span>
            <span
              className={rotatorClasses}
              aria-hidden="true"
              ref={rotatorRef}
            >
              <span className="rotator__item" ref={slotRef}>
                {phrases[currentPhraseIndex]}
              </span>
            </span>
          </h1>

          {/* Screen-reader helper */}
          <p className="sr-only">Coaching services that {phrases.join(", ")}</p>
        </div>

        <div className="hero__panel" aria-hidden="true"></div>
      </section>
    </>
  );
};

export default Hero;
