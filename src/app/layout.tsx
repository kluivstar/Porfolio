import "./globals.css";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"], // choose the weights you need
  variable: "--font-orbitron",
});

export const metadata = {
  title: "my portfolio",
  description: "built with next.js + tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable}`}>
      <body>{children}</body>
    </html>
  );
}
