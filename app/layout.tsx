import type { Metadata } from "next";
import { CartContextProvider } from "./context/CartContext";
import Header from "./components/layout/Header";
import MainArea from "./components/layout/Main";
import Footer from "./components/layout/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Webshop",
  description: "Simple Webshop web application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <CartContextProvider>
            <Header />
            <MainArea>{children}</MainArea>
            <Footer />
          </CartContextProvider>
        </div>
      </body>
    </html>
  );
}
