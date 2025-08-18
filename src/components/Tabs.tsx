import * as Tabs from "@radix-ui/react-tabs";
import { TabsItem } from "./content/TabsContent";
import { Button } from "./Button";

export function TabsSection() {
  return (
    <div className="flex w-full justify-center">
      <Tabs.Root className="w-full space-y-24" defaultValue="Computer Languages">
        <Tabs.List className="flex flex-row justify-center">
          <div className="bg-[var(--tabs-shared-bg)] rounded-[var(--tabs-shared-radius)] border border-[var(--tabs-shared-border) p-0.5">
            {["Computer Languages", "Frameworks", "Tools"].map((tab) => (
              <Tabs.Trigger
                key={tab}
                value={tab}
                className="rounded-[var(--tabs-active-shared-radius)] text-base font-medium transition-colors
              data-[state=active]:bg-[var(--tabs-active-state-default-bg)]
              data-[state=active]:text-[var(--tabs-active-state-default-label)]
              data-[state=inactive]:bg-transparent
              data-[state=inactive]:text-[var(--tabs-normal-state-default-label)]
              data-[state=inactive]:hover:text-[var(--tabs-normal-state-hovered-label)]
              focus:outline-none px-4 py-2"
              >
                {tab}
              </Tabs.Trigger>
            ))}
          </div>
        </Tabs.List>

        {/* Content เต็มหน้าจอ */}
        <Tabs.Content className="w-full grid grid-cols-3 space-y-14 " value="Computer Languages">
            <TabsItem icon="icon-[carbon--logo-python]" label="Python" />
            <TabsItem icon="icon-[simple-icons--javascript]" label="JavaScript" />
            <TabsItem icon="icon-[simple-icons--typescript]" label="TypeScript" />
            <TabsItem icon="icon-[simple-icons--html5]" label="HTML" />
            <TabsItem icon="icon-[simple-icons--css3]" label="CSS" />
            <TabsItem icon="icon-[ri--java-fill]" label="Java" />
            <TabsItem icon="icon-[streamline-logos--c-language-logo-solid]" label="C" />
            <TabsItem icon="icon-[streamline-logos--c-plus-language-logo-solid]" label="C++" />
            <TabsItem icon="icon-[tabler--sql]" label="SQL" />
            <TabsItem icon="icon-[lineicons--go]" label="GO" />
        </Tabs.Content>

        <Tabs.Content className="w-full grid grid-cols-3 space-y-14" value="Frameworks">
             <TabsItem icon="icon-[devicon--nextjs]" label="Next.js" />
            <TabsItem icon="icon-[mdi--react]" label="React Native" />
            <TabsItem icon="icon-[mdi--react]" label="React.js" />
            <TabsItem icon="icon-[ri--java-fill]" label="JavaFX" />
            <TabsItem icon="icon-[lineicons--go]" label="GO Fiber" />
            <TabsItem icon="icon-[simple-icons--spring]" label="Spring Boot" />
        </Tabs.Content>

        <Tabs.Content className="w-full grid grid-cols-3 space-y-14" value="Tools">
           <TabsItem icon="icon-[solar--figma-bold-duotone]" label="Figma" />
            <TabsItem icon="icon-[lineicons--canva]" label="Canva" />
            <TabsItem icon="icon-[simple-icons--googlecolab]" label="Google Colab" />
            <TabsItem icon="icon-[mdi--git]" label="Git" />
            <TabsItem icon="icon-[lineicons--mysql]" label="MySQL" />
            <TabsItem icon="icon-[lineicons--postman]" label="Postman" />
            <TabsItem icon="icon-[lineicons--xampp]" label="xampp" />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
