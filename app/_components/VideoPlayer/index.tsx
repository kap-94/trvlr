// components/VideoPlayer.tsx

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import classnames from "classnames/bind";
import styles from "./VideoPlayer.module.scss";

const cx = classnames.bind(styles);

// Importación dinámica de ReactPlayer para evitar problemas con SSR
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export interface VideoPlayerProps {
  src: string;
  placeholderImage: string;
  options?: {
    playbackRate?: number;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    volume?: number;
  };
  title?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  placeholderImage,
  options = {},
  title = "Video Player",
}) => {
  const {
    playbackRate = 1,
    loop = true,
    muted = true,
    controls = false,
    volume = 0,
  } = options;

  // Hook para detectar si el video está en el viewport
  const { ref, inView } = useInView({
    triggerOnce: false, // Permite detectar múltiples veces
    threshold: 0.25, // Porcentaje de visibilidad para activar
    rootMargin: "0px 0px -50px 0px", // Ajusta según tus necesidades
  });

  // Estados locales
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldRenderVideo, setShouldRenderVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      // Cuando el video entra en vista
      setShouldRenderVideo(true);
      setIsPlaying(true);
    } else if (shouldRenderVideo) {
      // Cuando el video sale de vista
      setIsPlaying(false);
      // Esperar a que termine la transición antes de desmontar
      const timeout = setTimeout(() => {
        setShouldRenderVideo(false);
        setIsVideoLoaded(false);
      }, 500); // Debe coincidir con la duración de la transición en CSS
      return () => clearTimeout(timeout);
    }
  }, [inView, shouldRenderVideo]);

  return (
    <div className={cx("video-container")} ref={ref}>
      {/* Video */}
      {shouldRenderVideo && (
        <ReactPlayer
          url={src}
          playing={isPlaying}
          loop={loop}
          width="100%"
          height="100%"
          muted={muted}
          playbackRate={playbackRate}
          controls={controls}
          volume={volume}
          className={cx("react-player", { "video-loaded": isVideoLoaded })}
          title={title}
          onReady={() => setIsVideoLoaded(true)}
          onError={(e) => console.error(`Error reproduciendo el video:`, e)}
        />
      )}

      {/* Placeholder */}
      <div
        className={cx("video-placeholder", {
          "placeholder-hidden": isVideoLoaded && isPlaying,
        })}
      >
        <Image
          src={placeholderImage}
          fill
          alt={title}
          quality={25}
          className={cx("video-placeholder__image")}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
