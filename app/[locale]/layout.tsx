export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
