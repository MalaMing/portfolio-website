
interface TabsItemProps {
  icon: string;
  label: string;
}

export function TabsItem({ icon, label }: TabsItemProps) {
  return (
    <div className="flex flex-col gap-2.5 items-center">
      <span className={icon} style={{ width: "40px", height: "40px", color: "var(--icon-primary)" }}></span>
      <p className="text-base font-normal text-[var(--shared-label-primary)]">{label}</p>
    </div>
  );
}