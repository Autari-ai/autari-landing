import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "autari — Hire work, not headcount",
  description:
    "An AI employee for the role you need. It works in your tools, does the job, and only comes to you when it is genuinely stuck.",
  openGraph: {
    title: "autari — Hire work, not headcount",
    description:
      "An AI employee for the role you need — built for your firm, working from day one.",
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
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans text-bark bg-cream antialiased">
        {children}
      </body>
    </html>
  );
}
