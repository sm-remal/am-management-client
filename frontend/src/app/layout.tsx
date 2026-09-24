import type { Metadata } from "next";
import "./globals.css";
import SiteChrome from "@/components/shared/SiteChrome";
import {
  defaultPublicSettings,
  fetchPublicSettings,
} from "@/features/settings/public-settings";

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
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="flex flex-col min-h-screen">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
