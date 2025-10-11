import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import "material-symbols";
import { Footer } from "@/components/section/footer";


const SFPro = localFont({
  src: [

    {
      path: "./font/SF-Pro-Text-Heavy.otf",
      weight: "800",
      style: "normal;",

    },
    {
      path: "./font/SF-Pro-Text-Bold.otf",
      weight: "700",
      style: "normal;",

    },
    {
      path: "./font/SF-Pro-Text-Semibold.otf",
      weight: "600",
      style: "normal;",

    },
    {
      path: "./font/SF-Pro-Text-Medium.otf",
      weight: "500",
      style: "normal;",
    },
    {
      path: "./font/SF-Pro-Text-Regular.otf",
      weight: "400",
      style: "normal;",
    },
  ]
});

export const metadata: Metadata = {
  title: "Phunyisa Tanyapong | Portfolio",
  description: "Computer science student at Kasetsart University with a passion for UI design and front-end development.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${SFPro.className} antialiased bg-[var(--bg-primary)] select-none`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
