export function Header({text}:{text:string}) {
  return (
    <header>
      <h1 className="text-5xl font-bold text-[var(--shared-label-primary)]">{text}</h1>
    </header>
  );
}