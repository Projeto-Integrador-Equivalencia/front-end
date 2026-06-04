import React from "react";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/headers/header";
import { AuthProvider } from "@/contexts/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen flex flex-col m-0 p-0">
        <Header />
        <main>
          <AuthProvider>{children}</AuthProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
