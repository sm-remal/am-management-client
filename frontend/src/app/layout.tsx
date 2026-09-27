import type { Metadata } from "next";
import { Archivo, Sora } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/shared/SiteChrome";
import {
  defaultPublicSettings,
  fetchPublicSettings,
} from "@/features/settings/public-settings";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const generateMetadata = async (): Promise<Metadata> => {
  try {
    const settings = await fetchPublicSettings({ cache: "no-store" });

    return {
      title: settings.seoTitle,
      description: settings.seoDescription,
    };
  } catch {
    return {
      title: defaultPublicSettings.seoTitle,
      description: defaultPublicSettings.seoDescription,
    };
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${sora.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex flex-col min-h-screen">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
