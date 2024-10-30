"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import classnames from "classnames/bind";
import styles from "./ScrollImage.module.scss";

const cx = classnames.bind(styles);

interface ScrollImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ScrollImage: React.FC<ScrollImageProps> = ({ src, alt, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);
  const lastScrollY = useRef(0);
  const HEADER_HEIGHT = 120;
  const SMOOTHNESS_FACTOR = 0.2; // Aumentado de 0.1 a 0.2 para menos letargo

  // Memoizamos la función de cálculo para mejor rendimiento
  const calculateTranslateY = useCallback((parentRect: DOMRect) => {
    const parentTop = parentRect.top - HEADER_HEIGHT;
    const parentHeight = parentRect.height;
    const viewportHeight = window.innerHeight - HEADER_HEIGHT;
    const scrollRange = Math.max(0, parentHeight - 640);

    // Simplificamos un poco la fórmula de progreso
    const scrollProgress = Math.max(
      0,
      Math.min(
        1,
        (-parentTop + viewportHeight * 0.15) / // Ajustado de 0.1 a 0.15
          (parentHeight - viewportHeight * 0.7) // Ajustado de 0.8 a 0.7
      )
    );

    return Math.max(0, Math.min(scrollRange, scrollProgress * scrollRange));
  }, []);

  useEffect(() => {
    let rafId: number;
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        rafId = requestAnimationFrame(() => {
          if (!containerRef.current) return;

          const container = containerRef.current;
          const parentRect = container.parentElement?.getBoundingClientRect();

          if (!parentRect) return;

          const targetTranslateY = calculateTranslateY(parentRect);
          const diff = targetTranslateY - translateY;

          // Solo actualizamos si el cambio es significativo
          if (Math.abs(diff) > 0.05) {
            const smoothTranslateY = translateY + diff * SMOOTHNESS_FACTOR;
            setTranslateY(smoothTranslateY);
          }

          lastScrollY.current = window.scrollY;
          isScrolling = false;
        });
      }
    };

    // Usamos el evento 'scroll' con throttling natural por RAF
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Calculamos la posición inicial
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [calculateTranslateY, translateY]);

  return (
    <div
      ref={containerRef}
      className={cx("scroll-image", className)}
      style={{
        top: `${HEADER_HEIGHT}px`,
      }}
    >
      <div
        className={cx("scroll-image__wrapper")}
        style={{
          transform: `translate3d(0, ${translateY}px, 0)`, // Optimización GPU
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cx("scroll-image__image")}
          priority
        />
      </div>
    </div>
  );
};

export default ScrollImage;
