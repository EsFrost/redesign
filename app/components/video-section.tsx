import React from "react";
import YouTubeEmbed from "./utils/ytb-iframe";
import { Heart } from "lucide-react";

export const VideoSection = () => {
  return (
    <div className="min-h-screen py-16 lg:mt-0 bg-[url('/video-section.png')]">
      <div className="flex flex-col justify-center items-center gap-8 md:flex-row md:gap-0 md:justify-normal md:items-start mt-[334px] md:mt-0 max-w-screen">
        <div className="flex flex-col md:w-1/2 px-4">
          <div className="flex justify-center items-center">
            <div className="border border-[#e9a257] h-0 w-12"></div>
            <Heart size={36} className="mx-4 text-[#e9a257]" />
            <div className="border border-[#e9a257] h-0 w-12"></div>
          </div>

          <div className="text-center mt-8 px-4">
            <h3 className="text-3xl">John & Jane</h3>
            <p className="mt-4 lg:text-xl italic text-gray-500">
              Ένας γάμος που θα μας μείνει αξέχαστος, γεμάτος ζωντάνια, κέφι
              αλλά και μοναδικά πλανα απο γή και αέρα!
            </p>
          </div>
          <div className="mt-4 max-w-screen md:mx-auto md:mt-10">
            <YouTubeEmbed
              videoId="oa1qKT-VJvo"
              width={560}
              height={330}
              className="max-w-full min-h-full px-4 overflow-hidden"
            />
          </div>
        </div>

        <div className="flex flex-col md:w-1/2 px-4">
          <div className="flex justify-center items-center">
            <div className="border border-[#e9a257] h-0 w-12"></div>
            <Heart size={36} className="mx-4 text-[#e9a257]" />
            <div className="border border-[#e9a257] h-0 w-12"></div>
          </div>

          <div className="text-center mt-8 px-4">
            <h3 className="text-3xl">Jane-Doe</h3>
            <p className="mt-4 lg:text-xl italic text-gray-500">
              Ενα υπέροχο μωρό, γεμάτο ζωντάνια και περιέργεια, μας χάρισε
              αξέχαστες στιγμές στην βάπτιση της!
            </p>
          </div>
          <div className="mt-4 max-w-screen md:mx-auto md:mt-10">
            <YouTubeEmbed
              videoId="KLuTLF3x9sA"
              width={560}
              height={330}
              className="max-w-full min-h-full px-4 overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
