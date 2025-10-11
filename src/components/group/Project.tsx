import { motion } from "motion/react";
import { useState } from "react";
import { ProjectCard } from "../ui/Project-Card";
import { SlideButton } from "../ui/SlideButton";
import { projectsData } from "@/data";

export function ProjectCardGroup() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // mobile - show 1 card
      if (window.innerWidth < 1024) return 2; // tablet - show 2 cards
      return 3; // desktop - show 3 cards max
    }
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());
  
  // Ensure we don't show more cards than exist in projectsData
  const actualVisibleCards = Math.min(visibleCards, projectsData.length);
  const maxIndex = Math.max(0, projectsData.length - actualVisibleCards);

  // Update visible cards on resize
  useState(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const newVisibleCards = getVisibleCards();
        setVisibleCards(newVisibleCards);
        setCurrentIndex(prev => Math.min(prev, Math.max(0, projectsData.length - newVisibleCards)));
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  });

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const cardWidth = 100 / actualVisibleCards;

  return (
    <div className="flex flex-col gap-5">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex flex-full gap-5"
          animate={{
            x: `-${currentIndex * cardWidth}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 30,
          }}
        >
          {projectsData.map((card, i) => (
            <motion.div
              key={i}
              style={{ width: `calc(${cardWidth}% - ${(actualVisibleCards - 1) * 20 / actualVisibleCards}px)` }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <ProjectCard {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="flex justify-center sm:justify-end gap-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <SlideButton
          icon="chevron_left"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        />
        <SlideButton
          icon="chevron_right"
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
        />
      </motion.div>
    </div>
  );
}
