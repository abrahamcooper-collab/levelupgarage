import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Level Up Garage Door Service | Garage Door Repair & Installation in Northwest Georgia",
  description: "Premium garage door opener repair, maintenance, and installation across Northwest Georgia. Same-day service, upfront pricing, licensed & insured. Call (770) 343-3361.",
  icons: {
    icon: "/logo.PNG",
    shortcut: "/logo.PNG",
    apple: "/logo.PNG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <link rel="icon" href="/logo.PNG" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.PNG" />
      </head>
      <body>{children}</body>
    </html>
  );
}
