import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "SuperSonic POS | Shrink Shrinkage. Operate Anywhere. Drive Sales.",
  description:
    "SuperSonic POS helps you manage multi-store operations, reduce shrinkage, and drive sales with our all-in-one point of sale solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>{children}</body>
    </html>
  );
}
