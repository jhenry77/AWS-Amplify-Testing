"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Auth from "@/app/components/Auth"
import Navbar from "./components/AppNav";
import Footer from './components/Footer';
import styles from './components/styles/background.module.css';
import {UserPointsProvider} from './components/pointsContext';
import { CartProvider } from "./components/cartProvider";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <div className={styles['background']}>
            <UserPointsProvider><CartProvider><Auth><Navbar />{children}<Footer/></Auth></CartProvider></UserPointsProvider>
          </div>
        </body>
    </html>
  );
}