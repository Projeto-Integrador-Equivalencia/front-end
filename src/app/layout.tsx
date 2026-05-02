import React from "react";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/headers/header";

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen flex flex-col m-0 p-0">
        <Header/>
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

