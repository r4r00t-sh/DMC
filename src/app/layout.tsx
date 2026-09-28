import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const praktika = localFont({
  src: "../../public/fonts/Praktika-Light.otf",
  variable: "--font-praktika",
  display: "swap",
  weight: "300",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Winsora — Dubai-based Destination Management Company",
  description:
    "Dubai HQ DMC providing ground handling, local expertise and destination operations for tour operators, travel agencies and corporate planners across Dubai.",
  openGraph: {
    title: "Winsora — Dubai-based Destination Management Company",
    description:
      "Your partner on the ground from Dubai. Destination management for operators, agencies and MICE planners.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={praktika.variable}>
      <body className="bg-canvas font-body text-ink antialiased">
        <SmoothScrollProvider>
          <CustomCursor />
          <Navigation />
          <main className="min-w-0">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
