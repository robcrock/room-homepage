"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExpandingUnderline from "@/components/ExpandingUnderline";

type NavItem = "Home" | "Shop" | "About" | "Contact";
const NAV_ITEMS: NavItem[] = ["Home", "Shop", "About", "Contact"];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      {/* Top Half */}
      <div className="flex flex-col md:flex-row">
        {/* The follow div contains the hero image, navigation, and previous/next slide buttons */}
        <div className="relative h-[360px] w-full md:h-[534px] md:w-[840px]">
          <Navigation NAV_ITEMS={NAV_ITEMS} setIsMenuOpen={setIsMenuOpen} />
          <MobileMenu
            NAV_ITEMS={NAV_ITEMS}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
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
          <div className="absolute bottom-0 right-0 flex flex-row md:translate-x-full">
            <SlideButton
              direction="previous"
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? slides.length - 1 : prev - 1,
                )
              }
            />
            <SlideButton
              direction="next"
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === slides.length - 1 ? 0 : prev + 1,
                )
              }
            />
          </div>
        </div>
        <div className="w-full px-6 py-[60px] md:w-[41%] md:px-[100px] md:pt-[120px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="leading-auto mb-[15px] text-[40px] font-semibold !leading-[.95] -tracking-[2px] md:mb-[18px] md:text-5xl">
                {slides[currentSlide].title}
              </h1>
              <p className="tracking-0 text-fem-darkGray mb-[41px] text-[16px] font-medium leading-[22px] md:mb-[26px]">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-row items-center">
            <button
              className="focus:ring-fem-darkGray group inline-flex items-center gap-4 transition-colors focus:outline-none focus:ring-2"
              aria-label="Shop now"
            >
              <span className="group-hover:text-fem-darkGray group-focus:text-fem-darkGray text-[15px] font-medium uppercase tracking-[12px] transition-colors duration-300">
                Shop now
              </span>
              <Image
                src="/images/icon-arrow.svg"
                alt=""
                width={40}
                height={12}
                className="max-h-[12px] transition-transform duration-300 group-hover:translate-x-1 group-hover:brightness-50 group-focus:translate-x-1 group-focus:brightness-50"
              />
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Half */}
      <div className="flex flex-col md:flex-row">
        <Image
          src="/images/image-about-dark.jpg"
          alt="hero"
          width={420}
          height={266}
        />
        <div className="w-full px-8 py-[50px] md:w-[580px] md:px-12">
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

type NavigationProps = {
  NAV_ITEMS: NavItem[];
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

function Navigation({ NAV_ITEMS, setIsMenuOpen }: NavigationProps) {
  return (
    <nav className="absolute top-12 z-10 flex w-full items-center justify-center gap-14 md:left-16 md:top-16 md:justify-start">
      <MobileNavButton setIsMenuOpen={setIsMenuOpen} />
      <Logo />
      <DesktopNavItems NAV_ITEMS={NAV_ITEMS} />
    </nav>
  );
}

type MobileNavButtonProps = {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

function MobileNavButton({ setIsMenuOpen }: MobileNavButtonProps) {
  return (
    <button
      className="absolute left-6 flex h-6 w-6 flex-row items-center justify-center gap-8 lg:hidden"
      onClick={() => setIsMenuOpen(true)}
    >
      <Image
        src="/images/icon-hamburger.svg"
        alt="hamburger"
        width={20}
        height={14}
      />
    </button>
  );
}

function Logo() {
  return (
    <Image
      src="/images/logo.svg"
      alt="logo"
      width={60}
      height={13}
      className="max-h-[13px]"
    />
  );
}

function DesktopNavItems({ NAV_ITEMS }: { NAV_ITEMS: NavItem[] }) {
  return (
    <ul className="text-fem-white hidden flex-row gap-8 text-base font-semibold md:flex">
      {NAV_ITEMS.map((item) => (
        <li key={item}>
          <ExpandingUnderline key={item}>{item}</ExpandingUnderline>
        </li>
      ))}
    </ul>
  );
}

function MobileMenu({
  NAV_ITEMS,
  isMenuOpen,
  setIsMenuOpen,
}: {
  NAV_ITEMS: NavItem[];
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}) {
  return (
    <div
      className={`bg-fem-black/50 fixed inset-0 z-50 flex h-screen w-screen transform flex-col transition-transform duration-300 ease-in-out md:hidden ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="bg-fem-white flex h-[110px] flex-col items-center justify-center">
        <div className="flex w-full items-center justify-between px-6">
          <CloseButton setIsMenuOpen={setIsMenuOpen} />
          <MobileNavItems NAV_ITEMS={NAV_ITEMS} />
        </div>
      </div>
    </div>
  );
}

type CloseButtonProps = {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

function CloseButton({ setIsMenuOpen }: CloseButtonProps) {
  return (
    <button
      className="hover:text-fem-black flex h-6 w-6 flex-row items-center justify-center text-white"
      onClick={() => setIsMenuOpen(false)}
    >
      <Image src="/images/icon-close.svg" alt="close" width={20} height={14} />
    </button>
  );
}

type MobileNavItemsProps = {
  NAV_ITEMS: NavItem[];
};

function MobileNavItems({ NAV_ITEMS }: MobileNavItemsProps) {
  return (
    <ul className="text-fem-black flex flex-row gap-8 font-semibold md:hidden lg:flex">
      {NAV_ITEMS.map((item) => (
        <li key={item}>
          <ExpandingUnderline key={item} className="bg-fem-black">
            {item}
          </ExpandingUnderline>
        </li>
      ))}
    </ul>
  );
}

function SlideButton({
  direction,
  onClick,
}: {
  direction: "previous" | "next";
  onClick: () => void;
}) {
  return (
    <button
      className={cn(
        "bg-fem-black hover:bg-fem-veryDarkGray flex h-[56px] w-[56px] items-center justify-center transition-colors md:h-[80px] md:w-[80px]",
      )}
      aria-label={`${direction} slide`}
      onClick={onClick}
    >
      <Image
        src={`/images/icon-angle-${direction === "previous" ? "left" : "right"}.svg`}
        alt=""
        width={12}
        height={24}
      />
    </button>
  );
}
