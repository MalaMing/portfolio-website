import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ProjectCard } from "../Project-Card";
import { SlideButton } from "../SlideButton";

export function ProjectCardGroup() {
  const [isWide, setIsWide] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  type ProjectCardType = {
    title: string;
    description: string;
    coverImage: string;
    technologies: string[];
    gradientColor: string;
  };

  const cards: ProjectCardType[] = [
    {
      title: "Tailor Management System Project",
      description:
        "Developed a custom tailoring shop management system with order tracking and customer to place their order.",
      coverImage: "/images/projects/kanok/cover.png",
      technologies: [
        "Figma",
        "UX/UI",
        "React Native",
        "Expo",
        "Go Fiber",
        "E-Commerce",
        "Fashion",
        "Development",
      ],
      gradientColor: "/images/projects/kanok/gradient.svg",
    },
    {
      title: "PRISM: Smart Inventory & Sales Forecastt",
      description:
        "Business management app for unified stock & sales tracking with AI forecasting.",
      coverImage: "/images/projects/prism/cover.png",
      technologies: ["Figma", "UX/UI", "Prototype", "Business Management"],
      gradientColor: "/images/projects/prism/gradient.svg",
    },
    {
      title: "Party Food Calculator",
      description:
        "Food ordering and bill-splitting calculator for solo or group dining.",
      coverImage: "/images/projects/party_cal/cover.png",
      technologies: ["Figma", "UX/UI", "Next.js", "Food", "Development"],
      gradientColor: "/images/projects/party_cal/gradient.svg",
    },
    {
      title: "SCB Mobile Banking Home Screen-Redesign",
      description:
        "Home screen design for quick balance check, scan to pay, and everyday actions.",
      coverImage: "/images/projects/scb_re/cover.png",
      technologies: ["Figma", "UX/UI", "Mobile Banking"],
      gradientColor: "/images/projects/scb_re/gradient.svg",
    },
    {
      title: "CMCS: Chinese Management Clinic System Project",
      description:
        "Designed a clinic system to manage patient records, appointments, and billing with Figma Prototype",
      coverImage: "/images/projects/cmcs/cover.png",
      technologies: ["Figma", "UX/UI", "Prototype", "Health"],
      gradientColor: "/images/projects/cmcs/gradient.svg",
    },
    {
      title: "Event Booking App Project",
      description:
        "Developed a landing page to present second-hand clothing items and drive user engagement.",
      coverImage: "/images/projects/event_book/cover.png",
      technologies: [
        "Figma",
        "UX/UI",
        "Java",
        "JavaFX",
        "CSS",
        "Booking",
        "Development",
      ],
      gradientColor: "/images/projects/event_book/gradient.svg",
    },
    {
      title: "POS: Application for Buffet Restaurant",
      description:
        "For small buffet restaurants for manage orders, customer ordering, table reservations, and payments.",
      coverImage: "/images/projects/POS/cover.png",
      technologies: [
        "Figma",
        "UX/UI",
        "Prototype",
        "TypeScript",
        "Go Fiber",
        "POS",
        "Food",
        "Development",
      ],
      gradientColor: "/images/projects/POS/gradient.svg",
    },
    {
      title: "Second-Handed Clothes Landing Page",
      description:
        "Developed a landing page to present second-hand clothing items and drive user engagement.",
      coverImage: "/images/projects/shop_landing/cover.png",
      technologies: ["HTML", "CSS", "Javascript", "Fashion", "Development"],
      gradientColor: "/images/projects/shop_landing/gradient.svg",
    },
    {
      title: "CS Alumni System",
      description:
        "Designed a website for the Computer Science Alumni Association.",
      coverImage: "/images/projects/alumni/cover.png",
      technologies: ["Figma", "UX/UI", "Prototype", "Education"],
      gradientColor: "/images/projects/alumni/gradient.svg",
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
      <div className="flex flex-row gap-6 ">
        {cards.map((c: ProjectCardType, i: number) => (
          <ProjectCard key={i} {...c} />
        ))}
      </div>
    );
  }

  // ✅ ที่เหลือจะเป็น carousel เท่านั้น
  return (
    <div className="flex flex-col gap-6">
      <div className="relative w-full overflow-hidden">
        {/* Track */}
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
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 pr-6"
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

      {/* ปุ่มเลื่อน */}
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
          disabled={currentIndex >= cards.length - 3}
        />
      </motion.div>
    </div>
  );
}
