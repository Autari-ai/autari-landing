import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "autari | Hire work, not headcount",
  description:
    "An AI employee for the role you need. It works in your tools, does the job, and only comes to you when it is genuinely stuck.",
  openGraph: {
    title: "autari | Hire work, not headcount",
    description:
      "An AI employee for the role you need, built for your firm and working from day one.",
    url: "https://autari.co.uk",
    siteName: "autari",
    type: "website",
  },
  icons: { icon: "/mark.png" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="font-sans text-bark bg-cream antialiased">
        {children}
      </body>
    </html>
  );
}
