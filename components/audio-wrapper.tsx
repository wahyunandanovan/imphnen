"use client";

import dynamic from "next/dynamic";

const AudioPlayer = dynamic(() => import("./audio-player"), {
  ssr: false,
});

export default function AudioWrapper() {
  return <AudioPlayer />;
}
