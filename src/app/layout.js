// src/app/layout.js

import "@/styles/globals.css";
import NavBar from "../components/NavBar";
import Footer  from "../components/Footer";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mapa del Pensamiento",
  description: "Un viaje a través de las tradiciones filosóficas e ideas que han marcado la historia del pensamiento humano."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
      <NavBar />        {/* ← aquí */}
        <main>{children}</main>
        <Footer />        {/* ← y aquí */}
      </body>
    </html>
  );
}