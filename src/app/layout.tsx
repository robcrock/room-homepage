import type { Metadata } from "next";
import { League_Spartan as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-spartan",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Room homepage",
  description: "My solution to the Frontend Mentor challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-spartan min-h-screen bg-background antialiased",
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
