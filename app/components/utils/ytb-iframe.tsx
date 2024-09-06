"use client";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string | HTMLElement,
        options: {
          videoId: string;
          width: number;
          height: number;
          playerVars?: {
            autoplay?: 0 | 1;
            mute?: 0 | 1;
          };
        }
      ) => {
        destroy: () => void;
      };
    };
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

const YouTubeEmbed: React.FC<EmbedProps> = ({
  videoId,
  width = 560,
  height = 330,
  autoplay = false,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [isAPIReady, setIsAPIReady] = useState(false);

  useEffect(() => {
    const loadYouTubeAPI = () => {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    };

    if (!window.YT) {
      loadYouTubeAPI();
      window.onYouTubeIframeAPIReady = () => setIsAPIReady(true);
    } else {
      setIsAPIReady(true);
    }

    return () => {
      window.onYouTubeIframeAPIReady = () => {};
    };
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
      }
    };
  }, [isAPIReady, videoId, width, height, autoplay]);

  return <div ref={containerRef} className={className}></div>;
};

export default YouTubeEmbed;
