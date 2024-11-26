// components/Hero/HeroClient.tsx
"use client";

import { useEffect, useRef, ReactNode } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import classnames from "classnames/bind";
import Flickity from "react-flickity-component";
import { Slide } from "./HeroServer";
import styles from "./HeroVideo.module.scss";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface Props {
  slidesData: Slide[];
  children?: ReactNode;
  contentPosition?:
    | "center"
    | "bottom-left"
    | "bottom-right"
    | "top-left"
    | "top-right"
    | "top-center"
    | "bottom-center";
}

const cx = classnames.bind(styles);

export function HeroClient({
  slidesData,
  children,
  contentPosition = "center",
}: Props) {
  const hasVideo = slidesData.some((slide) => Boolean(slide.video_url));
  const flickityRef = useRef<Flickity | null>(null);

  const carouselOptions = {
    fade: false,
    pageDots: false,
    prevNextButtons: false,
    imagesLoaded: true,
    autoPlay: 5000,
    adaptiveHeight: true,
    setGallerySize: true,
    resize: true,
    static: true,
    freeScroll: false,
    wrapAround: true,
  };

  const onSlideChange = () => {
    const selected = flickityRef.current?.selectedIndex || 0;
  };

  const onPrev = () => {
    flickityRef.current?.previous();
  };

  const onNext = () => {
    flickityRef.current?.next();
  };

  useEffect(() => {
    if (flickityRef.current) {
      flickityRef.current.on("change", onSlideChange);
    }
    return () => {
      if (flickityRef.current) {
        flickityRef.current.off("change", onSlideChange);
      }
    };
  }, []);

  const slides = slidesData.map((slide, i) => {
    return (
      <div
        className={cx("slide")}
        key={`${slide.image.url}-${i}`}
        data-index={i + 1}
      >
        <div
          className={cx("hero__content", `hero__content--${contentPosition}`)}
        >
          {children}
        </div>
        <div className={cx("hero__filter")} />
        <div className={cx("blackBg")} />
        {slide.video_url ? (
          <>
            <div className={cx("hero__video-wrapper")}>
              <div className={cx("reactPlayer")}>
                <ReactPlayer
                  url={slide.video_url}
                  className={cx("iframeWrap")}
                  playing
                  loop
                  width="100%"
                  height="100%"
                  muted
                />
              </div>
            </div>

            <Image
              src={slide.image.url}
              alt={slide.image.alt || "Hero image"}
              layout="fill"
              objectFit="cover"
              sizes="100vw"
            />
          </>
        ) : (
          <Image
            src={slide.image.url}
            alt={slide.image.alt || "Hero image"}
            layout="fill"
            objectFit="cover"
            sizes="100vw"
          />
        )}
      </div>
    );
  });

  if (!slides.length) return null;

  return (
    <div className={cx("hero", { "hero--has-video": hasVideo })}>
      <div className={cx("hero__inner-wrapper")}>
        {slides.length > 1 && (
          <button
            className={cx("prev")}
            onClick={onPrev}
            aria-label="Previous Slide"
          >
            {/* Icon or text for previous */}
          </button>
        )}
        <Flickity
          flickityRef={(carousel) => {
            flickityRef.current = carousel;
          }}
          className={cx("hero__carousel")}
          options={carouselOptions}
          static
        >
          {slides}
        </Flickity>
        {slides.length > 1 && (
          <button
            className={cx("next")}
            onClick={onNext}
            aria-label="Next Slide"
          >
            {/* Icon or text for next */}
          </button>
        )}
      </div>
    </div>
  );
}
