import { ReactNode } from "react";
import Navbar from "./AppNav";
import Footer from "./footer";
import { Content } from "next/font/google";

type LayoutProps = {children?: ReactNode}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Navbar/>
            <main>{ children }</main>
            <Footer/>
        </div>
    );
};