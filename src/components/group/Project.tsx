import { motion } from "motion/react";
import { useState } from "react";
import { ProjectCard } from "../ui/Project-Card";
import { SlideButton } from "../ui/SlideButton";
import { projectsData } from "@/data";

export function ProjectCardGroup() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const VISIBLE_CARDS = 3;
  const maxIndex = Math.max(0, projectsData.length - VISIBLE_CARDS);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + VISIBLE_CARDS, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - VISIBLE_CARDS, 0));
  };

    return (
    <div className="flex flex-col gap-10">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-full"
          animate={{
            x: `-${currentIndex * (100 / 3)}%`,
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
              className="flex-shrink-0 pr-5"
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
        className="flex justify-end gap-6"
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
          disabled={currentIndex >= projectsData.length - 3}
        />
      </motion.div>
    </div>
  );
}
