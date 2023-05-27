"use client";
import Header from "@/components/Header";
import "./globals.css";
import Work from "@/components/Work";
import Portfolio from "@/components/Portfolio";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "InfotecDevs",
  description: "Grupo de Desenvolvedores",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <Header />
          {children}
          <Work />
          <Portfolio />
        </ThemeProvider>
      </body>
    </html>
  );
}
