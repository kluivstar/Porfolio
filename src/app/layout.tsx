import { Montserrat, Orbitron } from "next/font/google";
import "./globals.css";

// Default (Poppins)
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

// Special (Orbitron)
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-orbitron",
});

export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
     <html lang="en">
      <body className={`${montserrat.variable} ${orbitron.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
