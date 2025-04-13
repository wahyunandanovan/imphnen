"use client";

import { useEffect, useRef, useState } from "react";

export default function LazyAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current && !canPlay) {
        audioRef.current.play().catch(() => {});
        setCanPlay(true);
      }
    };

    window.addEventListener("click", handleUserInteraction, { once: true });
    window.addEventListener("touchstart", handleUserInteraction, { once: true });
    window.addEventListener("scroll", handleUserInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };
  }, [canPlay]);

  return <audio ref={audioRef} src="/audios/imphnen-anthem.mp3" preload="none" />;
}
