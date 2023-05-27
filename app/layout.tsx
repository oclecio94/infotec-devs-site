import Header from "@/components/Header";
import "./globals.css";
import Work from "@/components/Work";
import Portfolio from "@/components/Portfolio";

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
        <Header />
        {children}
        <Work />
        <Portfolio />
      </body>
    </html>
  );
}
