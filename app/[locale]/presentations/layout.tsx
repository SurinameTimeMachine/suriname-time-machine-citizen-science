export default function PresentationsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Presentation routes are full-bleed: no Navigation, no SiteFooter.
  // The deck shell owns the entire viewport.
  return (
    <div className="deck-root min-h-screen bg-(--deep-teal)">{children}</div>
  );
}
