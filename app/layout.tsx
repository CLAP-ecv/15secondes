import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/components/ui/navbar";
import { Tabbar } from "@/src/components/ui/tabbar";
import { Footer } from "@/src/components/ui/footer";
import { cn } from "@/src/lib/utils";
import { PrismaClient } from "@prisma/client";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "15Secondes";
const APP_DEFAULT_TITLE = "15Secondes";
const APP_TITLE_TEMPLATE = "%s - 15Secondes";
const APP_DESCRIPTION = "Best PWA app in the world!";

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

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};


export const prisma = new PrismaClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "mb-[calc(var(--footer-height)+var(--footer-height)/2)]")}>
        <Navbar />
        {children}
        <Footer />
        <Tabbar />
      </body>
    </html>
  );
}
