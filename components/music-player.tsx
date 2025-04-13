"use client";

import { Button } from "@/components/ui/button";
import { Music, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MusicPlayer() {
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handlePlayMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audios/imphnen-anthem.mp3");
      audioRef.current.loop = true;
    }

    audioRef.current.play().catch((err) => {
      console.warn("Gagal memutar audio:", err);
    });

    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 z-50 bg-white rounded-lg shadow-lg border border-blue-100 p-4 max-w-md w-full mx-4"
          style={{ transform: "translateX(-50%)" }}
        >
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 rounded-full p-2 text-blue-500">
              <Music className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-blue-900">Dengarkan IMPHNEN Anthem!</h3>
              <p className="text-sm text-blue-900/70 mt-1">
                Nikmati lagu tema komunitas programmer abal-abal #1 di Indonesia sambil menjelajahi website kami!
              </p>
              <div className="mt-3 flex gap-2">
                <Button size="sm" className="rounded-full blue-gradient" onClick={handlePlayMusic}>
                  Putar Musik
                </Button>
                <Button size="sm" variant="outline" className="rounded-full" onClick={handleClose}>
                  Nanti Saja
                </Button>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6 -mt-1 -mr-1" onClick={handleClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
