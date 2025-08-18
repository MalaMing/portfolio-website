"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TabsItem } from "./content/TabsContent";

const tabs = [
  {
    id: "Computer Languages",
    content: [
      { icon: "icon-[carbon--logo-python]", label: "Python" },
      { icon: "icon-[simple-icons--javascript]", label: "JavaScript" },
      { icon: "icon-[simple-icons--typescript]", label: "TypeScript" },
      { icon: "icon-[simple-icons--html5]", label: "HTML" },
      { icon: "icon-[simple-icons--css3]", label: "CSS" },
      { icon: "icon-[ri--java-fill]", label: "Java" },
      { icon: "icon-[streamline-logos--c-language-logo-solid]", label: "C" },
      { icon: "icon-[streamline-logos--c-plus-language-logo-solid]", label: "C++" },
      { icon: "icon-[tabler--sql]", label: "SQL" },
      { icon: "icon-[lineicons--go]", label: "GO" }
    ]
  },
  {
    id: "Frameworks",
    content: [
      { icon: "icon-[devicon--nextjs]", label: "Next.js" },
      { icon: "icon-[mdi--react]", label: "React Native" },
      { icon: "icon-[mdi--react]", label: "React.js" },
      { icon: "icon-[ri--java-fill]", label: "JavaFX" },
      { icon: "icon-[lineicons--go]", label: "GO Fiber" },
      { icon: "icon-[simple-icons--spring]", label: "Spring Boot" }
    ]
  },
  {
    id: "Tools",
    content: [
      { icon: "icon-[solar--figma-bold-duotone]", label: "Figma" },
      { icon: "icon-[lineicons--canva]", label: "Canva" },
      { icon: "icon-[simple-icons--googlecolab]", label: "Google Colab" },
      { icon: "icon-[mdi--git]", label: "Git" },
      { icon: "icon-[lineicons--mysql]", label: "MySQL" },
      { icon: "icon-[lineicons--postman]", label: "Postman" },
      { icon: "icon-[lineicons--xampp]", label: "xampp" }
    ]
  }
];

export function TabsSection() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="flex w-full justify-center">
      <div className="w-full space-y-24 ">
        <nav className="flex flex-row justify-center">
          <div className="bg-[var(--tabs-shared-bg)] rounded-[var(--tabs-shared-radius)] border border-[var(--tabs-shared-border)] p-0.5 relative flex">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setSelectedTab(tab)}
                className={`relative rounded-[var(--tabs-active-shared-radius)] text-base font-medium px-4 py-2
                  ${selectedTab.id === tab.id
                    ? 'text-[var(--tabs-active-state-default-label)]'
                    : 'text-[var(--tabs-normal-state-default-label)] hover:text-[var(--tabs-normal-state-hovered-label)]'
                  }`}
              >
                {selectedTab.id === tab.id && (
                  <motion.div
                    className="absolute inset-0 bg-[var(--tabs-active-state-default-bg)] rounded-[var(--tabs-active-shared-radius)]"
                    layoutId="active"
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 30
                    }}
                  />
                )}
                <span className="relative z-10">{tab.id}</span>
              </motion.button>
            ))}
          </div>
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab.id}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full grid grid-cols-3 gap-14 max-w-[1040px] mx-auto"
          >
            {selectedTab.content.map((item, index) => (
              <TabsItem key={index} icon={item.icon} label={item.label} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
