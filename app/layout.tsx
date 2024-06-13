/**
 * @fileoverview This file contains the layout component for the application.
 * It exports the `RootLayout` component which wraps the entire application content.
 * The layout includes a navbar, footer, and tabbar.
 */

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/components/ui/navbar";
import { Tabbar } from "@/src/components/ui/tabbar";
import { Footer } from "@/src/components/ui/footer";
import { cn } from "@/src/lib/utils";
import prismaClient from "@/src/lib/db";
import { Providers } from "@/src/components/Providers/Providers";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "15Secondes";
const APP_DEFAULT_TITLE = "15Secondes";
const APP_TITLE_TEMPLATE = "%s - 15Secondes";
const APP_DESCRIPTION = "Best PWA app in the world!";

/**
 * The metadata for the application.
 */
export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

/**
 * The viewport configuration for the application.
 */
export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

/**
 * The Prisma client instance.
 */
export const prisma = prismaClient;

/**
 * The root layout component that wraps the entire application content.
 * It includes a navbar, footer, and tabbar.
 * @param children - The child components to be rendered within the layout.
 * @returns The rendered layout component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <meta name="robots" content="noindex"></meta>
      <body className={cn(inter.className, "mb-[calc(var(--footer-height)+var(--footer-height)/2)]")}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Tabbar />
        </Providers>
      </body>
    </html>
  );
}
