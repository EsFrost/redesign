import React from "react";
import YouTubeEmbed from "./utils/ytb-iframe";
import { Heart } from "lucide-react";

export const VideoSection = () => {
  return (
    <div className="min-h-screen py-16 lg:mt-0 bg-[url('/video-section.png')]">
      <div className="flex flex-col md:flex-row mt-[334px] md:mt-0 max-w-screen">
        <div className="flex flex-col w-1/2 px-4">
          <div className="flex justify-center items-center">
            <div className="border border-black h-0 w-12"></div>
            <Heart size={36} className="mx-4" />
            <div className="border border-black h-0 w-12"></div>
          </div>

          <div className="">
            <h3>John & Jane</h3>
            <p>
              Ένας γάμος που θα μας μείνει αξέχαστος, γεμάτος ζωντάνια, κέφι
              αλλά και μοναδικά πλανα απο γή και αέρα!
            </p>
          </div>
          {/* <YouTubeEmbed
            videoId="KLuTLF3x9sA"
            width={560}
            height={330}
            className="p-4 max-w-full min-h-full"
          /> */}
          {/* oa1qKT-VJvo */}
        </div>

        <div className="flex flex-col w-1/2 px-4">
          <div className="flex justify-center items-center">
            <div className="border border-black h-0 w-12"></div>
            <Heart size={36} className="mx-4" />
            <div className="border border-black h-0 w-12"></div>
          </div>

          <div className="">
            <h3>John & Jane</h3>
            <p>
              Ένας γάμος που θα μας μείνει αξέχαστος, γεμάτος ζωντάνια, κέφι
              αλλά και μοναδικά πλανα απο γή και αέρα!
            </p>
          </div>
          {/* <YouTubeEmbed
            videoId="KLuTLF3x9sA"
            width={560}
            height={330}
            className="p-4 max-w-full min-h-full"
          /> */}
          {/* oa1qKT-VJvo */}
        </div>
      </div>
    </div>
  );
};
