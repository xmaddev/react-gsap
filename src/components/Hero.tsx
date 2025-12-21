import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

// Регистрируем плагины GSAP
gsap.registerPlugin(CustomEase);

// Константы для анимации
const customEaseIn = CustomEase.create(
  "custom-ease-in",
  "0.52, 0.00, 0.48, 1.00"
);
const fourtyFrames = 1.3333333;
const fiftyFrames = 1.66666;
const twoFrames = 0.666666;
const fourFrames = 0.133333;
const sixFrames = 0.2;

const Hero: React.FC = () => {
  // Refs для элементов
  const videoRef = useRef<HTMLVideoElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const bookRef = useRef<HTMLSpanElement>(null);
  const openRef = useRef<HTMLSpanElement>(null);
  const copyRef = useRef<HTMLSpanElement>(null);
  const scrollToRowsRef = useRef<NodeListOf<Element> | null>(null);
  const btnCircleRef = useRef<HTMLDivElement>(null);
  const btnTextRef = useRef<HTMLSpanElement>(null);
  const eveRef = useRef<HTMLSpanElement>(null);
  const ryRef = useRef<HTMLSpanElement>(null);
  const foRef = useRef<HTMLSpanElement>(null);
  const ssilRef = useRef<HTMLSpanElement>(null);
  const tellsRef = useRef<HTMLSpanElement>(null);
  const aRef = useRef<HTMLSpanElement>(null);
  const stRef = useRef<HTMLSpanElement>(null);
  const oryRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Получаем все элементы с классом .scroll-to__row span
    scrollToRowsRef.current = document.querySelectorAll(
      ".scroll-to .scroll-to__row span"
    );

    // Запускаем анимацию при монтировании компонента
    showElements();

    return () => {
      // Очистка анимаций при размонтировании
      gsap.killTweensOf("*");
    };
  }, []);

  const showElements = () => {
    const timeline = gsap.timeline();

    if (!btnCircleRef.current || !headerRef.current || !eveRef.current) return;

    timeline
      .fromTo(
        btnCircleRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: fourtyFrames, ease: customEaseIn },
        0
      )
      .fromTo(
        btnCircleRef.current,
        { scale: 0.417 },
        { scale: 1, duration: fourtyFrames, ease: customEaseIn },
        0
      )
      .fromTo(
        headerRef.current,
        { y: "-0.5rem" },
        { y: "0rem", duration: fourtyFrames, ease: customEaseIn },
        0
      )
      .fromTo(
        eveRef.current,
        { x: "2.7rem" },
        { x: "0rem", duration: fiftyFrames, ease: customEaseIn },
        0
      );

    if (bookRef.current && foRef.current && aRef.current && oryRef.current) {
      timeline
        .fromTo(
          bookRef.current,
          { y: "0.5rem" },
          { y: "0rem", duration: fourtyFrames, ease: customEaseIn },
          twoFrames
        )
        .fromTo(
          foRef.current,
          { x: "2.1rem" },
          { x: "0rem", duration: fiftyFrames, ease: customEaseIn },
          twoFrames
        )
        .fromTo(
          aRef.current,
          { x: "-1.2rem" },
          { x: "0rem", duration: fiftyFrames, ease: customEaseIn },
          twoFrames
        )
        .fromTo(
          oryRef.current,
          { x: "-3.2rem" },
          { x: "0rem", duration: fiftyFrames, ease: customEaseIn },
          twoFrames
        );
    }

    if (
      openRef.current &&
      btnTextRef.current &&
      ryRef.current &&
      ssilRef.current &&
      tellsRef.current &&
      stRef.current
    ) {
      timeline
        .fromTo(
          openRef.current,
          { y: "0.3rem" },
          { y: "0rem", duration: fourtyFrames, ease: customEaseIn },
          fourFrames
        )
        .fromTo(
          btnTextRef.current,
          { y: "0.4rem" },
          { y: "0rem", duration: fourtyFrames, ease: customEaseIn },
          fourFrames
        )
        .fromTo(
          ryRef.current,
          { x: "-2rem" },
          { x: "0rem", duration: fiftyFrames, ease: customEaseIn },
          fourFrames
        )
        .fromTo(
          ssilRef.current,
          { x: "-3.1rem" },
          { x: "0rem", duration: fiftyFrames, ease: customEaseIn },
          fourFrames
        )
        .fromTo(
          tellsRef.current,
          { x: "4.3rem" },
          { x: "0rem", duration: fiftyFrames, ease: customEaseIn },
          fourFrames
        )
        .fromTo(
          stRef.current,
          { x: "1.9rem" },
          { x: "0rem", duration: fiftyFrames, ease: customEaseIn },
          fourFrames
        );
    }

    if (copyRef.current && scrollToRowsRef.current) {
      timeline
        .fromTo(
          copyRef.current,
          { y: "0.4rem" },
          { y: "0rem", duration: fourtyFrames, ease: customEaseIn },
          sixFrames
        )
        .fromTo(
          scrollToRowsRef.current,
          { y: "0.5rem" },
          { y: "0rem", duration: fourtyFrames, ease: customEaseIn },
          sixFrames
        );
    }

    return timeline;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const hideElements = () => {
    const timeline = gsap.timeline();

    if (!copyRef.current || !scrollToRowsRef.current) return;

    timeline
      .fromTo(
        copyRef.current,
        { y: "0rem" },
        { y: "0.4rem", duration: fourtyFrames, ease: customEaseIn },
        0
      )
      .fromTo(
        scrollToRowsRef.current,
        { y: "0rem" },
        { y: "0.5rem", duration: fourtyFrames, ease: customEaseIn },
        0
      );

    if (
      openRef.current &&
      btnTextRef.current &&
      ryRef.current &&
      ssilRef.current &&
      tellsRef.current &&
      stRef.current
    ) {
      timeline
        .fromTo(
          openRef.current,
          { y: "0rem" },
          { y: "0.3rem", duration: fourtyFrames, ease: customEaseIn },
          twoFrames
        )
        .fromTo(
          btnTextRef.current,
          { y: "0rem" },
          { y: "0.4rem", duration: fourtyFrames, ease: customEaseIn },
          twoFrames
        )
        .fromTo(
          ryRef.current,
          { x: "0rem" },
          { x: "-2rem", duration: fiftyFrames, ease: customEaseIn },
          twoFrames
        )
        .fromTo(
          ssilRef.current,
          { x: "0rem" },
          { x: "-3.1rem", duration: fiftyFrames, ease: customEaseIn },
          twoFrames
        )
        .fromTo(
          tellsRef.current,
          { x: "0rem" },
          { x: "4.3rem", duration: fiftyFrames, ease: customEaseIn },
          twoFrames
        )
        .fromTo(
          stRef.current,
          { x: "0rem" },
          { x: "1.9rem", duration: fiftyFrames, ease: customEaseIn },
          twoFrames
        );
    }

    if (
      bookRef.current &&
      foRef.current &&
      aRef.current &&
      oryRef.current &&
      btnCircleRef.current &&
      headerRef.current &&
      eveRef.current
    ) {
      timeline
        .fromTo(
          bookRef.current,
          { y: "0rem" },
          { y: "0.5rem", duration: fourtyFrames, ease: customEaseIn },
          fourFrames
        )
        .fromTo(
          foRef.current,
          { x: "0rem" },
          { x: "2.1rem", duration: fiftyFrames, ease: customEaseIn },
          fourFrames
        )
        .fromTo(
          aRef.current,
          { x: "0rem" },
          { x: "-1.2rem", duration: fiftyFrames, ease: customEaseIn },
          fourFrames
        )
        .fromTo(
          oryRef.current,
          { x: "0rem" },
          { x: "-3.2rem", duration: fiftyFrames, ease: customEaseIn },
          fourFrames
        )
        .fromTo(
          btnCircleRef.current,
          { autoAlpha: 1 },
          { autoAlpha: 0, duration: fourtyFrames, ease: customEaseIn },
          sixFrames
        )
        .fromTo(
          btnCircleRef.current,
          { scale: 1 },
          { scale: 0.417, duration: fourtyFrames, ease: customEaseIn },
          sixFrames
        )
        .fromTo(
          headerRef.current,
          { y: "0rem" },
          { y: "-100%", duration: fourtyFrames, ease: customEaseIn },
          sixFrames
        )
        .fromTo(
          eveRef.current,
          { x: "0rem" },
          { x: "2.7rem", duration: fiftyFrames, ease: customEaseIn },
          sixFrames
        );
    }

    return timeline;
  };

  return (
    <>
      <header className="header" ref={headerRef}>
        <div className="flex-wrapper">
          <div className="logo-wrap">
            <span className="btn-2">HISTORY</span>
            <span className="btn-2">MUSEUM</span>
          </div>
          <ul className="header-menu">
            <li className="header-menu__item header-text-1">Security</li>
            <li className="header-menu__item header-text-1">Helpcenter</li>
          </ul>
        </div>
      </header>
      <section className="hero">
        <video className="hero-video" ref={videoRef} autoPlay muted loop>
          <source
            src="https://cdn.zajno.com/dev/codepen/fossil/fossil.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container">
          <div className="title-block">
            <div className="title-h1">
              <div className="title-row title-row-1">
                <div className="title-charts-cont" id="eve">
                  <span ref={eveRef}>Eve</span>
                </div>
                <div className="title-charts-cont" id="ry">
                  <span ref={ryRef}>ry</span>
                </div>
                <div className="title-charts-cont" id="fo">
                  <span ref={foRef}>fo</span>
                </div>
                <div className="title-charts-cont" id="ssil">
                  <span ref={ssilRef}>ssil</span>
                </div>
              </div>
              <div className="title-row title-row-2">
                <div className="title-charts-cont" id="tells">
                  <span ref={tellsRef}>tells</span>
                </div>
                <div className="title-charts-cont" id="a">
                  <span ref={aRef}>a</span>
                </div>
                <div className="title-charts-cont" id="st">
                  <span ref={stRef}>st</span>
                </div>
                <div className="title-charts-cont" id="ory">
                  <span ref={oryRef}>ory</span>
                </div>
              </div>
            </div>
            <div className="first-desc">
              <span className="desc-1" ref={bookRef}>
                Book your free ticket in advance
              </span>
            </div>
            <div className="second-desc">
              <span className="desc-1" ref={openRef}>
                We are open!
              </span>
            </div>
          </div>

          <div className="copyright">
            <span className="desc-1" ref={copyRef}>
              2021 ALL RIGHTS RESERVED ©
            </span>
          </div>

          <div className="scroll-to">
            <div className="scroll-to__row">
              <span className="desc-1">Scroll to</span>
            </div>
            <div className="scroll-to__row">
              <span className="desc-1">find out more</span>
            </div>
          </div>
          <div className="book-btn">
            <div className="book-btn__circle" ref={btnCircleRef}></div>
            <div className="btn-text">
              <span className="btn-1" ref={btnTextRef}>
                Book your ticket
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
