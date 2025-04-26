import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";
import MainArea from "./components/layout/Main";
import Footer from "./components/layout/Footer";

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
          <Header />
          <MainArea>{children}</MainArea>
          <Footer />
        </div>
      </body>
    </html>
  );
}
