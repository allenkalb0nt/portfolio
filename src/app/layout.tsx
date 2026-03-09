import type { Metadata } from "next";
import { Poppins, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/NavBar";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class">
          <NavBar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
