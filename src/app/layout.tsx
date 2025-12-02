import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Prasad Yeole",
  description: "MAC-OS Style Portfolio",
  // icons: {
  //   icon: "/icon.png",
  // },
  // openGraph: {
  //   title: "Portfolio - Prasad Yeole",
  //   description: "MAC-OS Style Portfolio",
  //   images: ["/icon.png"],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Portfolio - Prasad Yeole",
  //   description: "MAC-OS Style Portfolio",
  //   images: ["/icon.png"],
  // },
  // metadataBase: new URL("https://prasadyeole.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
