import React from "react";
import "./globals.css";
import Footer from "@/components/footer/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body style={{ margin: 0, padding: 0 }}>
        {" "}
        {/* Garantia via Style Inline */}
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

