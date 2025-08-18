"use client";

import { useEffect, useState } from "react";
import { SquareCard } from "../SquareCard";

export function UXUIGroup() {
  const [isWide, setIsWide] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  const cards = [
    {
      icon: "design_services",
      title: "Research & UX",
      body: "User research, experience mapping, and information architecture for optimal usability.",
    },
    {
      icon: "design_services",
      title: "Design System",
      body: "Created Figma design tokens for spacing, color, typography, border, and radius to speed up workflow and ease dev handoff.",
    },
    {
      icon: "design_services",
      title: "Visual Design",
      body: "Designed wireframes (low–hi-fi) and maintained scalable Figma components for consistency and speed.",
    },
    {
      icon: "design_services",
      title: "Prototyping",
      body: "Prototyping with clear user flows and intuitive layouts.",
    },
    {
      icon: "design_services",
      title: "Technical & Handoff Skills",
      body: "Design-to-code handoff with Figma tokens and basic front-end skills (HTML, CSS, JS).",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsWide(width > 2100);
      
      // Determine number of visible cards based on screen width
      if (width >= 1536) setVisibleCards(3);      // xl breakpoint
      else if (width >= 1024) setVisibleCards(2); // lg breakpoint
      else setVisibleCards(1);                    // mobile
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, cards.length - visibleCards);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 3, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 3, 0));
  };

  if (isWide) {
    // ใช้ flex ปกติเมื่อหน้าจอกว้างกว่า 2100px
    return (
      <div className="flex flex-row gap-6 flex-wrap">
        {cards.map((c, i) => (
          <SquareCard key={i} {...c} />
        ))}
      </div>
    );
  }

  // ใช้ carousel เมื่อหน้าจอแคบกว่า 2100px
  return (
    <div className="flex flex-col gap-6">
      <div className="relative w-full overflow-hidden">
        {/* Track */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
          }}
        >
          {cards.map((c, i) => (
            <div key={i} className="flex-shrink-0 pr-6">
              <SquareCard {...c} />
            </div>
          ))}
        </div>
      </div>

      {/* ปุ่มเลื่อน */}
      <div className="flex justify-end gap-2">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= cards.length - 3}
          className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
