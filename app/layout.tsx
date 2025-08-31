
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Rhea Parra — Beyond Limits VS",
  description: "Tech-savvy virtual assistant for strategic growth. CRM, analytics, ops, automation.",
  openGraph: {
    title: "Rhea Parra — Beyond Limits VS",
    images: ["/og-cover.png"],
  },
  icons: {
    icon: "/logo.png", // ✅ favicon
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
