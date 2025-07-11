import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LFC ELELENWO",
  icons: {
    icon: '/images/winnerslogo.img.png',
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Navbar />
        {children}
       <Footer />
        </body>
    </html>
  );
}
