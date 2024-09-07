"use client";
import React, { useEffect, useRef, useState } from "react";

declare namespace YT {
  class Player {
    constructor(
      element: HTMLElement | string,
      options: {
        videoId: string;
        width?: number;
        height?: number;
        playerVars?: {
          autoplay?: 0 | 1;
          mute?: 0 | 1;
        };
      }
    );
    destroy(): void;
  }
}

declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface EmbedProps {
  videoId: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
  className?: string;
}

const loadYouTubeAPI = (): Promise<void> => {
  return new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve();
      return;
    }

    const existingScript = document.getElementById("youtube-api");
    if (existingScript) {
      if (window.onYouTubeIframeAPIReady) {
        const originalCallback = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          originalCallback();
          resolve();
        };
      } else {
        window.onYouTubeIframeAPIReady = resolve;
      }
      return;
    }

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.id = "youtube-api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = resolve;
  });
};

const YouTubeEmbed: React.FC<EmbedProps> = ({
  videoId,
  width,
  height,
  autoplay = false,
  className = "",
}) => {
  const playerRef = useRef<YT.Player | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAPIReady, setIsAPIReady] = useState(false);

  useEffect(() => {
    loadYouTubeAPI().then(() => setIsAPIReady(true));
  }, []);

  useEffect(() => {
    if (isAPIReady && containerRef.current) {
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: videoId,
        width: width,
        height: height,
        playerVars: {
          autoplay: autoplay ? 1 : 0,
          mute: autoplay ? 1 : 0,
        },
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [isAPIReady, videoId, width, height, autoplay]);

  return <div ref={containerRef} className={className}></div>;
};

export default YouTubeEmbed;
