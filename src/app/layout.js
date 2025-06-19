// app/layout.js

import { Inter } from "next/font/google";
import "./globals.css";
import BackToTopButton from "@/components/BackToTopButton"; // 1. Import the new component

// 1. Import your Navbar component
import Navbar from "@/components/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "kantiotis Nick | Portfolio", // You can customize this
  description: "The professional portfolio of a Data Scientist & ML Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 2. Place the Navbar here, outside of the main content */}
        <Navbar />
        
        {/* 3. Wrap the children in a <main> tag with top padding */}
        {/* This pushes your page content down so it's not hidden by the navbar */}
        <main className="pt-1"> 
          {children}
        </main>
                {/* 2. Add the button component here */}
        <BackToTopButton /> 
      </body>
    </html>
  );
}
