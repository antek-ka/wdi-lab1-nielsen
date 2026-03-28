import type { Metadata } from "next";
import { JetBrains_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Nielsen's Heuristics",
  description:
    "10 Usability Heuristics for User Interface Design by Jakob Nielsen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        jetbrainsMono.variable,
        roboto.variable,
      )}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
