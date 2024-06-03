import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soundscape Community",
  description: "Explore, discover, and have fun with your own 3D sound map of the world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={``} lang={"en"} suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
