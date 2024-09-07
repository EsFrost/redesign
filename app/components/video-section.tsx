import React from "react";
import YouTubeEmbed from "./utils/ytb-iframe";
import { Heart } from "lucide-react";
import ImageCarousel from "./utils/carousel";

export const VideoSection = () => {
  return (
    <section
      className="min-h-screen py-16 lg:mt-0 bg-[url('/video-section.png')]"
      id="samples"
    >
      <div className="mt-[334px] md:mt-0">
        <div className="flex justify-center items-center">
          <div className="border border-[#e9a257] h-0 w-12"></div>
          <Heart size={36} className="mx-4 text-[#e9a257]" />
          <div className="border border-[#e9a257] h-0 w-12"></div>
        </div>

        <div className="text-center mt-8 px-4 md:w-1/2 md:ml-[50%] md:-translate-x-[50%]">
          <h3 className="text-3xl text-[#e9a257]">
            Αναλαμβάνουμε τον Γάμο ή την βάπτιση σας
          </h3>
          <p className="mt-4 lg:text-xl italic text-gray-500">
            καθώς και οποιαδήποτε άλλη εκδήλωση, όπως εγκαίνια, γενέθλια,
            συνέδρια, με πλήρη φωτογραφική και βίντεο κάλυψη. Εάν το επιθυμείτε,
            μπορούμε να βιντεοσκοπήσουμε και να φωτογραφήσουμε απο ψηλά με
            επαγγελματικό drone, δημιουργώντας ενα ξεχωριστό αποτέλεσμα!
          </p>
        </div>
        <div className="mt-8">
          <ImageCarousel
            images={[
              "/hero-1.jpg",
              "/hero-2.jpg",
              "/hero-3.jpg",
              "/flower-3.png",
              "/flower-2.png",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 md:flex-row md:gap-0 md:justify-normal md:items-start max-w-screen mt-12">
        <div className="flex flex-col md:w-1/2 px-4">
          <div className="flex justify-center items-center">
            <div className="border border-[#e9a257] h-0 w-12"></div>
            <Heart size={36} className="mx-4 text-[#e9a257]" />
            <div className="border border-[#e9a257] h-0 w-12"></div>
          </div>

          <div className="text-center mt-8 px-4">
            <h3 className="text-3xl text-[#e9a257]">John & Jane</h3>
            <p className="mt-4 xl:text-xl italic text-gray-500">
              Ένας γάμος που θα μας μείνει αξέχαστος, γεμάτος ζωντάνια, κέφι
              αλλά και μοναδικά πλανα απο γή και αέρα!
            </p>
          </div>
          <div className="mt-4 max-w-screen md:mx-auto md:mt-12">
            <YouTubeEmbed
              videoId="RzVvThhjAKw"
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
            <h3 className="text-3xl text-[#e9a257]">Jane-Doe</h3>
            <p className="mt-4 xl:text-xl italic text-gray-500">
              Ενα υπέροχο μωρό, γεμάτο ζωντάνια και περιέργεια, μας χάρισε
              αξέχαστες στιγμές στην βάπτιση της!
            </p>
          </div>
          <div className="mt-4 max-w-screen md:mx-auto md:mt-12">
            <YouTubeEmbed
              videoId="KLuTLF3x9sA"
              width={560}
              height={330}
              className="max-w-full min-h-full px-4 overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
