// components/AnimatedText/AnimatedText.tsx
"use client";
import { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./AnimatedText.module.scss";

const cx = classNames.bind(styles);

const PHRASES = [
  "Explore the World",
  "Chase the Sunset",
  "Hidden Treasures",
  "Find The Journey",
  "Your Grand Story",
];

export const AnimatedText: FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % PHRASES.length);
        setIsChanging(false);
      }, 600);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cx("animated-text")}>
      <span
        className={cx("animated-text__phrase", {
          "animated-text__phrase--changing": isChanging,
        })}
      >
        {PHRASES[currentPhraseIndex]}
      </span>
      <span className={cx("animated-text__static")}> Awaits</span>
    </div>
  );
};

export default AnimatedText;
