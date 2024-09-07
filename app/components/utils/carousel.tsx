"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(1);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + slidesToShow >= images.length ? 0 : prevIndex + slidesToShow
      );
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex - slidesToShow < 0
          ? Math.max(images.length - slidesToShow, 0)
          : prevIndex - slidesToShow
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <>
      <div className="relative w-full max-w-[calc(100vw-40px)] mx-auto">
        <div className="flex overflow-hidden gap-4">
          {images
            .slice(currentIndex, currentIndex + slidesToShow)
            .map((image, index) => (
              <div
                key={currentIndex + index}
                className={`relative h-96 transition-opacity duration-500 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                } ${
                  slidesToShow === 1
                    ? "w-full"
                    : slidesToShow === 2
                    ? "w-[calc(50%-8px)]"
                    : "w-[calc(33.333%-10.667px)]"
                } cursor-pointer`}
                onClick={() => openModal(image)}
              >
                <Image
                  src={image}
                  alt={`Slide ${currentIndex + index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-white"
          aria-label="Previous slide"
          disabled={isTransitioning}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-white"
          aria-label="Next slide"
          disabled={isTransitioning}
        >
          <ChevronRight size={24} />
        </button>

        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(images.length / slidesToShow) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * slidesToShow)}
                className={`w-2 h-2 rounded-full mx-1 ${
                  index === Math.floor(currentIndex / slidesToShow)
                    ? "bg-[#e9a257]"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                disabled={isTransitioning}
              />
            )
          )}
        </div>
      </div>

      {modalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white z-10"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <Image
              src={selectedImage}
              alt="Full size image"
              layout="responsive"
              width={1920}
              height={1080}
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;
