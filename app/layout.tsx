import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";

/**
 * Bricolage Grotesque font configuration
 * Used as the primary font family throughout the application
 */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

/**
 * Application metadata for SEO optimization
 * Defines the default title and description for all pages
 */
export const metadata: Metadata = {
  title: "Converso",
  description: "Real-time AI Teaching Platform",
};

/**
 * Root layout component that wraps all pages
 * Provides global providers and consistent layout structure
 * 
 * @param children - Child components to be rendered within the layout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>
        <ClerkProvider appearance={{ variables: { colorPrimary: '#fe5933' }} }>
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
