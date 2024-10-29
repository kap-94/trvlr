"use client";

import { useEffect, useRef, FC } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import classnames from "classnames/bind";
import Flickity from "react-flickity-component";
import { SearchCard } from "@/app/_components/SearchCard";
import styles from "./HeroVideo.module.scss";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface Slide {
  video_url?: string;
  image: {
    url: string;
    alt?: string;
  };
}

interface Props {
  slidesData: Array<Slide>;
  eyebrow_text?: string;
  title_value?: "1" | "2" | "3" | "4" | "5" | "6";
  subtitle: string;
  custom_anchor_id?: string;
  title: string;
  displayArrows?: boolean;
}

const cx = classnames.bind(styles);

const Hero: FC<Props> = ({
  custom_anchor_id,
  slidesData,
  displayArrows = false,
  title,
  subtitle,
  eyebrow_text,
  title_value,
}) => {
  // Compute if any slide contains a video
  const hasVideo = slidesData.some((slide) => Boolean(slide.video_url));

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

  const flickityRef = useRef<Flickity | null>(null);

  const onSlideChange = () => {
    const selected = flickityRef.current?.selectedIndex || 0;
    // Implement any logic needed when slide changes
    // Currently, selectedIndex is not used
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
        id={custom_anchor_id}
      >
        <div className={cx("hero__content")}>
          <SearchCard />
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
              sizes="(max-width: 600px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
            />
          </>
        ) : (
          <Image
            src={slide.image.url}
            alt={slide.image.alt || "Hero image"}
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 600px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
          />
        )}
      </div>
    );
  });

  if (!slides.length) return null;

  return (
    <div
      className={cx("hero", { "hero--has-video": hasVideo })}
      id={custom_anchor_id}
    >
      <div className={cx("hero__inner-wrapper")}>
        {slides.length > 1 && displayArrows && (
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
        {slides.length > 1 && displayArrows && (
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
};

export default Hero;
