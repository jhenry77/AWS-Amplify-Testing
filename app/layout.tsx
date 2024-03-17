"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import Navbar from "./components/AppNav";
import Footer from "./components/footer";
=======
import Auth from "@/app/components/Auth"
import Navbar from "./components/AppNav";
import Footer from './components/Footer';

>>>>>>> origin/Jackson-Testing-Branch

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
<<<<<<< HEAD
        <Navbar/>{children}<Footer/>
=======
        <Auth><Navbar />{children}<Footer/></Auth>
>>>>>>> origin/Jackson-Testing-Branch
      </body>
    </html>
  );
}
