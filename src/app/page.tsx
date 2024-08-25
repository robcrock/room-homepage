"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/desktop-image-hero-1.jpg",
      title: "Discover innovative ways to decorate",
      description:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      image: "/images/desktop-image-hero-2.jpg",
      title: "We are available all across the globe",
      description:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      image: "/images/desktop-image-hero-3.jpg",
      title: "Manufactured with the best materials",
      description:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Top Row */}
      <div className="flex flex-row">
        <div className="relative h-[534px] w-[840px]">
          <nav className="absolute left-16 top-16 z-10 flex items-center gap-14">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={60}
              height={13}
              className="max-h-[13px]"
            />
            <ul className="flex flex-row gap-8">
              <li className="text-[16px] font-semibold lowercase text-white">
                Home
              </li>
              <li className="text-[16px] font-semibold lowercase text-white">
                Shop
              </li>
              <li className="text-[16px] font-semibold lowercase text-white">
                About
              </li>
              <li className="text-[16px] font-semibold lowercase text-white">
                Contact
              </li>
            </ul>
          </nav>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={slides[currentSlide].image}
                alt="hero"
                fill
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-0 right-0 flex translate-x-full flex-row">
            <button
              className={cn(
                "bg-fem-black hover:bg-fem-veryDarkGray flex h-[80px] w-[80px] items-center justify-center transition-colors",
              )}
              aria-label="Previous slide"
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? slides.length - 1 : prev - 1,
                )
              }
            >
              <Image
                src="/images/icon-angle-left.svg"
                alt=""
                width={12}
                height={24}
              />
            </button>
            <button
              className={cn(
                "bg-fem-black hover:bg-fem-veryDarkGray flex h-[80px] w-[80px] items-center justify-center transition-colors",
              )}
              aria-label="Next slide"
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === slides.length - 1 ? 0 : prev + 1,
                )
              }
            >
              <Image
                src="/images/icon-angle-right.svg"
                alt=""
                width={12}
                height={24}
              />
            </button>
          </div>
        </div>
        <div className="w-[41%] px-[100px] pt-[120px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="mb-[18px] text-5xl font-semibold -tracking-[2px]">
                {slides[currentSlide].title}
              </h1>
              <p className="tracking-0 text-fem-darkGray mb-[26px] text-[16px] font-medium leading-[22px]">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-row items-center">
            <button className="hover:text-fem-veryDarkGray group flex items-center gap-4 transition-colors">
              <span className="text-[15px] font-medium uppercase tracking-[12px]">
                Shop now
              </span>
              <Image
                src="/images/icon-arrow.svg"
                alt="arrow"
                width={40}
                height={12}
                className="max-h-[12px] transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Row */}
      <div className="flex flex-row">
        <Image
          src="/images/image-about-dark.jpg"
          alt="hero"
          width={420}
          height={266}
        />
        <div className="w-[580px] px-12 py-[50px]">
          <h1 className="mb-4 text-base font-bold uppercase leading-[22px] tracking-[6px]">
            About our furniture
          </h1>
          <p className="text-fem-darkGray text-base font-medium leading-[22px] -tracking-[0.33px]">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <Image
          src="/images/image-about-light.jpg"
          alt="hero"
          width={440}
          height={266}
        />
      </div>
    </main>
  );
}
