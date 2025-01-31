import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import BottomHeader from "./components/BottomHeader";
import { CartProvider } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ARSEMA Pure Naturals",
  description: "Herbal skincare for radiant, healthy skin.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>

        <div className="fixed inset-x-0 top-0 z-50 shadow">
          <Header />
          <BottomHeader />
        </div>
        {children}
        </CartProvider>
      </body>
    </html>
  );
}
