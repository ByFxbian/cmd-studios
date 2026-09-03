export function LegalHero({ title }: { title: string }) {
  return (
    <header className="border-b border-[var(--color-navbar-border)] bg-[var(--color-page-bg)] pt-24">
      <div className="site-container flex min-h-[38dvh] items-end py-12 md:min-h-[44dvh] md:py-16">
        <h1 className="max-w-[16ch] text-balance text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.9] text-[var(--color-heading)]">{title}</h1>
      </div>
    </header>
  );
}
