import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ScrollProgress } from "@/components/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";
import { TopNav } from "@/components/top-nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Управление жизненным циклом компании — Адизес × Коллинз × Спиральная динамика",
  description:
    "Домашнее задание: кривая жизненного цикла, стадии Адизеса, уровни лидерства Коллинза, спиральная динамика.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <ScrollProgress />
          <a className="skip-link" href="#section-1">
            Перейти к содержанию
          </a>
          <TopNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
