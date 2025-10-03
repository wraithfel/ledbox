import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ledbox - Эксперты в освещении",
  description: "Профессиональное проектирование и качественные решения освещения для бизнеса",
  openGraph: {
    title: "LEDBOX — эксперты в освещении",
    description: "Проектирование, светорасчет, архитектурное и промышленное освещение",
    url: "https://ledbox-experts.ru",
    siteName: "LEDBOX",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={geistSans.className}>{children}</body>
    </html>
  );
}
