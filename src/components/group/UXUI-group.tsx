"use client";

import { useEffect, useState } from "react";
import { SquareCard } from "../SquareCard";
import { SlideButton } from "../SlideButton";

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
      <div className="flex flex-row gap-6">
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
      <div className="flex justify-end gap-6">
        <SlideButton
          icon="chevron_left"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        />
        <SlideButton
          icon="chevron_right"
          onClick={handleNext}
          disabled={currentIndex >= cards.length - 3}
        />
      </div>
    </div>
  );
}
